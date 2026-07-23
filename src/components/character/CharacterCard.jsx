function CharacterCard({ key,character, image }) {
    const attrClass = {
        "융융": "fusion",
        "응결": "glacio",
        "기류": "aero",
        "전도": "electro",
        "회절": "spectro",
        "인멸": "havoc",
    };

    return (
        <div className="character-card">
            <div className="character-image">
                <img src={character.image} alt={character.name} />
            </div>
            <span>{character.name}</span>
            <span className={`attr attr-${attrClass[character.attr]}`}>{character.attr}</span>
        </div>
    )
}

export default CharacterCard;