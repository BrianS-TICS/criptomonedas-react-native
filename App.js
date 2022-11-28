import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Cotizacion from './components/cotizacion';
import Formulario from './components/Formulario';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const App = () => {

  const [moneda, setMoneda] = useState('')
  const [criptoMoneda, setCriptoMoneda] = useState('')
  const [consultarApi, setConsultarApi] = useState(false)
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarApi) {
        // Obtener cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        setResultado(resultado.data.DISPLAY[criptoMoneda][moneda])
        setConsultarApi(false)
      }
    }
    cotizarCriptomoneda()
  }, [consultarApi])


  return (
    <>
      <Header />

      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contendor}>
        <Formulario
          moneda={moneda}
          criptoMoneda={criptoMoneda}
          setMoneda={setMoneda}
          setCriptoMoneda={setCriptoMoneda}
          setConsultarApi={setConsultarApi}
        />
        <Cotizacion 
          resultado={resultado}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contendor: {
    padding: 20
  }
});

export default App;
