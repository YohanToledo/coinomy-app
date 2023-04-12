import { useState } from 'react';
import './MonthPicker.scss';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'


const MonthPicker = () => {
    const [currentYear, currentMonth] = new Date().toJSON().slice(0, 7).split("-")


    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);


    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <>
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

            <div className="dropdown">
                <button className="dropdown-toggle" onClick={(e: any) => setShowDropdown(!showDropdown)}>
                    <div>
                    Mes
                    </div>
                    <div>
                    {showDropdown ?  <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                    </div>
                    
                </button>


                {showDropdown ? <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="dropdown-item">1</li>
                    <li className="dropdown-item">2</li>
                    <li className="dropdown-item">3</li>
                    <li className="dropdown-item">4</li>
                    <li className="dropdown-item">5</li>
                    <li className="dropdown-item">6</li>
                    <li className="dropdown-item">7</li>
                </ul> : ""}

            </div>
        </>
    )
}

export default MonthPicker;


const MONTHS = [
    { name: "Janeiro", value: "01" },
    { name: "Fevereiro", value: "02" },
    { name: "Março", value: "03" },
    { name: "Abril", value: "04" },
    { name: "Maio", value: "05" },
    { name: "Junho", value: "06" },
    { name: "Julho", value: "07" },
    { name: "Agosto", value: "08" },
    { name: "Setembro", value: "09" },
    { name: "Outubro", value: "10" },
    { name: "Novembro", value: "11" },
    { name: "Dezembro", value: "12" },
]

const getYears = () => {
    const currentYear = new Date().getFullYear()
    const years: string[] = []

    for (let y = 2020; y <= currentYear; y++) {
        years.push(`${y}`)
    }

    return years
}