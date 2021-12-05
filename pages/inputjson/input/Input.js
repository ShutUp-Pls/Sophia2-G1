import { useState } from 'react';
import Diagrama from '../diagrama/Diagrama';
import SearchField from 'react-search-field'
import styled from 'styled-components';

const Container = styled.div`
    &.graphic{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    &.graphic svg{
        background-color: rgba(105,105,105,1);
    }
    &.header{
        display: flex;
        justify-content: center;
        padding: 10px;
        
    }
    &.header input{
        width: 300px;
        background-color: rgba(255,255,255,0.8);
    }


    &.feedback{
        display: flex;
        justify-content: center;
        color: #ddd;
        font-size: 20px;
    }
    &.container{
        padding: 3%;
        border: 1px solid #555;
        margin: 3%;
        box-shadow: 5px 5px 8px rgba(0,0,0,0.35);
        background-color: rgba(50,50,50,0.8);
        
    }
`

function Input() {
    const input = require('../../../public/data/datos.json');

    const datosJson = input[0].items
    const [mentions, setMentions] = useState([{}]);
    const [popularity, setPopularity] = useState([{}]);
    const [textoFeedBack, setTextoFeedBack] = useState('Esperando busqueda...');

    const convierteDatos = (diccionario, tipo) => {

        if (tipo == 0) {
            const datas = diccionario.mentions.filter((el, i) => {
                return el
            })
            return datas
        }
        else if (tipo == 1) {
            const datas = diccionario.popularity.filter((el, i) => {
                return el
            })
            return datas
        }
        return ([{}]);
    }


    const buscarNombre = (texto, evento) => {
        const data = datosJson.find(llave => llave.name == texto)
        if (data) {
            const menciones = convierteDatos(data, 0)
            const popularidad = convierteDatos(data, 1)
            setMentions(menciones)
            setPopularity(popularidad)
            setTextoFeedBack('Mostrado popularidad y menciones de \'' + texto + '\' en pantalla');


        }
        else {
            setTextoFeedBack('\'' + texto + '\' no se encuentra en nuestra base de datos');

        }
    }
    for (let i = 0; i < mentions.length; i++) {
        console.log(mentions[i].value)
    }


    return (
        <div>
            <Container className="container">
                <Container className="header">
                    <SearchField
                        classNames='Searcher'
                        placeholder='Buscar...'
                        onEnter={buscarNombre}
                        onSearchClick={buscarNombre}
                    />
                </Container>
                <Container className="feedback">
                    <p>{textoFeedBack}</p>
                </Container>
                <Container className="graphic">
                    <Diagrama
                        datos={mentions}
                        datoEnX="date"
                    />
                </Container>
            </Container>
        </div>
    );
}

export default Input