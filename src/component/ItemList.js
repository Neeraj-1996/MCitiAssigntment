import React from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import custumFetchApi from '../hooks/custumFetchApi';
import ItemCard from './ItemCard';

const ItemList = () => {
  const { data, loading, error } = custumFetchApi('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error fetching items</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ItemCard item={item} />}
    />
  );
};

export default ItemList;
