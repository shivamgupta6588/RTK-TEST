import { useGetPokemonByNameQuery } from '../Slice/pokemonApi';

const Testing = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

    // Check if data is defined before accessing its properties
    const pokemonName = data ? data.name : '';

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error: {error.message}</h1>
            ) : (
                <div>
                    <p>Pokemon Name: {pokemonName}</p>
                    <img src={data.url} alt= {pokemonName}/>
                </div>
            )}
        </div>
    );
};

export default Testing;
