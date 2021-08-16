// vendors
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    View
} from 'react-native';

//components
import CardUsersComponent from '../../components/card-users/card-users.component';

// styles
import { styles } from './home.styled';

type Props = {
    navigation: any;
};

const HomeComponent: React.FC<Props> = ({ navigation }) => {
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users?per_page=5');
            const result = await response.json();
            setUsers(result);
        } catch (error) {
            setUsers([]);
        } finally {
            setLoading(false);
        }
    }

    const handleTapDetail = ( username: string) => {
        navigation.navigate('Person', { username }) 
    };

    return (
        <View style={styles.container}>
            { loading ?
                <ActivityIndicator size="small" color="#0000ff" />
                : 
                <FlatList 
                    testID="test-users"
                    data={users}
                    numColumns={3}
                    renderItem= {({item, index}) => (
                        <CardUsersComponent 
                            key={index} 
                            handleTapDetail={handleTapDetail} 
                            username={item.login} 
                        /> 
                    )}
                />
            }
        </View>
    );
};

export default HomeComponent;
