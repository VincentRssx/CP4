import { useallJeuxContext } from "../../context/contextJeux";
import "./SecondaryNav.scss";

function SecondaryNav() {
  const { setAllJeux } = useallJeuxContext();

  const handleClickFF = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jeuxFF`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllJeux(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête:", error);
        setAllJeux([]);
      });
  };

  const handleClickTES = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jeuxTES`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllJeux(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête", error);
        setAllJeux([]);
      });
  };

  return (
    <ul className="list">
      <li
        onClick={handleClickFF}
        onKeyDown={handleClickFF}
        role="presentation"
        className="click_list"
      >
        Jeux final fantasy
      </li>
      <li
        onClick={handleClickTES}
        onKeyDown={handleClickTES}
        role="presentation"
        className="click_list"
      >
        Jeux The Elder Scrolls
      </li>
    </ul>
  );
}

export default SecondaryNav;
