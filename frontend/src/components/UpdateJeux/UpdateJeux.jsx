import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateJeux.scss";
import { useallJeuxContext } from "../../context/contextJeux";

function UpdateJeux() {
  const { setAllJeux } = useallJeuxContext();
  const [jeu, setJeu] = useState({
    titre: "",
    description: "",
    jacquette_image_url: "",
    achat_lien: "",
    annee_sortie: "",
    plateforme: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/jeuxFF/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setJeu(data[0]);
        } else {
          console.error("Failed to fetch game data for update");
        }
      } catch (err) {
        console.error("Error fetching game data", err);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateJeux = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jeuxFF/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...jeu, id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Mise à jour réussie :", data);
        // Mise à jour de l'état global
        setAllJeux(data);
        // Navigation vers la page "/"
        navigate("/");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  return (
    <div>
      {jeu && (
        <section className="color_jeux">
          <form className="mon-formulaire">
            <label htmlFor="titre">
              Titre:
              <input
                type="text"
                value={jeu.titre}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    titre: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={jeu.description}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    description: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Lien Image:
              <input
                type="text"
                value={jeu.jacquette_image_url}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    jacquette_image_url: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Lien Achat:
              <input
                type="text"
                value={jeu.achat_lien}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    achat_lien: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Année de Sortie:
              <input
                type="text"
                value={jeu.annee_sortie}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    annee_sortie: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Plateforme:
              <input
                type="text"
                value={jeu.plateforme}
                onChange={(e) =>
                  setJeu((prevJeu) => ({
                    ...prevJeu,
                    plateforme: e.target.value,
                  }))
                }
              />
            </label>
            <button
              className="update_but"
              onClick={handleUpdateJeux}
              type="button"
            >
              Soumettre
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

export default UpdateJeux;
