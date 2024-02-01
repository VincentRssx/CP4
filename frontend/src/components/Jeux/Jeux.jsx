import React, { useEffect, useState } from "react";
import "./Jeux.scss";
import { useallJeuxContext } from "../../context/contextJeux";
import ButtonUpdate from "../ButtonUpdate/ButtonUpdate";

function Jeux() {
  const { allJeux, setAllJeux, activeJeux, setCurrentId } = useallJeuxContext();
  const [refresh, setRefresh] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted && activeJeux) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${activeJeux}`)
        .then((response) => response.json())
        .then((data) => setAllJeux(data))
        .catch((error) => console.error(error));
    }
  }, [refresh, activeJeux, mounted, allJeux]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGameDeleteClick = (id) => {
    try {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/${activeJeux}/deletes/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        if (response.ok) {
          setAllJeux((prevJeux) => prevJeux.filter((jeu) => jeu.id !== id));
          setRefresh(!refresh);
        } else {
          console.error("Échec de la suppression du jeu");
        }
      });
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression du jeu",
        error
      );
    }
  };

  return (
    <div className="Jeux">
      {allJeux ? (
        allJeux.map((Jeu) => (
          <div className="jeux_desc" key={Jeu.id}>
            <section>
              <section className="title_delete">
                <h2>{Jeu.titre}</h2>
                <span
                  onClick={() => handleGameDeleteClick(Jeu.id)}
                  onKeyDown={() => handleGameDeleteClick(Jeu.id)}
                  role="presentation"
                >
                  X
                </span>
              </section>

              <img
                src={Jeu.jacquette_image_url}
                alt="jacquette"
                className="image_jeuxFF"
              />
            </section>
            <section className="text_jeux">
              <ButtonUpdate Jeu={Jeu.id} setCurrentId={setCurrentId} />
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
