import React from "react";
import { Link } from "react-router-dom";
import "./ButtonUpdate.scss";
import PropTypes from "prop-types";

function ButtonUpdate({ Jeu, setCurrentId }) {
  const handleUpdateClick = () => {
    setCurrentId(Jeu);
  };

  return (
    <Link
      to={`/jeux/update/${Jeu}`}
      className="button_update"
      onClick={handleUpdateClick}
    >
      Mettre à jour les informations
    </Link>
  );
}

ButtonUpdate.propTypes = {
  Jeu: PropTypes.number.isRequired,
  setCurrentId: PropTypes.func.isRequired,
};
export default ButtonUpdate;
