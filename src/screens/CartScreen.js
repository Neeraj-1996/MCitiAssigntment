import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, FlatList, Modal, TextInput, StyleSheet } from 'react-native';
import { deleteItem, updateItem } from '../redux/cartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = ({navigation}) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    // Function to open the modal and set the selected item
    const openModal = (item) => {
        setSelectedItem(item);
        setNewTitle(item.title); // Prefill the input with the current title
        setIsModalVisible(true);
    };

    // Function to handle updating the item title
    const handleUpdate = () => {
        if (selectedItem) {
            dispatch(updateItem({ ...selectedItem, title: newTitle }));
            setIsModalVisible(false); // Close the modal
        }
    };

    if (cartItems.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Your Cart is Empty</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.buttonsContainer}>
                            <Icon.Button
                                name="trash"
                                backgroundColor="#ff6347"
                                onPress={() => dispatch(deleteItem(item.id))}
                            >
                                Delete
                            </Icon.Button>
                            <Icon.Button
                                name="edit"
                                backgroundColor="#4682b4"
                                onPress={() => openModal(item)}  // Open modal to update item
                            >
                                Update
                            </Icon.Button>
                        </View>
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

            {/* Modal for updating the item title */}
            {isModalVisible && (
    <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Update Item</Text>
                <TextInput
                    style={styles.input}
                    value={newTitle}
                    onChangeText={setNewTitle}
                    placeholder="Enter new title"
                    placeholderTextColor="#000" // Black color for placeholder text
                />
                
                <View style={styles.buttonContainer}>
                    <Button title="Update" onPress={handleUpdate} />
                    <Button title="Cancel" color="red" onPress={() => setIsModalVisible(false)} />
                </View>
            </View>
        </View>
    </Modal>
)}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    cartItem: {
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
        color: '#000'
    },
    buttonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        color: '#000'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#000'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
        color:'#000'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10, 
    },
});

export default CartScreen;

