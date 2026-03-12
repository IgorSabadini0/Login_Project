import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Logo from "../../assets/logo_etec.png";
import Styles from "./styles"

export default function login() {
    return (
        <View style={Styles.container}>
            <View> {/* Logo */}
                <Image source={Logo} resizeMode="contain" />
                <Text>Bem Vindo de Volta</Text>
            </View>

            <View> {/* input */}
                <Text>Endenreço de E-mail</Text>
                <TextInput></TextInput>
                <Text>Senha</Text>
            </View>

            <View> {/* footer */}
                <Text>Bottom</Text>
            </View>

        </View>
    );


}