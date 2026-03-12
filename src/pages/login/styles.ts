import { Dimensions, StyleSheet } from 'react-native';
import { themas } from "../../global/themes";
export const style = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    boxTop: {
        height: Dimensions.get("window").height / 3,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    boxMid: {
        height: Dimensions.get("window").height / 4,
        width: '100%',

    },
    boxBottom: {
        height: Dimensions.get("window").height / 3,
        width: '100%'
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 15
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
    },
    text: {
        color: themas.color.gray
    },
    input: {
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 2,
    }

});