import React from 'react';
import {View, Text} from 'react-native';
import Button from '@components/Button';
import styles from './styles';

import { NavigationProp } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleAcknowledge = () => {
        navigation.navigate('Results');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Minhas Eleições</Text>
            <Text style={styles.text}>
                Este aplicativo foi desenvolvido apenas para fins de estudo e não possui nenhuma ligação com o TSE.
            </Text>
            <Button title="Estou ciente" onPress={handleAcknowledge} />
        </View>
    );
};

export default WelcomeScreen