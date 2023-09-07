import PropTypes from 'prop-types';
import { Title } from './Statistics.styled';
import { StatisticsSection } from './Statistics.styled';
import { StatisticsList } from './Statistics.styled';
import { StatisticsItem } from './Statistics.styled';
import { Label } from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
