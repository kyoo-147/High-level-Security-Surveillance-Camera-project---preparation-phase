import PropTypes from "prop-types";

const TitleCustom = ({ titlecustom }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <h2 className="text-lg antialiased font-bold uppercase text-green-700 dark:text-gray-300">
        {titlecustom}
      </h2>
    </div>
  );
};

TitleCustom.propTypes = {
    titlecustom: PropTypes.string.isRequired,
};

export default TitleCustom;
