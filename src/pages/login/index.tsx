import React from "react";
import { View, Text, Image } from "react-native";
import Logo from "../../assets/logo_etec.png";

export default function login() {
    return (
        <View>
            <View> {/* Logo */}
                <Image source={Logo} />
                <Text>Bem Vindo de Volta</Text>
            </View>

            <View> {/* input */}
                <Text></Text>
            </View>

            <View> {/* footer */}
                <Text>Bottom</Text>
            </View>

        </View>
    );


}