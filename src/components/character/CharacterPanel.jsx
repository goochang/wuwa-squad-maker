import CharacterGrid from "./CharacterGrid";
import ElementFilter from "./ElementFilter";

function CharacterPanel() {
    return (
        <section>
            공명자 도감
            <ElementFilter />
            <CharacterGrid />
        </section>
    )
}

export default CharacterPanel;