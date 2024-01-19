import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <h2 className="mb-5 text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
        {title}
      </h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
