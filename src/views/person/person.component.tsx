import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import CardUserComponent from '../../components/card-user/card-user.component';

type Props = {};

const PersonComponent: React.FC<Props> = (props: any) => {
    const [user, setUser] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const username = props.route.params?.username;
            const response = await fetch(`https://api.github.com/users/${username}`);
            const result = await response.json();
            setUser(result);
        } catch (error) {
            setUser({});
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{flex:1}}>
            { loading ?
                <ActivityIndicator size="small" color="#0000ff" />
                : 
                <CardUserComponent testID='card-user-test' user={user}/>
            }
        </View>
    );
};

export default PersonComponent;
