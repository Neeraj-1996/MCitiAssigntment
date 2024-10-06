import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem, favoriteItem } from '../redux/cartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.buttonsContainer}>
        <Icon.Button
          name="shopping-cart"
          backgroundColor="#ff6347"
          onPress={() => dispatch(addItem(item))}
        >
          Add to Cart
        </Icon.Button>
        <Icon.Button
          name="heart"
          backgroundColor="#4682b4"
          onPress={() => dispatch(favoriteItem(item))}
        >
          Favorite
        </Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ItemCard;
