import React, { useState, useEffect} from 'react';
import { View, ScrollView, Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker'
import styles from './styles';
import axios from 'axios';

import { NavigationProp } from '@react-navigation/native';
import Button from '@components/Button';

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
    cargo: Cargo
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


const ResultsScreen = ( { navigation }: {navigation: NavigationProp<any>}) => {
    const handleBack = () => {
        navigation.navigate('Welcome');
    }

    const [results, setResults] = useState<Result[]>([]);
    const [urnas, setUrnas] = useState<Urna[]>([]);
    const [topCandidatos, setTopCandidatos] = useState<Candidato[]>([]);
    const [cargos, setCargos] = useState<Cargo[]>([]);
    const [selectedCargo, setSelectedCargo] = useState<number | undefined>(7);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchCargos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/cargos/todos');
            setCargos(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Erro ao carregar dados. Tente novamente em alguns instantes.');
            setLoading(false);
        }
    }

    const fetchTopCandidatos = async (cargoId : number) => {
        if (cargoId === undefined || cargoId === null) {
            return;
        }

        try {
            const response = await axios.get('http://localhost:8080/api/v1/candidatos/cargo/top/' + cargoId);
            setTopCandidatos(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Erro ao carregar dados. Tente novamente em alguns instantes.');
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCargos();
    }, []);

    useEffect(() => {
        if (selectedCargo !== undefined) {
            fetchTopCandidatos(selectedCargo as number);
        }
    }, [selectedCargo]);

    if(loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#6200ee"/>
                <Text style={styles.loadingText}>Carregando dados...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
                <Button title="Tentar novamente" onPress={() => window.location.reload()} />
            </View>
        );
    }

    // if (topCandidatos.length == 0) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.noDataText}>Nenhum dado encontrado.</Text>
    //             <Button title="Voltar" onPress={handleBack} />
    //         </View>
    //     );
    // }

   

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Resultados</Text>
            <Picker
                selectedValue={selectedCargo}
                onValueChange={(itemValue) => {
                    setSelectedCargo(itemValue);
                }}
                style={styles.picker}
                dropdownIconColor="#6200ee"
                mode='dropdown'
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
            
            {/* Lista de candidatos  */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
                <FlatList
                    data={topCandidatos || []}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View 
                            style={styles.container}
                        >
                        <View key={item.id.toString()} style={styles.candidatoItem}>
                            <View style={styles.avatarPlaceholder}/>
                            <View style={styles.candidatoInfo}>
                                <Text style={styles.candidate}>{item.nome} ({item.partido})</Text>
                                <Text style={styles.votes}>{item.numero}</Text>
                                <Text style={styles.votes}>{item.votos}</Text>
                            </View>
                        </View>
                            {/* <Text style={styles.votes}>{item.cargo.descricao}</Text> */}
                        </View>
                    )}
                    ItemSeparatorComponent={ () => <View style={styles.separator} />}
                    showsVerticalScrollIndicator={true}
                />
            </ScrollView>
            <Button title="Voltar" onPress={handleBack} />
        </View>
    );
};

export default ResultsScreen;