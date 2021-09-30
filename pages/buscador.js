import SearchField from 'react-search-field';

const pagina1 = () => {
    const detectaCambio = (texto, evento) => {
        console.log('Valor del texto =',texto);
        console.log('Valor del evento =',evento);
    }

    return (
        <SearchField
            classNames='Searcher'
            placeholder='Buscar...'
            onChange={detectaCambio}
        />
    );
};

export default pagina1;