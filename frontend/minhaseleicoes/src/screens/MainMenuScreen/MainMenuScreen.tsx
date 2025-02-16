import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importe ícones do Expo (ou outra biblioteca)
import Button from '@components/Button';
import styles from './styles';

const MainMenuScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleChartMenu = () => {
        navigation.navigate('Chart');
    };

    const handleResultsScreen = () => {
        navigation.navigate('Results');
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="poll" size={50} color="#6200ee" />
                <Text style={styles.title}>Bem-vindo ao Minhas Eleições</Text>
                <Text style={styles.subtitle}>Acompanhe os resultados eleitorais de forma simples e intuitiva</Text>
            </View>

            {/* Botões do Menu */}
            <View style={styles.menu}>
                <Button
                    title="Gráficos"
                    onPress={handleChartMenu}
                    icon={<MaterialIcons name="bar-chart" size={24} color="#fff" />}
                    style={styles.menuButton}
                    textStyle={styles.menuButtonText}
                />
                <Button
                    title="Resultados"
                    onPress={handleResultsScreen}
                    icon={<MaterialIcons name="list-alt" size={24} color="#fff" />}
                    style={styles.menuButton}
                    textStyle={styles.menuButtonText}
                />
            </View>
        </View>
    );
};

export default MainMenuScreen;