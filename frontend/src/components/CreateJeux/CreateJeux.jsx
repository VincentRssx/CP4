import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateJeux.scss";

function CreateJeux() {
  const selectJeuxRef = useRef();
  const [selectedLicence, setSelectedLicence] = useState("jeuxFF");
  const titreRef = useRef();
  const descriptionRef = useRef();
  const lienImageRef = useRef();
  const lienAchatRef = useRef();
  const anneeSortieRef = useRef();
  const plateformeRef = useRef();

  const navigate = useNavigate();

  const handleChange = () => {
    setSelectedLicence(selectJeuxRef.current.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/${selectedLicence}/create`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            titre: titreRef.current.value,
            description: descriptionRef.current.value,
            jacquette_image_url: lienImageRef.current.value,
            achat_lien: lienAchatRef.current.value,
            annee_sortie: anneeSortieRef.current.value,
            plateforme: plateformeRef.current.value,
          }),
        }
      );

      if (response.status === 201) {
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error("Error in decision creation", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mon-formulaire">
      <label htmlFor="licence">
        Licence :
        <select
          name="licence"
          id="licence"
          ref={selectJeuxRef}
          onChange={handleChange}
        >
          <option value="jeuxFF">Final Fantasy</option>
          <option value="jeuxTES">The Elder Scrolls</option>
        </select>
      </label>

      <label>
        Titre:
        <input type="text" ref={titreRef} />
      </label>
      <label>
        Description:
        <input type="text" ref={descriptionRef} />
      </label>
      <label>
        Lien Image:
        <input type="text" ref={lienImageRef} />
      </label>
      <label>
        Lien Achat:
        <input type="text" ref={lienAchatRef} />
      </label>
      <label>
        Année de Sortie:
        <input type="text" ref={anneeSortieRef} />
      </label>
      <label>
        Plateforme:
        <input type="text" ref={plateformeRef} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default CreateJeux;
