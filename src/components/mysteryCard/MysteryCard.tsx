import CustomButton from "../customButton/CustomButton";
import "./MysteryCard.css"

interface MysteryCardProps {
    mystery?: {
        title: string;
        complete: boolean;
        difficulty: number;
        description: string;
    } | null;
}

const MysteryCard: React.FC<MysteryCardProps> = ({ mystery }) => {

    if (!mystery) return null;

    return (
        <div id="mystery" className="mystery" aria-labelledby="mystery-title">
            <div className="mystery-metrics">
                <h1 className="mystery-title">{mystery.title}</h1>
                <h2 className="mystery-difficulty">{"⭐".repeat(mystery.difficulty)}</h2>
            </div>
            <p className="mystery-description">{mystery.description}</p>
            <CustomButton className={"mystery-card-button"} text={mystery.complete ? "Complete" : "Begin Case"} disabled={mystery.complete} />
        </div>
    );
};

export default MysteryCard
