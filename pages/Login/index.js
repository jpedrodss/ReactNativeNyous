import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { url } from '../../utils/constants'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const salvar = async (value) => {
        try {
            await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
            // saving error
        }
    }

    const Logar = () => {

        const corpo = {
            email: email,
            senha: senha
        }

        fetch(`${url}/api/Account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status != 404) {
                    alert('Seja bem vindo');

                    salvar(data.token);
                    navigation.push('Autenticado');
                } else {
                    alert('Email ou senha inválidos! :( ');
                }
            })

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.textoHeader}>Faça o login:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Coloque o email"
                        onChangeText={text => setEmail(text)}
                        defaultValue={email}
                        keyboardType={"email-address"}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Coloque a senha"
                        onChangeText={text => setSenha(text)}
                        defaultValue={senha}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={Logar}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoHeader: {
        color: '#3b3b3b',
        fontSize: 36
    },
    input: {
        width: 250,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        borderRadius: 6
    },
    button: {
        backgroundColor: '#3b3b3b',
        width: 150,
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: 'white'
    }

});