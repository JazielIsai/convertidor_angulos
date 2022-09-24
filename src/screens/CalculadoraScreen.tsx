/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { numeroAnterior, numero, clean, positionNegative, btnDelete, armarNumero, btnRadian, btnDegrees } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
                    )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'C'} color={'#9B9B9B'} action={clean} ancho={true} />
                <BotonCalc text={'del'} color={'#9B9B9B'} action={btnDelete} ancho={true} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'9'} action={armarNumero} />
                <BotonCalc text={'8'} action={armarNumero} />
                <BotonCalc text={'7'} action={armarNumero} />
                <BotonCalc text={'Gra'} color={'#FF9427'} action={btnDegrees} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'6'} action={armarNumero} />
                <BotonCalc text={'5'} action={armarNumero} />
                <BotonCalc text={'4'} action={armarNumero} />
                <BotonCalc text={'Rad'} color={'#FF9427'} action={btnRadian} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'3'} action={armarNumero} />
                <BotonCalc text={'2'} action={armarNumero} />
                <BotonCalc text={'1'} action={armarNumero} />
                <BotonCalc text={'+/-'} color={'#FF9427'} action={positionNegative} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'0'} action={armarNumero} ancho={true} />
                <BotonCalc text={'.'} action={armarNumero} ancho={true} />
                {/* <BotonCalc text={'='} color={'#FF9427'} action={calcular} /> */}
            </View>

        </View>
    );
};
