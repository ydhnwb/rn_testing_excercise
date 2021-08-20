import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface ITodoItemProps {
    todo: any,
    editTodo: () => void,
    deleteTodo: Function
}

const TodoItem : React.FC<ITodoItemProps> = (props) => {

    return (
        <View style={styles.container}>
            <Text>I am todo</Text>
            <Button onPress={props.editTodo} title="Edit"/>
            <Button onPress={() =>props.deleteTodo()} title="Delete" color="red"/>
        </View>


    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 16
    }
})