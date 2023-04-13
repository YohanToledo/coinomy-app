import { useState } from 'react';
import './MonthPicker.scss';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import Dropdown from '../Dropdown';


const MonthPicker = () => {
    const [currentYear, currentMonth] = new Date().toJSON().slice(0, 7).split("-")


    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    const monthSelectedDefault = MONTHS.find(m => m.value === currentMonth) || {label: "Jan", value: "01"}
    const [monthSelected, setMonthSelected] = useState(monthSelectedDefault)
    console.log(monthSelected)

    const yearSelectedDefault = getYears().find(y => y.value === currentYear) || {label: "2023", value: "01"}
    const [yearSelected, setYearSelected] = useState(yearSelectedDefault)

    return (
        <>
            <Dropdown items={MONTHS} selected={monthSelected} setSelected={setMonthSelected}/> 

            <Dropdown items={getYears()} selected={yearSelected} setSelected={setYearSelected}/>         
        </>
    )
}

export default MonthPicker;


const MONTHS = [
    { label: "Jan", value: "1" },
    { label: "Fev", value: "2" },
    { label: "Mar", value: "3" },
    { label: "Abr", value: "4" },
    { label: "Mai", value: "5" },
    { label: "Jun", value: "6" },
    { label: "Jul", value: "7" },
    { label: "Ago", value: "8" },
    { label: "Set", value: "9" },
    { label: "Out", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dez", value: "12" },
]

type Item = {
    label: string,
    value: string,
}

const getYears = () => {
    const currentYear = new Date().getFullYear()
    const years: Item[] = []

    for (let y = 2020; y <= currentYear; y++) {
        years.push({label: `${y}`, value: `${y}`})
    }

    return years
}



 {/*
            <div className="month-picker">
                <div className="select_mate">
                    <select>
                        {MONTHS.map((m) => <option className="month-option" selected={m.value === month ? true : false} value={m.value}>{m.name}</option>)}
                    </select>
                </div>
                <span>de</span>

                <div className="selector">
                    <select>
                        {getYears().map((y) => <option selected={y === year ? true : false} value={y}>{y}</option>)}
                    </select>
                </div>
    </div>
    
     <div className="month-picker">

                <div className="dropdown">
                    <button className="dropdown-toggle" onSubmit={(e: any) => e.preventDefault()} onClick={(e: any) => setShowDropdown(!showDropdown)}>
                        <div>
                            Mes
                        </div>
                        <div>
                            {showDropdown ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                        </div>

                    </button>


                    {showDropdown ? <ul className="dropdown-menu">
                        {MONTHS.map((m) => <li className="dropdown-item" value={m.value}>{m.name}</li>)}
                    </ul> : ""}

                </div>
            </div>
    
    */}