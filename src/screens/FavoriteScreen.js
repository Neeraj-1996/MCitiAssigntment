import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteScreen = ({ navigation }) => {
  const favoriteItems = useSelector(state => state.cart.favorites);

  if (favoriteItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No favorite items yet</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
      />
      <Icon.Button
        name="home"
        backgroundColor="#4682b4"
        onPress={() => navigation.navigate('Home')}
      >
        Back to Home
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  favoriteItem: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color:'#000'
  },
});

export default FavoriteScreen;
