import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        borderRadius:12,  
        padding: 15,
        borderBottomWidth:.5,
        justifyContent:'center',
    },
    avatar: {
        flex:1
    },
    data: {
        flex:2,
        justifyContent:'center'
    },
    name: {
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    location: {
        fontSize:14,
        color: 'gray'
    },
    image: {
        height:100,
        width: 100,
        borderRadius: 50
    }
})