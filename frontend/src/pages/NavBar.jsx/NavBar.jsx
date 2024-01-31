import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import ButtonUpdate from "../../components/ButtonUpdate/ButtonUpdate";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <ButtonInsert />
      <ButtonUpdate />
    </nav>
  );
}

export default NavBar;
