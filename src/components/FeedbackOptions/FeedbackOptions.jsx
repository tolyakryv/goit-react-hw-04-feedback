import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(grad => {
        return (
          <button
            className={s.button}
            type="button"
            key={grad}
            onClick={() => onLeaveFeedback(grad)}
          >
            {grad}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
