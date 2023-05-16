import "./ToggleButtonSlider.scss"

type Props = {
    setSelected: (param:boolean) => void;
}

const ToggleButton = ({
    setSelected
}:Props) => {
    return (
        <>
            <label className="switch-addTransactions">
                <input type="checkbox" className="input-slider-addTransactions" onChange={(e:any) => setSelected(e.target.checked) }></input>
                <span className="slider-addTransactions round"></span>
            </label>
        </>
    );
}

export default ToggleButton;

