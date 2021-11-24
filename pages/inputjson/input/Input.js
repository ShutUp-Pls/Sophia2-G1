import { useState } from 'react';
import Diagrama from '../diagrama/Diagrama';
import SearchField from 'react-search-field'


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
    //console.log(mentions[0].date)
    for (let i = 0; i < mentions.length; i++) {
        console.log(mentions[i].value)
    }


    return (
        <div>
            <SearchField
                classNames='Searcher'
                placeholder='Buscar...'
                onEnter={buscarNombre}
                onSearchClick={buscarNombre}
            />
            <p>{textoFeedBack}</p>
            <Diagrama
                datos={mentions}
                datoEnX="date"
            //nombreLinea={Object.keys(datos[0])[1]}
            />
        </div>
    );
}

export default Input