import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Logo from "../../assets/logo_etec.png";
import { style } from "./styles";

export default function login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} resizeMode="contain" />
                <Text style={style.textTitle}>Bem Vindo de Volta</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.text}>Endenreço de E-mail</Text>
                <TextInput style={style.input} placeholder="testedasilva@email.com"></TextInput>
                <Text style={style.text}>Senha</Text>
                <TextInput style={style.input} placeholder="Digite sua senha"></TextInput>
            </View>

            <View>
                <Text>Bottom</Text>
            </View>

        </View>
    );
}