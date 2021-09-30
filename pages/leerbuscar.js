import { useState } from 'react';
import Data from '../public/data/datosTest.json';


export default function Test() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [men, setMen] = useState('');
    const [pop, setPop] = useState('');

    const onChange = (e) => {
        const data = Data.find((d) => d.nom == e.target.value);

        if (data) {
            setId(data.id);
            setName(data.nom);
            setMen(data.men);
            setPop(data.pop);
        }
    };

    return (
        <div>
            <input onChange={onChange} />
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Menciones: {men}</p>
            <p>Popularidad: {pop}</p>
        </div>
    );
}