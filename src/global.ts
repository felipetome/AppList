import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { DataType } from '../App';
import { StatusBar } from 'react-native';

export const ListContainer = styled.View`
  justify-content: center;
  align-self: center;
  width: 100%;
`;

export const CardList = styled(FlatList as new () => FlatList<DataType>)`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

export const StyledListContainer = styled(ListContainer)`
  margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
`;
