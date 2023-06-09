import { StatList } from './StatList';
import { StatListStyle, StatisticsStyle, Title } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyle>
      <Title>{title}</Title>
      <StatListStyle>
        <StatList data={stats} />
      </StatListStyle>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
