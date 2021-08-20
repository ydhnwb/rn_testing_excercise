import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const PrimaryButton : React.FC = () => {
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.container}>
                <Text>Im a button</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
})