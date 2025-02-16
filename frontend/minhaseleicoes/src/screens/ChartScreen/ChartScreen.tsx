import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BarChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons'; // Importe ícones do Expo (ou outra biblioteca)
import styles from './styles';
import Button from '@components/Button';
import api from '@services/api';
import { NavigationProp } from '@react-navigation/native';

interface Cargo {
    cargoId: number;
    descricao: string;
}

interface Candidato {
    id: number;
    nome: string;
    partido: string;
    numero: number;
    votos: number;
    cargo: Cargo;
}

const ChartScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleBack = () => {
        navigation.navigate('MainMenu');
    };

    const [topCandidatos, setTopCandidatos] = useState<Candidato[]>([]);
    const [cargos, setCargos] = useState<Cargo[]>([]);
    const [selectedCargo, setSelectedCargo] = useState<number | undefined>(7); // Predefinir o cargo de vereador
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCargos = async () => {
        try {
            const response = await api.get('/cargos/todos');
            setCargos(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError('Ocorreu um erro ao buscar os cargos' + error);
            setLoading(false);
        }
    };

    const fetchTopCandidatos = async (cargoId: number) => {
        if (cargoId === undefined || cargoId === null) return;
        try {
            const response = await api.get('/candidatos/cargo/top/' + cargoId);
            setTopCandidatos(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError('Ocorreu um erro ao buscar os candidatos\n' + error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCargos();
    }, []);

    useEffect(() => {
        if (selectedCargo !== undefined) {
            fetchTopCandidatos(selectedCargo as number);
        }
    }, [selectedCargo]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#6200ee" />
                <Text style={styles.loadingText}>Carregando dados...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
                <Button title="Tentar novamente" onPress={() => { fetchCargos(); }} />
            </View>
        );
    }

    const MAX_CANDIDATOS = 7;
    const candidatosExibidos = topCandidatos.slice(0, MAX_CANDIDATOS);
    const outrosVotos = topCandidatos.slice(MAX_CANDIDATOS).reduce((total, candidato) => total + candidato.votos, 0);

    const chartData = {
        labels: [
            ...candidatosExibidos.map((candidato) => `${candidato.numero}`),
            ...(outrosVotos > 0 ? ['Outros'] : []),
        ],
        datasets: [
            {
                data: [
                    ...candidatosExibidos.map((candidato) => candidato.votos),
                    ...(outrosVotos > 0 ? [0] : []),
                ],
            },
        ],
    };

    const chartWidth = Math.max(Dimensions.get('window').width * 0.9, topCandidatos.length * 100);
    const chartHeight = Math.max(Dimensions.get('window').height * 0.6, 300);

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="bar-chart" size={40} color="#6200ee" />
                <Text style={styles.title}>Candidatos Mais Votados</Text>
            </View>

            {/* Seletor de Cargo */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCargo}
                    onValueChange={(itemValue) => {
                        setSelectedCargo(itemValue);
                    }}
                    style={styles.picker}
                    dropdownIconColor="#6200ee"
                    mode="dropdown"
                >
                    <Picker.Item label="Selecione um cargo" value={undefined} />
                    {cargos.map((cargo) => (
                        <Picker.Item
                            key={cargo.cargoId}
                            label={cargo.descricao}
                            value={cargo.cargoId}
                            style={styles.pickerItem}
                        />
                    ))}
                </Picker>
            </View>

            {/* Gráfico */}
            {topCandidatos.length > 0 ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <BarChart
                        data={chartData}
                        width={chartWidth}
                        height={chartHeight}
                        yAxisLabel=""
                        yAxisSuffix=""
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForLabels: {
                                fontSize: 12,
                                fontWeight: 'bold',
                            },
                            propsForVerticalLabels: {
                                fontSize: 12,
                                fontWeight: 'bold',
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            padding: 10,
                            borderRadius: 16,
                        }}
                    />
                </ScrollView>
            ) : (
                <Text style={styles.noDataText}>Nenhum dado encontrado para o cargo selecionado.</Text>
            )}

            {/* Legenda de "Outros" */}
            {outrosVotos > 0 && (
                <Text style={styles.legendaText}>
                    * "Outros" inclui {outrosVotos} votos de candidatos não exibidos.
                </Text>
            )}

            {/* Botão Voltar */}
            <Button
                title="Voltar"
                onPress={handleBack}
                style={styles.button}
                textStyle={styles.buttonText}
            />
        </View>
    );
};

export default ChartScreen;