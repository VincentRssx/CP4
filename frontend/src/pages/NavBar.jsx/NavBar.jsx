import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <h1>BIBLIOTHEQUE DE JEUX</h1>
      <section className="Button">
        <ButtonInsert />
      </section>
    </nav>
  );
}

export default NavBar;
