import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';

import { media } from '../../../utils/MediaQueries';

const Card = styled(MaterialCard)`
  width: 100%;
`;

const MainContainer = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: space-around;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 16px;
  width: calc(100% - 32px);

  ${media.desktop`
    width: 60%;
  `}

  ${media.giant`
    width: 25%;
  `}
`;

const SpinnerIcon = styled(Icon)`
  color: ${props => props.color || '#FFFFFF'};
  animation: spin 1s infinite ease-out;
  position: absolute;
  top: 196px;
  left: calc(50% - 32px);

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
`;

export default {
  Card,
  MainContainer,
  ContentContainer,
  SpinnerIcon,
};
