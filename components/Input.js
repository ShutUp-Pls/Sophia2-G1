import { useState } from 'react';

import Diagrama from './Diagrama';
import SearchField from 'react-search-field'
import ApiCall from './ApiCall';

function Input() {
    const datosJson = require('../public/data/datosTest.json');
    const [datos, setDatos] = useState([{}]);
    const [textoFeedBack, setTextoFeedBack] = useState('Esperando busqueda...');

    const convierteDatos = (diccionario, tipo) => { //tipo=0 -> Muestra Menciones, tipo=1 -> Mientra Popularidad, por defecto tipo=1
        var datosFormateados = [];
        if (tipo == 0) {
            const listaLlaves = Object.keys(diccionario.mentions);
            const listaValores = Object.values(diccionario.mentions);
            for (var i = 0; i < listaLlaves.length; i++) {
                datosFormateados.push({ fecha: listaLlaves[i], menciones: listaValores[i] });
            }
        }
        else if (tipo == 1) {
            const listaLlaves = Object.keys(diccionario.popularity);
            const listaValores = Object.values(diccionario.popularity);
            for (var i = 0; i < listaLlaves.length; i++) {
                datosFormateados.push({ fecha: listaLlaves[i], popularidad: listaValores[i] });
            }
        }
        else {
            datosFormateados = convierteDatos(diccionario, 1);
        }
        return datosFormateados;
    }

    const buscarNombre = (texto, evento) => {
        const data = datosJson.find((llave) => llave.source_name == texto);
        if (data) {
            const datosFormateados = convierteDatos(data)
            setDatos(datosFormateados);
            setTextoFeedBack('Mostrado \'' + Object.keys(datosFormateados[0])[1] + '\' de \'' + texto + '\' en pantalla');
        }
        else {
            setTextoFeedBack('\'' + texto + '\' no se encuentra en nuestra base de datos');
        }
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
                datos={datos}
                datoEnX={Object.keys(datos[0])[0]}
                nombreLinea={Object.keys(datos[0])[1]}
            />
            <ApiCall />
        </div>
    );
}

export default Input