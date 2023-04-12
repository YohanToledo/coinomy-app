import { useState } from 'react';
import './MonthPicker.scss';

const MonthPicker = () => {
    const currentMonth = new Date().toJSON().slice(0, 7)
    const [month, setMonth] = useState(currentMonth);
    console.log(month)

    return (
        <div className="month-name">
            <input className="month-picker"
                type="month"
                defaultValue={month}
                onChange={(e: any) => setMonth(e.target.value)}
                min="2000-01"
                max={currentMonth}
                pattern="[0-9]{4}-[0-9]{2}"
            />
        </div>



    )
}

export default MonthPicker;
