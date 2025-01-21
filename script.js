document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const pages = document.querySelectorAll(".page");
    const categoriesContainer = document.querySelector(".categories");
    const categoriesData = categories; // Données des catégories
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategoryName = urlParams.get("category") || "home";

    // **1. Navigation entre les pages**
    const updateActivePage = (categoryName) => {
        pages.forEach(page => {
            page.classList.remove("active", "inactive");
            page.classList.add(page.classList.contains(categoryName) ? "active" : "inactive");
        });

        navLinks.forEach(link => {
            const linkCategory = link.getAttribute("data-category");
            link.classList.toggle("active", linkCategory === categoryName);
        });
    };

    // **2. Insérer dynamiquement les catégories dans la section Home**
    if (categoriesContainer) {
        categoriesData.forEach((category, index) => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category");
            categoryDiv.setAttribute("onclick", `navigateToCategory(${index})`);

            // Utiliser la première image du premier projet
            if (category.projects[0]?.images[0]) {
                const img = document.createElement("img");
                img.src = category.projects[0].images[0];
                img.alt = category.name;
                categoryDiv.appendChild(img);
            }

            const title = document.createElement("h2");
            title.textContent = category.name;
            categoryDiv.appendChild(title);

            categoriesContainer.appendChild(categoryDiv);
        });
    }

    // **3. Afficher les images de la catégorie active**
    const displayCategoryImages = (categoryName) => {
        const category = categoriesData.find(cat => cat.name === categoryName);
        if (!category) {
            console.error(`Catégorie "${categoryName}" non trouvée.`);
            return;
        }

        const galleryContainer = document.getElementById(`${categoryName}-gallery`);
        if (!galleryContainer) {
            console.error(`Conteneur de galerie introuvable pour "${categoryName}".`);
            return;
        }

        galleryContainer.innerHTML = ""; // Réinitialise la galerie

        category.projects.forEach((project) => {
            if (project.images[0]) {
                const imgElement = document.createElement("img");
                imgElement.src = project.images[0];
                imgElement.alt = project.name;
                imgElement.className = "project-image";
                imgElement.addEventListener("click", () => openModal(project)); // Ouvre la modale avec les détails
                galleryContainer.appendChild(imgElement);

                const caption = document.createElement("p");
                caption.textContent = project.name;
                caption.className = "project-caption";
                galleryContainer.appendChild(caption);
            }
        });
    };

    // **4. Fonction pour ouvrir la modale**
    const openModal = (project) => {
        const modal = document.getElementById("imageModal");
        if (!modal) {
            console.error("Modale introuvable.");
            return;
        }

        // Photo principale
        const mainPhoto = modal.querySelector(".photo-principale img");
        mainPhoto.src = project.images[0];

        // Section détails
        const detailPhoto = modal.querySelector(".details img");
        detailPhoto.src = project.images[1] || ""; // Deuxième photo, ou vide si manquante
        const detailTitle = modal.querySelector(".details-text h3");
        detailTitle.textContent = project.name;
        const detailDescription = modal.querySelector(".details-text p");
        detailDescription.textContent = project.description;

        // Galerie
        const galleryContainer = modal.querySelector(".galerie-grid");
        galleryContainer.innerHTML = ""; // Réinitialise la galerie
        project.images.slice(2).forEach((imgSrc) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            imgElement.alt = project.name;
            galleryContainer.appendChild(imgElement);
        });

        // Afficher la modale
        modal.classList.remove("inactive");
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    };
  

    // **5. Fermer la modale**
    const closeModal = () => {
        const modal = document.getElementById("imageModal");
        if (modal) {
            modal.classList.remove("active");
            modal.classList.add("inactive");
            document.body.classList.remove("modal-open");
        } else {
            console.error("Modale introuvable pour fermeture.");
        }
    };
    document.addEventListener("click", (event) => {
        const modal = document.getElementById("imageModal");
        if (modal && modal.classList.contains("active")) {
            const modalContent = modal.querySelector(".modal-content");
            if (event.target === modal && !modalContent.contains(event.target)) {
                closeModal(); // Ferme la modale si clic hors de son contenu
            }
        }
    });

    // **6. Initialisation et gestion des clics**
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetCategory = link.getAttribute("data-category");
            updateActivePage(targetCategory);

            if (targetCategory !== "home") {
                displayCategoryImages(targetCategory);
            }
        });
    });

    // Naviguer vers une catégorie depuis la Home
    window.navigateToCategory = (index) => {
        const category = categoriesData[index];
        if (category) {
            const categoryLink = document.querySelector(`[data-category="${category.name}"]`);
            if (categoryLink) categoryLink.click();
        }
    };

    // Initialise la page avec la catégorie actuelle
    updateActivePage(currentCategoryName);
    if (currentCategoryName !== "home") {
        displayCategoryImages(currentCategoryName);
    }

    // Attacher les événements globaux
       // Attacher les événements globaux
       window.closeModal = closeModal;

    // **7. Gestion du carousel**
  // Sélection des éléments
// Sélection des éléments
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".modal-section-carousel .carousel");
const allProjects = categories.flatMap(category => category.projects); // Récupère tous les projets

let scrollPosition = 0; // Position initiale pour le défilement

if (carouselContainer && carousel) {
    // Génération des miniatures
    allProjects.forEach(project => {
        const imgElement = document.createElement("img");
        imgElement.src = project.images[0]; // Première image du projet
        imgElement.alt = project.name;
        imgElement.dataset.projectId = project.id; // Associe l'ID du projet
        imgElement.addEventListener("click", () => openModal(project)); // Ouvre la modale
        carousel.appendChild(imgElement);
    });

    // Calcul de la largeur d'une image
    const imageWidth = carousel.firstElementChild.offsetWidth + 10; // Largeur d'une image + espace (gap)
    const maxScroll = carousel.scrollWidth - carouselContainer.clientWidth; // Maximum de défilement

    // Fonction pour décaler les images
    const updateCarouselPosition = () => {
        carousel.style.transition = "transform 0.3s ease";
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    };

    // Défilement à droite (btn ou roulette)
    const scrollRight = () => {
        const firstImage = carousel.firstElementChild;
        scrollPosition += imageWidth;

        updateCarouselPosition();

        // Repositionnement après transition
        carousel.addEventListener(
            "transitionend",
            () => {
                carousel.style.transition = "none";
                carousel.appendChild(firstImage); // Place la première image à la fin
                scrollPosition -= imageWidth; // Réajuste la position visuelle
                carousel.style.transform = `translateX(-${scrollPosition}px)`;
            },
            { once: true } // Exécute une seule fois par transition
        );
    };

    // Défilement à gauche (btn ou roulette)
    const scrollLeft = () => {
        const lastImage = carousel.lastElementChild;
        scrollPosition -= imageWidth;

        // Repositionne immédiatement
        carousel.style.transition = "none";
        carousel.prepend(lastImage);
        carousel.style.transform = `translateX(-${scrollPosition}px)`;

        // Ajoute la transition
        setTimeout(() => {
            carousel.style.transition = "transform 0.3s ease";
            scrollPosition += imageWidth;
            carousel.style.transform = `translateX(-${scrollPosition}px)`;
        }, 10);
    };

    // Gestion de la roulette de souris
    carouselContainer.addEventListener("wheel", (event) => {
        event.preventDefault(); // Empêche le scroll par défaut
        if (event.deltaY > 0) {
            scrollRight(); // Défile à droite
        } else {
            scrollLeft(); // Défile à gauche
        }
    });

    // Gestion des boutons
    document.querySelector(".next").addEventListener("click", scrollRight);
    document.querySelector(".prev").addEventListener("click", scrollLeft);
}
   
});


