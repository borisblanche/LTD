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
            if (category.titleImage) {
                const img = document.createElement("img");
                img.src = category.titleImage;
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
        const category = categoriesData.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
        if (!category) {
            console.error(`Catégorie "${categoryName}" non trouvée.`);
            return;
        }
    
        // Crée un ID normalisé pour la galerie
        const normalizedCategoryName = category.name.toLowerCase().replace(/\s+/g, "-").replace(/[éèê]/g, "e");
        const galleryContainer = document.getElementById(`${normalizedCategoryName}-gallery`);
    
        if (!galleryContainer) {
            console.error(`Conteneur de galerie introuvable pour "${categoryName}".`);
            return;
        }
    
        galleryContainer.innerHTML = ""; // Réinitialise la galerie
    
        // Parcourir les projets et afficher uniquement la première image de chaque projet
        category.projects.forEach((project) => {
            if (project.images.length > 0) {
                const firstImage = project.images[0]; // Prendre uniquement la première image
                
                const imgElement = document.createElement("img");
                imgElement.src = firstImage.src; // Utilise la source de la première image
                imgElement.alt = `${project.name} - Image ${firstImage.index}`;
                imgElement.className = "project-image";
                imgElement.dataset.projectId = project.id;
    
                imgElement.addEventListener("click", () => openModal(project)); // Ouvre la modale avec les détails
    
                galleryContainer.appendChild(imgElement);
    
                const caption = document.createElement("p");
                caption.textContent = project.name; // Nom du projet comme légende
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
        mainPhoto.src = project.images[0].src; // Première image
        mainPhoto.classList.add("project-image");
        mainPhoto.dataset.projectId = project.id;
    
        // Section détails
        const detailPhoto = modal.querySelector(".details img");
        detailPhoto.src = project.images[1]?.src || ""; // Deuxième image ou vide
        detailPhoto.classList.add("project-image");
        detailPhoto.dataset.projectId = project.id;
    
        const detailTitle = modal.querySelector(".details-text h3");
        detailTitle.textContent = project.name;
    
        const detailDescription = modal.querySelector(".details-text p");
        detailDescription.textContent = project.description;
    
        // Galerie (gallery-grid)
        const galleryContainer = modal.querySelector(".galerie-grid");
        galleryContainer.innerHTML = ""; // Réinitialise la galerie
    
        project.images.slice(2).forEach(({ src, index }) => {
            const imgElement = document.createElement("img");
            imgElement.src = src; // Images restantes à partir de la 3ème
            imgElement.alt = `${project.name} - Image ${index}`;
            imgElement.classList.add("project-image");
    
            imgElement.addEventListener("click", () => {
                // Change la photo principale si on clique sur une image de la galerie
                mainPhoto.src = src;
            });
    
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
            const categoryName = category.name;
            updateActivePage(categoryName); // Active la page correspondante
            displayCategoryImages(categoryName); // Affiche les images de la catégorie
        } else {
            console.error(`Catégorie introuvable à l'index ${index}.`);
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
// **7. Gestion du carousel**
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

if (carouselContainer && carousel) {
    // Réinitialise le contenu du carrousel
    carousel.innerHTML = "";

    const projectImages = [];
    categories.forEach((category) => {
        category.projects.forEach((project) => {
            if (project.images.length > 0) {
                const imgElement = document.createElement("img");
                imgElement.src = project.images[0].src; // Première image du projet
                imgElement.alt = project.name;
                imgElement.classList.add("carousel-image");
                imgElement.dataset.projectId = project.id;

                // Ouvre la modale du projet lorsqu'on clique sur l'image
                imgElement.addEventListener("click", () => {
                    openModal(project);
                });

                projectImages.push(imgElement);
            }
        });
    });

    // Ajouter les images au carousel
    projectImages.forEach((img) => carousel.appendChild(img));

    // Configuration du carousel
    const visibleImages = 10; // Nombre d'images visibles dans le carousel
    let currentIndex = 0;
    const totalImages = projectImages.length;

    // Ajuster la largeur dynamique du carousel et des images
    carousel.style.width = `${(totalImages / visibleImages) * 100}%`;
    projectImages.forEach((img) => (img.style.width = `${100 / visibleImages}%`));

    // Fonction pour mettre à jour la position
    const updateCarouselPosition = () => {
        const offset = currentIndex * (100 / visibleImages);
        carousel.style.transform = `translateX(-${offset}%)`;
    };
    
    
    

    // Boucle infinie
    let isScrolling = false;

    const scrollRight = () => {
        if (isScrolling) return; // Empêche un défilement multiple simultané
        isScrolling = true;
    
        currentIndex++;
        carousel.style.transition = "transform 0.5s ease-in-out";
        updateCarouselPosition();
    
        if (currentIndex >= totalImages) {
            setTimeout(() => {
                carousel.style.transition = "none"; // Désactive temporairement la transition
                const firstImage = carousel.firstElementChild;
                carousel.appendChild(firstImage); // Déplace la première image à la fin
                currentIndex--; // Réajuste l'indice
                updateCarouselPosition(); // Réinitialise la position
                isScrolling = false; // Permet un nouveau défilement
                requestAnimationFrame(() => {
                    carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition
                });
            }, 500); // Attendre la fin de la transition
        } else {
            setTimeout(() => (isScrolling = false), 500); // Réactive le défilement après la transition
        }
    };
    
    
    const scrollLeft = () => {
        if (isScrolling) return; // Empêche un défilement multiple en simultané
        isScrolling = true;
    
        currentIndex--;
        carousel.style.transition = "transform 0.5s ease-in-out";
        updateCarouselPosition();
    
        // Vérifie si on dépasse la première image
        if (currentIndex < 0) {
            setTimeout(() => {
                carousel.style.transition = "none"; // Désactive temporairement la transition
                const lastImage = carousel.lastElementChild;
                carousel.prepend(lastImage); // Déplace la dernière image au début
                currentIndex++; // Ajuste l'indice
                updateCarouselPosition(); // Réinitialise la position
                requestAnimationFrame(() => {
                    carousel.style.transition = "transform 0.5s ease-in-out"; // Réactive la transition
                });
                isScrolling = false; // Permet un nouveau défilement
            }, 500); // Attendre la fin de la transition
        } else {
            setTimeout(() => (isScrolling = false), 500); // Réactive le défilement après la transition
        }
    };
    
    
    
    
    
    
    

    // Ajout des événements pour les boutons
    nextButton.addEventListener("click", scrollRight);
    prevButton.addEventListener("click", scrollLeft);
    
    

    // Gestion de la roulette de la souris
    carouselContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
            scrollRight();
        } else {
            scrollLeft();
        }
    });

    // Initialisation
    updateCarouselPosition();
}






    // **8. Gestion de la modale-grande-image**
// **8. Gestion de la modale-grande-image**
const openGrandeImageModal = (projectImages, clickedIndex) => {
    const modal = document.getElementById("modale-grande-image");
    const slider = modal.querySelector(".slider-grande-image");

    if (!modal || !slider) {
        console.error("Modale ou slider introuvable.");
        return;
    }

    // Réinitialise le contenu du slider
    slider.innerHTML = "";

    // Ajoute les images avec les clones pour une boucle infinie
    const clones = [
        projectImages[projectImages.length - 1], // Dernière image au début
        ...projectImages, // Images originales
        projectImages[0], // Première image à la fin
    ];

    clones.forEach((imgSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = "Image grand format";
        imgElement.style.width = "100%";
        imgElement.style.flexShrink = "0";
        slider.appendChild(imgElement);
    });

    const allImages = slider.querySelectorAll("img");

    // Initialisation après chargement des images
    const initializeSlider = () => {
        const slideWidth = allImages[0].offsetWidth;
        const initialPosition = (clickedIndex + 1) * slideWidth; // +1 pour compenser le clone au début

        slider.style.transition = "none"; // Pas d'animation pour l'initialisation
        slider.style.transform = `translateX(-${initialPosition}px)`; // Positionne directement sur l'image cliquée

        // Affiche la modale
        modal.classList.remove("inactive");
        modal.classList.add("active");
        modal.dataset.currentIndex = clickedIndex + 1; // Sauvegarde l'indice actuel
    };

    // Vérifiez que toutes les images sont chargées avant d'initialiser
    let imagesLoaded = 0;
    allImages.forEach((img) => {
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === allImages.length) {
                initializeSlider();
            }
        };
    });

    // Gestion des boutons "Next" et "Prev"
    const moveSlider = (direction) => {
        const currentIndex = parseInt(modal.dataset.currentIndex, 10);
        const slideWidth = slider.firstElementChild.offsetWidth;

        let newIndex = currentIndex + direction;
        slider.style.transition = "transform 0.5s ease";
        slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
        modal.dataset.currentIndex = newIndex;

        // Gère la boucle infinie
        slider.addEventListener(
            "transitionend",
            () => {
                if (newIndex === 0) {
                    slider.style.transition = "none";
                    newIndex = projectImages.length;
                    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
                    modal.dataset.currentIndex = newIndex;
                } else if (newIndex === projectImages.length + 1) {
                    slider.style.transition = "none";
                    newIndex = 1;
                    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
                    modal.dataset.currentIndex = newIndex;
                }
            },
            { once: true }
        );
    };

    document.querySelector(".btn-next").onclick = () => moveSlider(1);
    document.querySelector(".btn-prev").onclick = () => moveSlider(-1);

    // Ferme la modale en cliquant en dehors
    modal.onclick = (e) => {
        if (!e.target.closest(".slider-grande-image-container")) {
            closeGrandeImageModal();
        }
    };
};







const closeGrandeImageModal = () => {
    const modal = document.getElementById("modale-grande-image");
    if (modal) {
        modal.classList.remove("active");
        modal.classList.add("inactive");
    }
};

const slideGrandeImagePrev = () => {
    const modal = document.getElementById("modale-grande-image");
    const slider = modal.querySelector(".slider-grande-image");
    if (!modal || !slider) return;

    const currentIndex = parseInt(modal.dataset.currentIndex, 10);
    const newIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;

    modal.dataset.currentIndex = newIndex;
    const slideWidth = slider.firstElementChild.offsetWidth;
    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
};

const slideGrandeImageNext = () => {
    const modal = document.getElementById("modale-grande-image");
    const slider = modal.querySelector(".slider-grande-image");
    if (!modal || !slider) return;

    const currentIndex = parseInt(modal.dataset.currentIndex, 10);
    const newIndex = (currentIndex + 1) % slider.children.length;

    modal.dataset.currentIndex = newIndex;
    const slideWidth = slider.firstElementChild.offsetWidth;
    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
};

// **Gestion des clics pour ouvrir la modale-grande-image**
document.querySelectorAll(".project-image").forEach((image) => {
    image.addEventListener("click", () => {
        const projectId = parseInt(image.dataset.projectId, 10);
        const project = categories
            .flatMap((cat) => cat.projects)
            .find((proj) => proj.id === projectId);

        if (project) {
            const allImages = [
                project.images[0],
                ...(project.images[1] ? [project.images[1]] : []),
                ...project.images.slice(2),
            ];

            const clickedSrc = new URL(image.src, document.baseURI).href;
            const normalizedImages = allImages.map((imgSrc) =>
                new URL(imgSrc, document.baseURI).href
            );

            const clickedIndex = normalizedImages.indexOf(clickedSrc);

            if (clickedIndex !== -1) {
                openGrandeImageModal(allImages, clickedIndex);
            } else {
                console.error("Index introuvable pour l'image cliquée.");
            }
        } else {
            console.error("Projet introuvable.");
        }
    });
});







// **Attache la fermeture de la modale**
document.querySelector(".close-grande-image").addEventListener("click", closeGrandeImageModal);

// Attache les boutons de navigation pour le slider
document.querySelector(".slider-grande-image-button.prev").addEventListener("click", slideGrandeImagePrev);
document.querySelector(".slider-grande-image-button.next").addEventListener("click", slideGrandeImageNext);

});



