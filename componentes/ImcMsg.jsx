import React, {Component} from "react";

import { View, Text } from "react-native";

export class ImcMsg extends Component{
    constructor (props){
    super (props)
    }

    render(){
        let situacao= "";
        let imc = this.props.imc;
        if (this.props.imc < 17 && this.props.imc > 0){
            situacao = "Muito abaixo do peso";
        }else if (this.props.imc>17 && this.props.imc < 18.49){
            situacao="Baixo do peso";
        }else if(this.props.imc>18.50 && this.props.imc <24.99){
            situacao="Peso normal";
        }else if(imc>25 && imc <29.99 ){
            situacao="Acima do peso";
        }else if(imc>30 && imc <34.99){
            situacao ="Obesidade nivel 1"; 
        }else if(imc> 35 && imc <39.99){
            situacao ="Obesidade nivel 2";
        }else if(imc > 40){
            situacao ="Obesidade nivel 3";
        }
   return (
       <View>
    <Text>
       {situacao}
    </Text>
       </View>
        )
    }
 
}

export default ImcMsg