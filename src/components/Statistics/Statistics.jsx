import { StatList } from "./StatList"
import { StatListStyle, StatisticsStyle, Title } from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
//    console.log(stats);
         return <StatisticsStyle>
            <Title>{title}</Title>

            <StatListStyle>
                <StatList data={stats} />
            </StatListStyle>
        </StatisticsStyle>
   
}