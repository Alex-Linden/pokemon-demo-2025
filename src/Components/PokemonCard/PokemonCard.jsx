import React from 'react';
//  "id": 4,
//     "name": "Pikachu",
//     "type": "Electric",
//     "description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
//     "imageUrl": "https://img.pokemondb.net/artwork/large/pikachu.jpg"

const PokemonCard = () => {
    return (
        <>
            <fieldset>
                <legend>PokemonCard.jsx</legend>
                <div className="card">
                    <img src="https://img.pokemondb.net/artwork/large/pikachu.jpg" alt="pikachu" />
                    <h2>Pikachu</h2>
                    <h4>Type: Electric</h4>
                    <p>Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</p>
                </div>
            </fieldset>
        </>
    );
};

export default PokemonCard;