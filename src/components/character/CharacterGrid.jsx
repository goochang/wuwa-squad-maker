import characters from "../../data/characters.json";
import CharacterCard from "./CharacterCard";
import { characterImages } from "../../assets/images/characterImages";

function CharacterGrid() {
    return (
        <div class="character-grid">
            {
            characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    character={{
                    ...character,
                    image: characterImages[character.key],
                    }}
                />
            ))
            }
        </div>
    )
}

export default CharacterGrid;