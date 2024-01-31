import { useEffect, useState } from "react";

function ExperiencesPro() {
  const [ExpPro, setExpPro] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/experiencespro`)
      .then((response) => response.json())
      .then((data) => setExpPro(data))
      .catch((error) => console.error("Error fetching user data", error));
  }, []);
  return (
    <>
      <h1>EXPERIENCES PROFESSIONNELLES</h1>
      <ul>
        <li>
          <section className="entreprise_date">
            <h2>{ExpPro[0].entreprise}</h2>
            <h2>
              {ExpPro[0].date_debut} à {ExpPro[0].date_fin}
            </h2>
          </section>
        </li>
      </ul>
    </>
  );
}

export default ExperiencesPro;
