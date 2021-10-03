import SearchField from 'react-search-field';


const Buscador = () => {
    const detectaCambio = (texto, evento) => {
        console.log('Valor del texto =', texto);
        console.log('Valor del evento =', evento);
    }

    return (
        <SearchField
            classNames='Searcher'
            placeholder='Buscar...'
            onEnter={detectaCambio}
        />
    );
};

export default Buscador;