import React from 'react';
export const Statistics = ({good, neutral, bad, total, positivePercentage})=>{
        return <ul>
        <li><p>Xорошо:{good}</p></li>
        <li><p>Cредне:{neutral}</p></li>
        <li><p>Плохо:{bad}</p></li>
        <li><p>Всего:{total}</p></li>
        <li><p>Хороших отзывов:{positivePercentage ==="NaN" ? `0`: positivePercentage}%</p></li>
        </ul>
}
