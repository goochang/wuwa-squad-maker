import { characterImages } from "../../assets/images/characterImages";

function PartySlot({ key, partyIndex, party }) {
    return (
        <div className="party-slot">
            <div className="party-slot-header">
                <h2>{ partyIndex+1}</h2>
            </div>
            <div className={`party-characters ${party.length > 0 ? "filled" : "empty"}`}>
            { party.length > 0 ? party.map((character, index) => (
                <div key={index} className="party-character">
                    <img src={characterImages[character]} alt={character.name} />
                </div>
            )) : <>
                    <div key={1} className="party-character">
                        <span>+</span>
                        <span>1</span>
                    </div>
                    <div key={2} className="party-character">
                        <span>+</span>
                        <span>2</span>
                    </div>
                    <div key={3} className="party-character">
                        <span>+</span>
                        <span>3</span>
                    </div>
                </> }
            </div>
            <div className="party-slot-footer">
                <button>{partyIndex+1}번 파티</button>
                <button>제거</button>
            </div>
        </div>
    )
}

export default PartySlot;