import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;

    return (
        <View style={styles.resultado}>
            <Text style={styles.texto}>
                <Text style={styles.span}>{' '}{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas alto del dia
                <Text style={styles.span}>{' '}{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas bajo del dia
                <Text style={styles.span}>{' '}{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Ultimas 24 horas
                <Text style={styles.span}>{' '}{resultado.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.texto}>Ultima actualizacio
                <Text style={styles.span}>{' '}{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado : {

    },
    texto : {

    },
    precio : {

    },
    span : {

    }
})

export default Cotizacion;