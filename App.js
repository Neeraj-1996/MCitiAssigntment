import React,{useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

const HeaderButtons = ({ navigation }) => {
  const cartCount = useSelector(state => state.cart.items.length); 
  const favoriteCount = useSelector(state => state.cart.favorites.length); 

  return (
    <View style={styles.headerContainer}>
      {/* Favorite Icon with Count */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorites')}
        style={styles.iconContainer}
      >
        <Icon name="heart-outline" size={24} color="black" />
        {favoriteCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{favoriteCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Cart Icon with Count */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.iconContainer}
      >
        <Icon name="cart-outline" size={24} color="black" />
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  useEffect(()=>{

    let fun =()=>{
      SplashScreen.hide();
    }
   setTimeout(fun,2000);  
  })
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              title: 'Items',
              headerRight: () => <HeaderButtons navigation={navigation} />,
            })}
          />
          <Stack.Screen   
            name="Cart" 
            component={CartScreen} 
            options={({ navigation }) => ({
              title: 'Cart',
              headerRight: () => <HeaderButtons navigation={navigation} />,
            })}
          />
          <Stack.Screen 
            name="Favorites" 
            component={FavoriteScreen} 
            options={({ navigation }) => ({
              title: 'Favorites',
              headerRight: () => <HeaderButtons navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  iconContainer: {
    marginHorizontal: 10,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default App;

