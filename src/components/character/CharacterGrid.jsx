import characters from "../../data/characters.json";
import CharacterCard from "./CharacterCard";
import { characterImages } from "../../assets/images/characterImages";
import useWuwaStore from "../../store/Store";

function CharacterGrid() {
    const { selectedAttr, setSelectedAttr } = useWuwaStore();

    return (
        <div className="character-grid">
            {
            characters.filter((character) => selectedAttr === "전체" || character.attr === selectedAttr).map((character) => (
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