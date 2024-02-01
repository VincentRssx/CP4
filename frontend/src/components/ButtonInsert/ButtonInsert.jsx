import { Link } from "react-router-dom";
import "./ButtonInsert.scss";

function ButtonInsert() {
  return (
    <Link to="/jeux/create" className="button_insert">
      Insérer de nouvelles informations
    </Link>
  );
}

export default ButtonInsert;
