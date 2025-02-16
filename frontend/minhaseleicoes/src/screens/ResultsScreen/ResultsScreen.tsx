import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons'; // Importe ícones do Expo (ou outra biblioteca)
import styles from './styles';

import { NavigationProp } from '@react-navigation/native';
import Button from '@components/Button';
import api from '@services/api';

interface Result {
    id: number;
    candidato: string;
    votos: number;
}

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

interface Urna {
    id: number;
    codigoIdentificacao: string;
    municipio: string;
    zonaEleitoral: string;
    secaoEleitoral: string;
    votosValidos: number;
    votosBrancos: number;
    votosNulos: number;
    candidatos: Candidato[];
}

const ResultsScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const handleBack = () => {
        navigation.navigate('MainMenu');
    };

    const handleCargoChange = (itemValue : number | undefined) => {
        if (itemValue === undefined || itemValue.toString() == 'Selecione um cargo') {
            setSelectedCargo(undefined);
            setTopCandidatos([]);
        } else {
            setSelectedCargo(itemValue);
        }    
    };

    const [results, setResults] = useState<Result[]>([]);
    const [urnas, setUrnas] = useState<Urna[]>([]);
    const [topCandidatos, setTopCandidatos] = useState<Candidato[]>([]);
    const [cargos, setCargos] = useState<Cargo[]>([]);
    const [selectedCargo, setSelectedCargo] = useState<number | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCargos = async () => {
        try {
            const response = await api.get('/cargos/todos');
            setCargos(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Erro ao carregar dados. Tente novamente em alguns instantes.');
            setLoading(false);
        }
    };

    const fetchTopCandidatos = async (cargoId: number) => {
        if (cargoId === undefined || cargoId === null || cargoId.toString() == 'Selecione um cargo') {
            setTopCandidatos([]);
            return;
        }

        try {
            const response = await api.get('/candidatos/cargo/top/' + cargoId);
            setTopCandidatos(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Erro ao carregar dados. Tente novamente em alguns instantes.' + error);
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
            <View style={styles.containerLoading}>
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

    if (topCandidatos.length == 0 && selectedCargo !== undefined && selectedCargo != 'Selecione um cargo') {
        return (
            <View style={styles.container}>
                <Text style={styles.noDataText}>Nenhum dado encontrado.</Text>
                <Button title="Voltar" onPress={handleBack} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="poll" size={40} color="#6200ee" />
                <Text style={styles.title}>Resultados</Text>
            </View>

            {/* Seletor de Cargo */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCargo}
                    onValueChange={handleCargoChange}
                    style={styles.picker}
                    dropdownIconColor="#6200ee"
                    mode="dropdown"
                >
                    <Picker.Item key={undefined} label="Selecione um cargo" value={undefined} />
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

            {/* Lista de Candidatos */}
            <FlatList
                style={styles.scrollView}
                data={topCandidatos || []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.candidatoItem}>
                        <View style={styles.avatarPlaceholder}>
                            <MaterialIcons name="person" size={30} color="#6200ee" />
                        </View>
                        <View style={styles.candidatoInfo}>
                            <Text style={styles.candidate}>{item.nome} ({item.partido})</Text>
                            <Text style={styles.votes}>Número: {item.numero}</Text>
                            <Text style={styles.votes}>Votos: {item.votos}</Text>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={true}
            />

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

export default ResultsScreen;