document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault(); // Évite tout comportement par défaut

    // Sélectionne toutes les pages et désactive-les
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
        page.classList.add("inactive");
    });

    // Active la page home
    document.querySelector(".home").classList.add("active");
    document.querySelector(".home").classList.remove("inactive");
});


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
            page.classList.remove("active", "inactive"); // Enlève les classes active et inactive
            page.classList.add(page.classList.contains(categoryName) ? "active" : "inactive"); // Ajoute active à la page correspondante
        });

        navLinks.forEach(link => {
            const linkCategory = link.getAttribute("data-category"); // Récupère la catégorie du lien
            link.classList.toggle("active", linkCategory === categoryName); // Ajoute la classe active au lien
        });
        displayCategoryImages(categoryName); 
    };
    document.querySelectorAll('.navigation-links a').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        const targetCategory = link.getAttribute("data-category"); // Récupère la catégorie associée au lien
        updateActivePage(targetCategory); // Met à jour la page active en fonction de la catégorie
    });
});

    // **2. Ajout d'événements de clic sur les liens**
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            const targetCategory = link.getAttribute("data-category"); // Récupère la catégorie cible
            updateActivePage(targetCategory); // Met à jour la page active en fonction de la catégorie
        });
    });
    
    

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
                
                const projectItem = document.createElement("div");
                projectItem.classList.add("project-item");
                
                // **Image du projet**
                const imgElement = document.createElement("img");
                imgElement.src = firstImage.src;
                imgElement.alt = `${project.name} - Image ${firstImage.index}`;
                imgElement.className = "project-image";
                imgElement.dataset.projectId = project.id;
                
                // **Ajout du titre en overlay**
                const titleElement = document.createElement("div");
                titleElement.classList.add("project-title");
                titleElement.textContent = project.name;
                
                // ✅ **Ajoute l'événement au conteneur et non à l'image uniquement**
                projectItem.addEventListener("click", () => openModal(project));
                
                // **Ajoute les éléments au conteneur**
                projectItem.appendChild(imgElement);
                projectItem.appendChild(titleElement);
                galleryContainer.appendChild(projectItem);
                
            }
        });
    };

    
    
    
    
    
    

    // **4. Fonction pour ouvrir la modale**
 const openModal = (project) => {
    const modal = document.getElementById("imageModal");
    if (!modal) {
        console.error("❌ Modale introuvable.");
        return;
    }

    modal.scrollTop = 0;
    modal.querySelector(".modal-content")?.scrollTo(0, 0);

    // **Photo principale**
    const mainPhoto = modal.querySelector(".photo-principale img");
    mainPhoto.src = new URL(project.images[0].src, document.baseURI).href;
    mainPhoto.classList.add("project-image");
    mainPhoto.dataset.projectId = project.id;
    mainPhoto.dataset.imageId = 0;

    mainPhoto.addEventListener("click", () => {
        openGrandeImageModal(
            project.images.map(img => new URL(img.src, document.baseURI).href),
            mainPhoto.src
        );
    });

    // **Photo de détail**
    const detailPhoto = modal.querySelector(".details img");
    if (project.images[1]) {
        detailPhoto.src = new URL(project.images[1].src, document.baseURI).href;
        detailPhoto.classList.add("project-image");
        detailPhoto.dataset.projectId = project.id;
        detailPhoto.dataset.imageId = 1;

        detailPhoto.addEventListener("click", () => {
            openGrandeImageModal(
                project.images.map(img => new URL(img.src, document.baseURI).href),
                detailPhoto.src
            );
        });
    }

    // **Mise à jour du texte et de la description**
    modal.querySelector(".details-text h3").textContent = project.name;
    modal.querySelector(".details-text p").textContent = project.description;

    // **Ajout des images de la galerie**
    const galleryContainer = modal.querySelector(".galerie-grid");
    galleryContainer.innerHTML = ""; // Réinitialisation

    project.images.slice(2).forEach((img, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = new URL(img.src, document.baseURI).href;
        imgElement.alt = `${project.name} - Image ${index + 2}`;
        imgElement.classList.add("project-image");

        imgElement.dataset.projectId = project.id;
        imgElement.dataset.imageId = index + 2;

        imgElement.addEventListener("click", () => {
            openGrandeImageModal(
                project.images.map(img => new URL(img.src, document.baseURI).href),
                imgElement.src
            );
        });

        galleryContainer.appendChild(imgElement);
    });

    // **Affiche la modale**
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
                    const projectItem = document.createElement("div");
                    projectItem.classList.add("carousel-image-container");
                    
                    // **Image du projet**
                    const imgElement = document.createElement("img");
                    imgElement.src = project.images[0].src;
                    imgElement.alt = project.name;
                    imgElement.classList.add("carousel-image");
                    imgElement.dataset.projectId = project.id;
                    
                    // **Ajout du titre en overlay**
                    const titleElement = document.createElement("div");
                    titleElement.classList.add("carousel-title");
                    titleElement.textContent = project.name;
                    
                    // ✅ Ajout de l’événement pour ouvrir la modale
                    projectItem.addEventListener("click", () => openModal(project));
                    
                    // **Ajoute les éléments dans le conteneur**
                    projectItem.appendChild(imgElement);
                    projectItem.appendChild(titleElement);
                    projectImages.push(projectItem);
                    
                }
            });
        });

        // Ajouter les images au carrousel
        projectImages.forEach((img) => carousel.appendChild(img));

        const visibleImages = 10;
        const totalImages = projectImages.length;

        // Ajuster la largeur dynamique du carrousel et des images
        carousel.style.width = `${totalImages * (100 / visibleImages)}%`;
        projectImages.forEach((img) => (img.style.width = `${100 / visibleImages}%`));

        let isTransitioning = false;

        // Fonction pour avancer
        const scrollRight = () => {
            if (isTransitioning) return;
            isTransitioning = true;
    
            // Déplacer immédiatement la première image à la fin
            const firstImage = carousel.firstElementChild;
            carousel.appendChild(firstImage);
    
            // Supprimer la transition pour repositionner instantanément
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(0%)`;
    
            // Petite pause pour laisser le navigateur appliquer le changement
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Réactiver la transition après le déplacement
                    carousel.style.transition = "transform 0.05s ease-in-out";
                    carousel.style.transform = `translateX(-${100 / visibleImages}%)`;
    
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 350);
                });
            });
        };
    
    
    

        // Fonction pour reculer
        const scrollLeft = () => {
            if (isTransitioning) return;
            isTransitioning = true;
    
            // Déplacer immédiatement la dernière image au début
            const lastImage = carousel.lastElementChild;
            carousel.prepend(lastImage);
    
            // Supprimer la transition pour repositionner instantanément
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(-${100 / visibleImages}%)`;
    
            // Petite pause pour laisser le navigateur appliquer le changement
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Réactiver la transition après le déplacement
                    carousel.style.transition = "transform 0.05s ease-in-out";
                    carousel.style.transform = "translateX(0%)";
    
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 350);
                });
            });
        };
    
    

        // Ajout des événements pour les boutons
        nextButton.addEventListener("click", scrollRight);
        prevButton.addEventListener("click", scrollLeft);

        carouselContainer.addEventListener("wheel", (event) => {
            event.preventDefault();
            if (event.deltaY > 0) {
                scrollRight(); // Molette vers le bas → Avance
            } else {
                scrollLeft(); // Molette vers le haut → Recule
            }
        });
    }
    // **8. Gestion de la modale-grande-image**
    // **8. Gestion de la modale-grande-image**
 // **8. Gestion de la modale-grande-image**
 const openGrandeImageModal = (projectImages, clickedSrc) => {
    const modal = document.getElementById("modale-grande-image");
    const slider = modal.querySelector(".slider-grande-image");

    if (!modal || !slider) {
        console.error("❌ Modale ou slider introuvable.");
        return;
    }

    // **Correction ici : convertir toutes les images en URL absolue**
    const allImages = projectImages.map(img => new URL(img, document.baseURI).href);

    // Vérifier si l'image cliquée existe dans la liste
    const clickedIndex = allImages.indexOf(new URL(clickedSrc, document.baseURI).href);

    if (clickedIndex === -1) {
        console.error("❌ Index introuvable pour l'image cliquée.");
        console.log("Images disponibles :", allImages);
        console.log("Image cliquée :", clickedSrc);
        return;
    }

    console.log("🎯 Index de l'image cliquée :", clickedIndex);

    // 🔥 Ajout des images avec clones pour le slider infini
    slider.innerHTML = ""; // On vide le slider avant de le remplir

    const clones = [
        allImages[allImages.length - 1], // Clone de la dernière image
        ...allImages,
        allImages[0] // Clone de la première image
    ];

    clones.forEach((src) => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.alt = "Image grand format";
        imgElement.classList.add("slider-image");
        slider.appendChild(imgElement);
    });

    const allSliderImages = slider.querySelectorAll(".slider-image");

    // 🔥 Positionner le slider directement sur l'image cliquée
    setTimeout(() => {
        const slideWidth = allSliderImages[0].offsetWidth;
        const initialPosition = (clickedIndex + 1) * slideWidth; // +1 pour le clone au début

        slider.style.transition = "none";
        slider.style.transform = `translateX(-${initialPosition}px)`;

        console.log(`📌 Slider positionné sur l'index ${clickedIndex}`);
    }, 50);

    // **Affiche la modale**
    modal.classList.remove("inactive");
    modal.classList.add("active");
    modal.dataset.currentIndex = clickedIndex + 1; // Compense le clone

    // Gestion des boutons
    document.querySelector(".btn-next").onclick = () => moveSlider(1);
    document.querySelector(".btn-prev").onclick = () => moveSlider(-1);

    // **Ferme la modale en cliquant en dehors**
    modal.onclick = (e) => {
        if (!e.target.closest(".slider-grande-image-container")) {
            closeGrandeImageModal();
        }
    };
};



// **6. Fonction pour déplacer le slider**
const moveSlider = (direction) => {
    const modal = document.getElementById("modale-grande-image");
    const slider = modal.querySelector(".slider-grande-image");

    if (!modal || !slider) return;

    const currentIndex = parseInt(modal.dataset.currentIndex, 10);
    const slideWidth = slider.firstElementChild.offsetWidth;
    let newIndex = currentIndex + direction;

    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
    modal.dataset.currentIndex = newIndex;

    // 🔥 **Correction : Boucle infinie pour le slider**
    slider.addEventListener("transitionend", () => {
        if (newIndex === 0) {
            slider.style.transition = "none";
            newIndex = slider.children.length - 2;
            slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
            modal.dataset.currentIndex = newIndex;
        } else if (newIndex === slider.children.length - 1) {
            slider.style.transition = "none";
            newIndex = 1;
            slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
            modal.dataset.currentIndex = newIndex;
        }
    }, { once: true });
};


// **7. Fermeture de la modale**
const closeGrandeImageModal = () => {
    const modal = document.getElementById("modale-grande-image");
    if (modal) {
        modal.classList.remove("active");
        modal.classList.add("inactive");
    }
};
document.querySelectorAll(".project-image").forEach((image) => {
    image.addEventListener("click", () => {
        const projectId = parseInt(image.dataset.projectId, 10);

        if (isNaN(projectId)) {
            console.error("❌ L'image cliquée ne contient pas de projectId valide !");
            return;
        }

        console.log("🔎 projectId récupéré :", projectId);

        // Trouver le projet correspondant
        const project = categories
            .flatMap((cat) => cat.projects)
            .find(proj => proj.id === projectId);

        if (!project) {
            console.error("❌ Projet introuvable pour projectId :", projectId);
            return;
        }

        console.log("📌 Projet trouvé :", project);

        const clickedSrc = new URL(image.src, document.baseURI).href;
        const allImages = project.images.map(img => ({
            src: new URL(img.src, document.baseURI).href
        }));

        console.log("✅ Liste des images normalisées :", allImages);
        console.log("🔵 URL de l'image cliquée :", clickedSrc);

        openGrandeImageModal(allImages, clickedSrc);
    });
});


document.querySelector(".close-grande-image").addEventListener("click", closeGrandeImageModal);
document.querySelector(".slider-grande-image-button.prev").addEventListener("click", () => moveSlider(-1));
document.querySelector(".slider-grande-image-button.next").addEventListener("click", () => moveSlider(1));

// **Initialisation**
updateActivePage(currentCategoryName);
if (currentCategoryName !== "home") {
    displayCategoryImages(currentCategoryName);
}
});



