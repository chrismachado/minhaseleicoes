import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importe ícones do Expo (ou outra biblioteca)
import Button from '@components/Button';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleAcknowledge = () => {
        navigation.navigate('MainMenu');
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="how-to-vote" size={50} color="#6200ee" />
                <Text style={styles.title}>Bem-vindo ao Minhas Eleições</Text>
            </View>

            {/* Texto de Aviso */}
            <View style={styles.content}>
                <Text style={styles.text}>
                    Este aplicativo foi desenvolvido apenas para fins de estudo e não possui nenhuma ligação com o TSE.
                </Text>
            </View>

            {/* Botão */}
            <Button
                title="Estou ciente"
                onPress={handleAcknowledge}
                style={styles.button}
                textStyle={styles.buttonText}
            />
        </View>
    );
};

export default WelcomeScreen;