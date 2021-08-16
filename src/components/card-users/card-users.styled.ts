import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#54a5e8',
        width:90,
        justifyContent:'center',
        margin:15,
        alignItems:'center',
        borderRadius:12,  
        minHeight: 40,
        marginBottom:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
    },
    text: {
        color: '#ffffff'
    }
})