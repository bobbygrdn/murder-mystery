import './Loading.css';
import icon from "../../assets/murder-mystery-icon-light.png";

const Loading = () => {
    return (
        <div id="loader">
            <img src={icon} alt="loading" />
            <h1>Murder Mystery</h1>
            <p style={{ color: "A8A29E" }}>Loading mysteries...</p>
        </div>
    )
}
export default Loading;