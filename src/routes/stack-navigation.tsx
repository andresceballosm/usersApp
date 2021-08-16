import * as React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Home from '../views/home/home.component';
import Person from '../views/person/person.component';

// styles
import { styles } from './routes.styled';


const Stack = createStackNavigator();

export default function StackNavigation() {
    const navigation = useNavigation();
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'Home',
                    headerStyle: { backgroundColor: '#000000' },
                    headerTintColor: 'white'
                }}
                
            />
            <Stack.Screen 
                name="Person" 
                component={Person} 
                options={{
                    title: 'Person',
                    headerStyle: { backgroundColor: '#000000' },
                    headerLeft: () => (
                        <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        style={styles.viewHeaderLeft}>
                            <Image 
                                source={ require('../assets/back-icon.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.textTitle}>Home</Text>
                        </TouchableOpacity>  
                    ),
                }}
            />
        </Stack.Navigator>
    )
};

export { StackNavigation };