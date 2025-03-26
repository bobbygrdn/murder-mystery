import MysteryCard from "../../components/mysteryCard/MysteryCard";
import "./MysteryCards.css";

const data = [{
    id: 1,
    title: "A Deadly Tour",
    complete: false,
    difficulty: 1,
    description: "Solve the murder of the original tour guide on Lady Violet's estate.",
}, {
    id: 2,
    title: "The Mansion Murder",
    complete: true,
    difficulty: 2,
    description: "A wealthy collector is found dead in his private gallery. Can you uncover the truth?",
}, {
    id: 3,
    title: "The Theater Tragedy",
    complete: false,
    difficulty: 2,
    description: "The star actress is found dead before opening night. The show must go on, but first you must catch a killer.",
}, {
    id: 4,
    title: "The Garden Mystery",
    complete: false,
    difficulty: 3,
    description: "A renowned botanist is found dead in his prized greenhouse. Something deadly has bloomed in this garden.",
}];

const MysteryCards = () => {
    return (
        <section id="mystery-cards">
            {
                data.map((mystery, id) => {
                    return <MysteryCard key={id} mystery={mystery} />
                })
            }
        </section>
    )
}

export default MysteryCards
