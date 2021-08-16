import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

// styles
import { styles } from './card-users.styled';

const CardUsersComponent: React.FC<{
    username: string;
    handleTapDetail: (username: string) => void;
}> = ({ username, handleTapDetail }) => {
    return (
        <TouchableOpacity 
        onPress={ () => handleTapDetail(username)}
        style={styles.card}>
            <Text style={styles.text}>{username}</Text>
        </TouchableOpacity>
    );
};

export default CardUsersComponent;
