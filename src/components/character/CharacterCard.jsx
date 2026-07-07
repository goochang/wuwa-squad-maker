function CharacterCard({ key,character, image }) {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <span>{character.name}</span>
            <span>{character.attr}</span>
        </div>
    )
}

export default CharacterCard;