import { boolean } from 'fp-ts';
import { pass } from 'fp-ts/lib/Writer';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const LoginPage : React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const onSubmit = () => {
        if(validate()){
            console.log("Success")
        }else{
            console.log("Failed")
        }
    }

    const validate = () : boolean => {
        setEmailError("")
        setPasswordError("")

        if(email.trim().length == 0){
            setEmailError("Email is not valid")
            return false
        }

        if(password.trim().length == 0){
            setPasswordError("Password is not valid")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Hello login</Text>
            <TextInput
                underlineColorAndroid="blue"
                onChangeText={setEmail}
                placeholder="Email"
            />

            <Text testID="textEmailError" style={[styles.error, styles.spacer]}>{emailError}</Text>
            <TextInput
                underlineColorAndroid="blue"
                onChangeText={setPassword}
                placeholder="Password"
            />
            <Text testID="textPasswordError" style={[styles.error, styles.spacer]}>{passwordError}</Text>

            <Button testID="buttonLogin" onPress={onSubmit} title="Sign in"/>
        </View>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    container : {
        padding: 16
    },
    titleHeader: {
        fontSize: 18,
        fontWeight: '600'
    },
    error: {
        color: 'red'
    },
    spacer: {
        marginTop:2,
        marginBottom:4
    }
})