CREATE TABLE JeuxFinalFantasy (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    jacquette_image_url VARCHAR(255),
    achat_lien VARCHAR(255),
    annee_sortie INT,
    plateforme VARCHAR(50)
);

CREATE TABLE JeuxElderScrolls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    jacquette_image_url VARCHAR(255),
    achat_lien VARCHAR(255),
    annee_sortie INT,
    plateforme VARCHAR(50)
);
