import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemList from '../component/ItemList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Item list */}
      <ItemList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;
