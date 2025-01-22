import PropTypes from "prop-types";
import "./LivesLanguage.css";

function LivesLanguage(props) {
  const className = `lives-display__language ${
    props.isEliminated ? "eliminated" : ""
  }`;

  return (
    <div
      className={className}
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      {props.language}
    </div>
  );
}

LivesLanguage.propTypes = {};

export default LivesLanguage;
