import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';

const Card = styled(MaterialCard)`
  height: ${props => props.height || '500px'};
  width: ${props => props.width || '400px'};
`;

const MainContainer = styled.div`
  padding-top: 64px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
`;

export default {
  Card,
  MainContainer,
  ContentContainer,
};
