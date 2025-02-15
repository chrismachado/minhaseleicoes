import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    resultItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: '#ccc',
    },
    id: {
        fontSize: 16,
        marginRight: 10,
    },
    candidate: {
        fontSize: 16,
        marginRight: 10,
    },
    votes: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    urnaItem: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#ccc'
    },
    municipio: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    candidatosTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    candidatoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        height: 'auto'
    },
    loadingText: {
        fontSize: 18,
        marginTop: 10,
    },
    errorText: {
        fontSize:16,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    },
    noDataText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '25%',
        marginBottom: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6200ee',
        paddingLeft: 5,
    },
    pickerItem: {
        fontSize: 16,
        color: '#333',
    },
    scrollView: {
        flex: 1,
        width: '25%',
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ccc',
        marginRight: 16,
        paddingRight: 10
    },
    candidatoInfo: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 16,
    },
});

export default styles;