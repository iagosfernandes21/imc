import React, { Component } from "react";
import { View, Text } from "react-native";
import ImcMsg from "./ImCMsg";

export class ImcCalc extends Component {

    constructor(props) {
        console.log(props)
        super(props)
    }

    render() {
        let imc = ""
        
        if(this.props.peso){
            imc = this.props.peso/(this.props.altura * this.props.altura)  
        }
        return (
            <View>
                <Text>
                    Seu IMC é: {imc}
                </Text>
                <ImcMsg imc = {imc}></ImcMsg>
            </View>
        )
    }
}


export default ImcCalc