import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,            
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headertextBold: {
        fontWeight: 'bold'
    },

    tilte: {
        fontSize: 30,
        marginBottom: 16,
        margin: 18,
        color: '#13131a',
        fontWeight: 'bold'
    },

    descripton:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList:{
        marginTop: 32,
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color: '#e82041',
        fontSize: 15,
        fontWeight: 'bold'
    },
});