import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

class DynamicForm extends Component{
    constructor(props){
        super(props)
        this.state={
            comentario:''
        }
    }
    onSubmit(){
        console.log(this.state.comentario);
    }
    render(){
        return(
            <View style={styles.conteiner}>
                <Text style={styles.title}>Comentario</Text>
                <TextInput style={styles.form} keyboardType="default" onChangeText={text=>this.setState({comentario:text})} value={this.state.comentario}/>
                <Pressable style={styles.boton2} onPress={()=>this.onSubmit()}> 
                <Text>Comentar</Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
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
  
  });


export default DynamicForm