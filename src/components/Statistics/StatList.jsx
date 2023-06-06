import { Item, getRandomHexColor } from "./Statistics.styled"

export const StatList = ({ data }) => {
   
    return data.map(({ id, label, percentage }) => {
        return <Item style={{ backgroundColor: getRandomHexColor()}}  key={id} >
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
    </Item>
    })
}