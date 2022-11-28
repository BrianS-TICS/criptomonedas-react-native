import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const Formulario = ({ moneda, criptoMoneda, setMoneda, setCriptoMoneda, setConsultarApi }) => {

    const [criptoMonedas, setCriptoMonedas] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setCriptoMonedas(resultado.data.Data)
        }
        setConsultarApi(true)
        consultarAPI()
    }, [])

    const handleMonedaChange = moneda => {
        setMoneda(moneda)
    }
    const handleCriptoMonedaChange = moneda => {
        setCriptoMoneda(moneda)
    }
    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptoMoneda.trim() === '') {
            mostrarAlert()
            return;
        }
        console.log('Cotizando..')
    }
    
    const mostrarAlert = () =>{
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios',
            [
                {text : 'OK'},
            ]
        )
    }

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(moneda) => {
                    handleMonedaChange(moneda)
                }}
            >
                <Picker.Item label="- Seleccione - " value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptoMoneda}
                onValueChange={(moneda) => {
                    handleCriptoMonedaChange(moneda)
                }}
            >
                <Picker.Item label="- Seleccione - " value="" />
                {criptoMonedas.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                ))}
            </Picker>

            <TouchableHighlight
                onPress={ () => cotizarPrecio() }
                style = {styles.btnCotizar}
            >
                <Text style={styles.btnCotizarText}>Cotizar moneda</Text>
            </TouchableHighlight>
     
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: '900',
        marginVertical: 20
    },
    btnCotizar :{
        marginTop : 30,
        padding : 20,
        marginHorizontal : 10,
        backgroundColor : '#5E49E2',
        borderRadius : 10,
    },
    btnCotizarText : {
        color : 'white',
        fontSize : 20,
        textAlign : 'center',
        fontWeight : '900',
        textTransform : 'uppercase'
    }
})

export default Formulario