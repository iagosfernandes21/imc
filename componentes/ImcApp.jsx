import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ImcCalc from'./ImcCalc' 


export class ImcApp extends Component {
    constructor (props){  
    super(props)
    this.state = {
        peso:0,
        altura:0.0,
        peso2:0,
        altura2:0.0,

    }
}

    calc(){
        this.setState({
            altura: this.state.altura2,
            peso: this.state.peso2,
        }
        )}

    render(){
        console.log(this.state)
        return(
            <View>
                <Text>
            
            <TextInput
            placeholder="Qual seu Peso em Kg"
            onChangeText = {(peso) => this.setState({peso2: peso})}>
            </TextInput>
            
            <TextInput
            placeholder= "Qual Altura em cm" 
            onChangeText={(altura) => this.setState({altura2: altura})}>
            </TextInput>

            <Button title ="Calcular" onPress={() => this.calc()}> </Button>
                </Text>

                <ImcCalc peso = {this.state.peso} altura = {this.state.altura}>
                
                </ImcCalc>
            </View>
        )
    }
}

export default ImcApp