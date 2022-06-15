import propTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(grad => {
        return (
          <button
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
