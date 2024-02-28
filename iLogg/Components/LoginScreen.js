import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../Styles';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('login')

    const handleLogin = () => {
        axios.post('https://eb54-197-210-227-155.ngrok-free.app/signup', {  
            'email': email,
            'password': password
        })
        .then(response => {
            console.log('signed up in');
        })
        .catch(error => {
            Alert.alert('Error', error.message);
        });
    };

    return (
        <ImageBackground
            source={require('../assets/login-hero.jpg')}
            style={{ flex: 1, resizeMode: 'cover' }}
        >
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.innerContainer2}>
                        <Text style={styles.heading}>Welcome To iLOG</Text>
                        <Text style={styles.smallText}>Sign up to continue</Text>

                        <View style={styles.wrap}>
                            <TouchableOpacity style={styles.btn2} onPress={setAuth('login')}>
                                <Text style={{ padding: 15 }}>Log in</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2} onPress={setAuth('signup')}>
                                <Text style={{ padding: 15 }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={auth === 'signup' ? styles.userInput : { display: 'none' }}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="white"
                                placeholder='Email'
                                value={email}
                                onChangeText={setEmail}
                            />

                            <TextInput
                                style={styles.input}
                                placeholderTextColor="white"
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity style={styles.btn1} onPress={handleLogin}>
                                <Text style={{ padding: 15 }}>Sign Up</Text>
                            </TouchableOpacity>

                            <Text style={styles.text}>{'\n'}already have an account? log in</Text>
                        </View>

                        <View style={auth === 'login' ? styles.userInput : { display: 'none' }}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="white"
                                placeholder='Email'
                                value={email}
                                onChangeText={setEmail}
                            />

                            <TextInput
                                style={styles.input}
                                placeholderTextColor="white"
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                            />

                            <TouchableOpacity style={styles.btn1} onPress={handleLogin}>
                                <Text style={{ padding: 15 }}>Login</Text>
                            </TouchableOpacity>

                            <Text style={styles.text}>{'\n'}don't have an account? sign up</Text>
                            
                            <View style={styles.userInput}>
                                <Ionicons name="finger-print" size={104} color="white" />
                                <Text style={styles.text}>{'\n'}Login with Touch Id</Text>
                            </View>
                        
                        </View>

                        
                    </View>
                </View>
                
            </View>
        </ImageBackground>
    );
}

export default LoginScreen;
