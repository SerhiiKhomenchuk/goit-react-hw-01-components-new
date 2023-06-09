import { Item, getRandomHexColor } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatList = ({ data }) => {
  return data.map(({ id, label, percentage }) => {
    return (
      <Item style={{ backgroundColor: getRandomHexColor() }} key={id}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
      </Item>
    );
  });
};

StatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
