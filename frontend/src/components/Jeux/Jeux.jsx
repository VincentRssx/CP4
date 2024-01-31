import { useEffect } from "react";
import "./Jeux.scss";
import { useallJeuxContext } from "../../context/contextJeux";

function Jeux() {
  const { allJeux, setAllJeux } = useallJeuxContext();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jeuxFF`)
      .then((response) => response.json())
      .then((data) => setAllJeux(data))
      .catch((error) => console.error(error));
  }, [allJeux]);

  return (
    <div className="Jeux">
      {allJeux ? (
        allJeux.map((Jeu) => (
          <div className="jeux_desc" key={Jeu.id}>
            <section>
              <h2>{Jeu.titre}</h2>
              <img
                src={Jeu.jacquette_image_url}
                alt="jacquette"
                className="image_jeuxFF"
              />
            </section>
            <section className="text_jeux">
              <p>{Jeu.description}</p>
              <a href={Jeu.achat_lien} className="lien_achat">
                Lien d'achat du Jeu : Clique ici
              </a>
              <p>date de sortie : {Jeu.annee_sortie}</p>
              <p>Plateforme : {Jeu.plateforme}</p>
            </section>
          </div>
        ))
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default Jeux;
