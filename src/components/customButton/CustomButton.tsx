import "./CustomButton.css";
interface CustomButtonProps {
    className: string;
    text: string;
    disabled?: boolean;
}

const CustomButton = ({ className, text, disabled = false }: CustomButtonProps) => {
    return (
        <button className={`${className}`} disabled={disabled}>
            {text}
        </button>
    )
}

export default CustomButton
