import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import ButtonUpdate from "../../components/ButtonUpdate/ButtonUpdate";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <h1>BLIBLIOTHEQUE DE JEUX</h1>
      <section className="Button">
        <ButtonInsert />
        <ButtonUpdate />
      </section>
    </nav>
  );
}

export default NavBar;
