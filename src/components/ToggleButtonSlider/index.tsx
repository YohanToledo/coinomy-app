import "./ToggleButtonSlider.scss"

const ToggleButton = () => {
    return (
        <>
            <label className="switch-addTransactions">
                <input type="checkbox" className="input-slider-addTransactions"></input>
                <span className="slider-addTransactions round"></span>
            </label>
        </>
    );
}

export default ToggleButton;

