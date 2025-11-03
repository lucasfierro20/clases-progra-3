import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { db, auth } from "../firebase/config";
import { View } from "react-native-web";


class Users extends Component{
    constructor(props) {
      super(props)
        this.state={
          lista:[],
          loading: true,            
        }
    }
    
    componentDidMount(){
        db.collection('users').onSnapshot(
            docs =>{
                const listaUser = []
                docs.forEach( doc => {
                    listaUser.push({
                        id: doc.id,
                        data: doc.data(),
                    })
               })
                this.setState({
                    lista: listaUser,
                    loading: false,
                })
                console.log(listaUser);
            }
        )
    }
    
    render(){    
        console.log(this.state.lista);  
        return(
            <View>
            <Text>Lista de usuarios:</Text>
           <FlatList
           data={this.state.lista}
           keyExtractor={(item)=>item.id.toString()}
           renderItem={({item})=><Text>{item.data.email}</Text>}
           />
           </View>
        )
    }
}

export default Users
