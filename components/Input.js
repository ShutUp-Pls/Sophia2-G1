import { useState } from 'react';
import Data from './datosTest.json';
import SearchField from 'react-search-field';


function Input() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [men, setMen] = useState('');
    const [pop, setPop] = useState('');

    const onChange = (texto, evento) => {
        const data = Data.find((d) => d.nom == texto);

        if (data) {
            setId(data.id);
            setName(data.nom);
            setMen(data.men);
            setPop(data.pop);
        }
    }
    return (
        <div>
            <SearchField
                classNames='Searcher'
                placeholder='Buscar...'
                onEnter={onChange}
                onSearchClick={onChange}
            />
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Menciones: {men}</p>
            <p>Popularidad: {pop}</p>
        </div>
    );
}
export default Input