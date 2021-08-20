import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import API from '../../../data/common/module/network_module';
import LoginRequest from '../../../data/login/dto/login_request';


const LoginPage : React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [networkError, setNetworkError] = useState("")


    const onSubmit = async () => {
        if(validate()){
            const requestBody : LoginRequest = { email, password }
            await API.post("auth/login", requestBody)
                .then(res => res.data)
                .catch((e: AxiosError) => {
                    const errorMsg = e.response?.data['errors'][0]
                    setNetworkError(errorMsg)
                    return null
                })
        }
    }

    //simplified
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

            <Text style={[styles.error, styles.spacer]}>{networkError}</Text>

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