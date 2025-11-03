import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    onSubmit(email, pass){
        email = this.state.email
        pass = this.state.password
        if (!email.includes('@')){
            this.setState({error: "email invalido"})
            return
        }
        if (pass.length < 6){
            this.setState({error: "la contraseña debe tener al menos 6 caracteres"})
            return
        }
        auth.signInWithEmailAndPassword(email, pass)
        .then((response)=>{
            this.setState({loggedIn:true})
            this.props.navigation.navigate('HomeMenu')
        })
        .catch((error)=>{
            this.setState({error: "credenciales invalidas"})
    })
}

    render(){
        return(
            <View style={styles.conteiner}>
            <Text style={styles.title}>Ingresar</Text>
            <Pressable style={styles.boton2} onPress={()=>this.props.navigation.navigate('Register')}>
            <Text>Ir al registro</Text>
            </Pressable>
            <Pressable style={styles.boton} onPress={()=>this.props.navigation.navigate('HomeMenu')}>
            <Text>Entrar a la app</Text>
            </Pressable>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.form} keyboardType="email-address" onChangeText={text=>this.setState({email:text})} value={this.state.email}/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.form} keyboardType="default" onChangeText={text=>this.setState({password:text})} value={this.state.password} secureTextEntry={true}/>
            <Text style={styles.error}>{this.state.error}</Text>
            <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Logearme</Text>
            </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
        marginTop: 7
    },
    boton:{
        backgroundColor:'orange',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginBottom:7
    },
    boton2:{
        backgroundColor:'lightblue',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginBottom:7
    },
    conteiner:{
        padding:10
    },
    input:{
        borderColor:'gray',
        borderWidth:2,
        borderRadius: 3,
        padding: 10
    },
    subtitle:{
        fontSize:15,
        fontWeight:'semibold',
        marginBottom:5
    },
    error:{
        color:'red',
    }
  
  });

export default Login