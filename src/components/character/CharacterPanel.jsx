import CharacterGrid from "./CharacterGrid";
import ElementFilter from "./ElementFilter";

function CharacterPanel() {
    return (
        <section className="character-panel">
            <h2>공명자 도감</h2>
            <ElementFilter />
            <CharacterGrid />
        </section>
    )
}

export default CharacterPanel;