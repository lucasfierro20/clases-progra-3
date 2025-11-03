import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { db, auth } from '../firebase/config'




class NewPost extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            userName:'',
            password:'',
        }
    }
    onSubmit(email, pass, user){
        console.log(this.state.email, this.state.password, this.state.userName);
        email = this.state.email
        pass = this.state.password
        auth.createUserWithEmailAndPassword(email, pass)
         .then(response => {
            this.setState({registered: true})
            db.collection('users').add({
                email: auth.currentUser.email,
                userName: this.state.userName,
                createdAt: Date.now(),
            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
            this.props.navigation.navigate('Login')
        })
        .catch(error => {
            this.setState({error: 'Fallo en el registro'})
        })

    }
    

    
    render(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Registro</Text>
            <Pressable style={styles.boton} onPress={()=>this.props.navigation.navigate('Login')}> 
                <Text>Ya tengo cuenta</Text>
            </Pressable>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" onChangeText={text=>this.setState({email:text})} value={this.state.email}/>
            <Text style={styles.subtitle}>Username</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({userName:text})} value={this.state.userName}/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.input} keyboardType="default" onChangeText={text=>this.setState({password:text})} value={this.state.password} secureTextEntry={true}/>
            <Text style={styles.error}>{this.state.error}</Text>
            <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Registrarme</Text>
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
        marginTop: 7,
    },
    boton:{
        backgroundColor:'orange',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginBottom:7,
        marginTop: 7,
    },
    boton2:{
        backgroundColor:'lightblue',
        borderRadius:4,
        padding:10,
        alignItems:'center',
        marginTop: 9,
    },
    conteiner:{
        padding:10
    },
    input:{
        borderColor: 'grey',
        borderRadius: 3,
        borderWidth: 2,
        padding: 10,
    },
    subtitle:{
        fontSize:15,
        fontWeight:'semibold',
        marginBottom:5,
        marginTop:7,
    },
    error:{
        color:'red'
    }
  
  });

export default NewPost

