import { useState } from 'react';


export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');


    const clean = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') {return;}

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //Punto decimal
            if ( numeroTexto === '.' ) {
                setNumero(numero + numeroTexto);
                //Evaluar si es otro cero, y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero(numero + numeroTexto);

                //Evaluar si es diferente de cero y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero(numeroTexto);

                //Evitar 000.0
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

    };

    const positionNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-'.concat(numero));
        }
    };

    const btnDelete = () => {
        if (numero.length > 1) {
            setNumero(numero.substring(0, numero.length - 1));
        } else {
            setNumero('0');
        }
    };

    const changeNumberToPrevious = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    };

    const btnRadian = () => {
        changeNumberToPrevious();

        const num1 = Number(numero);

        const radian = num1 * (Math.PI / 180);
        setNumero(radian.toString());
    };

    const btnDegrees = () => {
        changeNumberToPrevious();

        const num1 = Number(numero);

        const defrees = num1 * (180 / Math.PI);
        setNumero(defrees.toString());

    };


    return {
        numero,
        numeroAnterior,
        clean,
        armarNumero,
        positionNegative,
        btnDelete,
        btnRadian,
        btnDegrees,
    };

};
