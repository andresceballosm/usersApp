import React from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';

// styles
import { styles } from './card-user.styled';

const CardUserComponent: React.FC<{
    user: any;
    testID?: string
}> = ({ user }) => {
    return (
        <View 
        style={styles.card}>
            <View style={styles.avatar}>
                <Image 
                    style={ styles.image } 
                    source={{ uri: user.avatar_url } }
                />
            </View>
            <View style={styles.data}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.location}>{user.location}</Text>
            </View>
        </View>
    );
};

export default CardUserComponent;
