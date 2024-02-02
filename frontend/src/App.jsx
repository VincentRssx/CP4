import Jeux from "./components/Jeux/Jeux";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import NavBar from "./pages/NavBar.jsx/NavBar";
import "./app.scss";
import { JeuxProvider } from "./context/contextJeux";

function App() {
  return (
    <JeuxProvider>
      <NavBar />
      <main>
        <Jeux />
        <SecondaryNav />
      </main>
    </JeuxProvider>
  );
}

export default App;
