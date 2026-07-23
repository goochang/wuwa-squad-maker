import useWuwaStore from "../../store/Store";
import PartySlot from "./PartySlot";
import PartyTitle from "./PartyTitle";

function PartyPanel() {
    const { parties, setParties } = useWuwaStore();

    return (
        <section>
            <PartyTitle />
            {
            parties.map((party, index) => (
                <PartySlot key={index} partyIndex={index} party={party} />
            ))
            }
        </section>
    )
}

export default PartyPanel;