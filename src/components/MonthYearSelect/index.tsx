import { useState, useEffect } from 'react';
import './MonthYearSelect.scss';
import Dropdown from '../Dropdown';

type Props = {
    setMonth: (param: string) => void;
}
const MonthPicker = ({ setMonth }: Props) => {
    const [currentYear, currentMonth] = new Date().toJSON().slice(0, 7).split("-")

    const monthSelectedDefault = MONTHS.find(m => Number(m.value) === Number(currentMonth)) || { label: "Jan", value: "1" }
    const [monthSelected, setMonthSelected] = useState(monthSelectedDefault)

    const yearSelectedDefault = getYears().find(y => y.value === currentYear) || { label: "2023", value: "1" }
    const [yearSelected, setYearSelected] = useState(yearSelectedDefault)


    useEffect(() => {
        const month = Number(monthSelected.value) < 10 ? `0${Number(monthSelected.value)}` : monthSelected.value
        setMonth(`${yearSelected.value}-${month}`)
    }, [monthSelected, yearSelected])

    return (
        <>
            <div className="drops">
                <div className="drop dropdown-month">
                    <Dropdown items={MONTHS} selected={monthSelected} setSelected={setMonthSelected} />
                </div>
                <div className="drop dropdown-year">
                    <Dropdown items={getYears()} selected={yearSelected} setSelected={setYearSelected} />
                </div>
            </div>
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
        years.push({ label: `${y}`, value: `${y}` })
    }

    return years
}