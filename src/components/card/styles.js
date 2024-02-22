import styled from 'styled-components/native';

export const TitleCard = styled.Text`
  font-size: 22px;
`;
export const DescriptionCard = styled.Text`
  font-size: 22px;
  overflow: hidden;
  font-weight: 200;
`;

export const TypeCard = styled.Text`
  font-size: 22px;
`;
export const Tag = styled.View`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 89px;

  background-color: #adadad;
`;

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background-color: #c0c0c0;
`;

export const CardContainer = styled.View`
  display: flex;
  padding: 20px;
  min-height: 150px;
  max-height: 400px;
  border-radius: 8px;
  background-color: #ededed;
  gap: 4px;
`;
export const Line = styled.View`
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  margin-left: -14px;

  gap: 16px;
  padding: 0;
`;

export const LineIn = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-left: -18px;
`;
