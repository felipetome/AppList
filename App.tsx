import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native';
import { Card } from './src/components/card';
import { CardList, ListContainer, Safe } from './src/global';
import { fetchData } from './src/api';

export interface DataType {
  totalLikes: number;
  id: string;
  title: string;
  description: string;
  type: string;
  comments: number;
}

export default function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchDataFromApi = async () => {
    const apiData = await fetchData();
    setData(apiData);
    setRefreshKey((prevKey) => prevKey + 1);
    console.log(apiData);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDataFromApi().then(() => setRefreshing(false));
  }, []);

  const renderItem: ListRenderItem<DataType> = ({ item }) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
      type={item.type}
      likes={item.totalLikes}
      comments={item.comments}
      postId={item.id}
    />
  );   




  

  return (
    <Safe>
      <ListContainer>
        <CardList
          data={data}
          renderItem={renderItem}
          keyExtractor={({ id }: { id: string }) => id}
          contentContainerStyle={{ gap: 16 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          extraData={data}
        />
      </ListContainer>
    </Safe>
  );
}
