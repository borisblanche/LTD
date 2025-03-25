// Sélection des éléments
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

// Fonctions pour ouvrir et fermer le menu
function openMenu() {
  navLinks.classList.add('open');
}

function closeMenu() {
  navLinks.classList.remove('open');
}

function toggleMenu() {
  navLinks.classList.toggle('open');
}

// Fonction pour configurer le comportement du menu selon la taille de l'écran
function setupMenuBehavior() {
  // Pour les tablettes et mobiles (1024px et moins)
  if (window.innerWidth <= 1024) {
    // Retirer les gestionnaires d'événement hover s'ils sont présents
    burgerMenu.removeEventListener('mouseenter', openMenu);
    burgerMenu.removeEventListener('mouseleave', closeMenu);
    // Éviter les doublons en retirant un éventuel click précédent
    burgerMenu.removeEventListener('click', toggleMenu);
    // Ajouter le gestionnaire de clic
    burgerMenu.addEventListener('click', toggleMenu);
  } else {
    // Pour les grands écrans, utiliser le hover
    burgerMenu.removeEventListener('click', toggleMenu);
    // Retirer d'abord pour éviter les doublons
    burgerMenu.removeEventListener('mouseenter', openMenu);
    burgerMenu.removeEventListener('mouseleave', closeMenu);
    // Ajouter les événements hover
    burgerMenu.addEventListener('mouseenter', openMenu);
    burgerMenu.addEventListener('mouseleave', closeMenu);
  }
}

// Initialiser au chargement de la page
setupMenuBehavior();

// Réajuster lors du redimensionnement de la fenêtre
window.addEventListener('resize', setupMenuBehavior);

// Fermer le menu lorsqu'un lien est cliqué (pour mobiles/tablettes)
navLinkItems.forEach(link => {
  link.addEventListener('click', closeMenu);
});









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

        console.log("🔄 Mise à jour de la page pour :", categoryName);
        if (categoryName === "projets") {
            console.log("📌 Scrolling vers la section catégories.");
            const section = document.getElementById("categories-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error("❌ La section #categories-section est introuvable.");
            }
            return; // ⛔️ STOP : On ne va pas plus loin !
        }
    
        // 🔹 Désactive toutes les pages et active la bonne
        document.querySelectorAll(".page").forEach(page => {
            page.classList.toggle("active", page.classList.contains(categoryName));
            page.classList.toggle("inactive", !page.classList.contains(categoryName));
        });
       
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
        if (!categoryName) {
            console.error("displayCategoryImages: Aucun nom de catégorie fourni.");
            return;
        }
        const pagesSansGalerie = ["home", "portrait", "contact", "projets"];
    
        if (pagesSansGalerie.includes(categoryName)) {
            console.warn(`⚠️ La page '${categoryName}' n'a pas de galerie d'images.`);
            return; // ⛔ Stop ici pour éviter l'erreur
        }

        if (categoryName === "home") {
            console.warn("🏠 Aucune image à afficher pour 'home'.");
            return;
        }
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
        const mainPhotoSection = modal.querySelector(".photo-principale");
        const mainPhoto = mainPhotoSection.querySelector("img");
        let projectName = mainPhotoSection.querySelector(".project-name"); // ✅ Utilise le bon sélecteur
    
        console.log("📌 Projet sélectionné :", project.name);
    
        // ✅ **Si le titre n'existe pas, on le crée**
        if (!projectName) {
            console.warn("⚠️ `project-name` introuvable, création d'un nouvel élément...");
            projectName = document.createElement("h3");
            projectName.classList.add("project-name");
            mainPhotoSection.appendChild(projectName);
        }
    
        // ✅ **Mise à jour du texte du titre**
        projectName.textContent = project.name;
    
        console.log("✅ Nouveau titre affiché :", projectName.textContent);
    
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
        console.log("📌 Image de détail trouvée ?", detailPhoto);
        if (project.images[1]) {
            detailPhoto.src = new URL(project.images[1].src, document.baseURI).href;
            detailPhoto.classList.add("project-image");
            detailPhoto.dataset.projectId = project.id;
            detailPhoto.dataset.imageId = 1;
    
            detailPhoto.addEventListener("click", () => {
                console.log("✅ Clic détecté sur l'image de détail !");
                openGrandeImageModal(
                    project.images.map(img => new URL(img.src, document.baseURI).href),
                    detailPhoto.src
                );
            });
        }
    
        // **Mise à jour uniquement de la description**
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
    
        let hoverInterval;
        let isTransitioning = false;
        const activationDistance = 150; // Distance pour détecter la souris
    
        // ✅ Fonction pour générer les images du carrousel
        if (carouselContainer && carousel) {
            carousel.innerHTML = ""; // Réinitialise le contenu
    
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
                        titleElement.textContent = category.name;
    
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
    
            // const visibleImages = 10;
            const visibleImages = window.innerWidth < 768 ? 4 : 10;
            // const totalImages = projectImageslength;
            // Nombre total d'images générées
const totalImages = projectImages.length;

// Ajuster la largeur dynamique du carousel et des images
carousel.style.width = `${totalImages * (100 / visibleImages)}%`;
projectImages.forEach((img) => (img.style.width = `${100 / visibleImages}%`));

    
            // Ajuster la largeur dynamique du carrousel et des images
            carousel.style.width = `${totalImages * (100 / visibleImages)}%`;
            projectImages.forEach((img) => (img.style.width = `${100 / visibleImages}%`));
        }
    
        // ✅ Fonction pour avancer le carousel
        const scrollRight = () => {
            if (isTransitioning || !carousel || !carousel.firstElementChild) return;
            isTransitioning = true;
    
            const firstImage = carousel.firstElementChild;
            carousel.appendChild(firstImage);
    
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(0%)`;
    
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    carousel.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
                    carousel.style.transform = `translateX(-10%)`;
    
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 800);
                });
            });
        };
    
        // ✅ Fonction pour reculer le carousel
        const scrollLeft = () => {
            if (isTransitioning || !carousel || !carousel.lastElementChild) return;
            isTransitioning = true;
    
            const lastImage = carousel.lastElementChild;
            carousel.prepend(lastImage);
    
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(-10%)`;
    
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    carousel.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
                    carousel.style.transform = `translateX(0%)`;
    
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 800);
                });
            });
        };
    
        // ✅ Fonction pour activer le scroll automatique
        const startAutoSlide = (direction) => {
             if (window.innerWidth < 768) {
        return;
    }

            stopAutoSlide(); // Évite les doublons
            hoverInterval = setInterval(() => {
                direction > 0 ? scrollRight() : scrollLeft();
            }, 300);
        };
    
        // ✅ Fonction pour arrêter le scroll automatique
        const stopAutoSlide = () => {
            clearInterval(hoverInterval);
        };
    
        // ✅ Détection de la proximité des boutons
        document.addEventListener("mousemove", (e) => {
            if (!nextButton || !prevButton) return;
    
            const nextRect = nextButton.getBoundingClientRect();
            const prevRect = prevButton.getBoundingClientRect();
    
            const nearNext = e.clientX > nextRect.left - activationDistance && e.clientX < nextRect.right + activationDistance;
            const nearPrev = e.clientX > prevRect.left - activationDistance && e.clientX < prevRect.right + activationDistance;
    
            if (nearNext) {
                startAutoSlide(1);
            } else if (nearPrev) {
                startAutoSlide(-1);
            } else {
                stopAutoSlide();
            }
        });
    
        // ✅ Ajout des événements "mouseenter" et "mouseleave" sur les boutons
        if (nextButton) {
            nextButton.addEventListener("mouseenter", () => startAutoSlide(1));
            nextButton.addEventListener("mouseleave", stopAutoSlide);
            nextButton.addEventListener("click", scrollRight);
        }
    
        if (prevButton) {
            prevButton.addEventListener("mouseenter", () => startAutoSlide(-1));
            prevButton.addEventListener("mouseleave", stopAutoSlide);
            prevButton.addEventListener("click", scrollLeft);
        }
    
        // ✅ Ajout du scroll avec la molette
        carouselContainer.addEventListener("wheel", (event) => {
            if (!event.ctrlKey) { // Permet de zoomer avec Ctrl+Scroll sans interférence
                event.preventDefault();
                if (event.deltaY > 0) {
                    scrollRight();
                } else {
                    scrollLeft();
                }
            }
        }, { passive: false });
    ;

    const toggleFullScreen = (element) => {
        if (!document.fullscreenElement) {
            element.requestFullscreen().catch(err => {
                console.error(`Erreur en passant en plein écran: ${err.message}`);
            });
        }
    };
    
    
    
    // **8. Gestion de la modale-grande-image**
    // **8. Gestion de la modale-grande-image**
 // **8. Gestion de la modale-grande-image**
 const openGrandeImageModal = (projectImages, clickedSrc) => {
    const modal = document.getElementById("modale-grande-image");
     const slider = modal.querySelector(".slider-grande-image");
     
     // Gestion des boutons avec vérification
  
     

// if (nextButton) {
//     nextButton.onclick = () => moveSlider(1);
// } else {
//     console.warn("⚠️ Bouton 'next' introuvable dans la modale.");
// }

// if (prevButton) {
//     prevButton.onclick = () => moveSlider(-1);
// } else {
//     console.warn("⚠️ Bouton 'prev' introuvable dans la modale.");
// }


    if (!modal || !slider) {
        console.error("❌ Modale ou slider introuvable.");
        return;
    }

    // **Correction ici : convertir toutes les images en URL absolue**
    const allImages = projectImages.map(img => new URL(img, document.baseURI).href);

    // Vérifier si l'image cliquée existe dans la liste
    const clickedIndex = allImages.indexOf(new URL(clickedSrc, document.baseURI).href);

    if (clickedIndex === -1) {
        // console.error("❌ Index introuvable pour l'image cliquée.");
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
     
     const enableZoom = (img) => {
        img.style.transformOrigin = "center center"; // Point central du zoom
        img.style.transition = "transform 0.5s ease-in-out";
    
        img.addEventListener("mousemove", (e) => {
            const rect = img.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
    
            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = "scale(2)"; // Zoom x2
        });
    
        img.addEventListener("mouseleave", () => {
            setTimeout(() => {
                img.style.transform = "scale(1)"; // Retour à la taille normale
            }, 100); // Petit délai pour éviter un effet brusque
        });
    };
    

    // ✅ Applique le zoom à toutes les images du slider
    allSliderImages.forEach(img => enableZoom(img));
    

    // 🔥 Positionner le slider directement sur l'image cliquée
    setTimeout(() => {
        const slideWidth = allSliderImages[0].offsetWidth;
        const initialPosition = (clickedIndex + 1) * slideWidth; // +1 pour le clone au début

        slider.style.transition = "none";
        slider.style.transform = `translateX(-${initialPosition}px)`;

        console.log(`📌 Slider positionné sur l'index ${clickedIndex}`);
    }, 50);


    toggleFullScreen(modal);
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
const exitFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
};

// **7. Fermeture de la modale**
const closeGrandeImageModal = () => {
    const modal = document.getElementById("modale-grande-image");
    if (modal) {
        modal.classList.remove("active");
        modal.classList.add("inactive");
        document.body.style.overflow = ""; // ✅ Réactiver le scroll
        exitFullScreen();
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

// document.addEventListener("DOMContentLoaded", () => {
//     const navLinks = document.querySelectorAll(".nav-links a");
//     const pages = document.querySelectorAll(".page");

//     const updateActivePage = (targetId) => {
//         // Désactive toutes les pages
//         pages.forEach(page => {
//             page.classList.remove("active");
//             page.classList.add("inactive");
//         });

//         // Vérifie si c'est une page existante
//         const targetPage = document.querySelector(`.${targetId}`);
//         if (targetPage) {
//             targetPage.classList.add("active");
//             targetPage.classList.remove("inactive");
//         } else {
//             // Si c'est une section, on scrolle vers elle
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 window.scrollTo({ top: targetSection.offsetTop - 100, behavior: "smooth" });
//             }
//         }

//         // ✅ Ferme le menu burger après le clic
//         document.querySelector(".nav-links").classList.remove("active");
//         document.querySelector(".burger-menu").classList.remove("active");
//     };

//     // ✅ Ajoute l'événement aux liens de navigation
//     navLinks.forEach(link => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href").substring(1); // Supprime le "#"
//             updateActivePage(targetId);
//         });
//     });
// });
// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault(); // Empêche le comportement par défaut du lien

//         const categoryName = link.getAttribute("data-category"); // Utilise data-category

//         updateActivePage(categoryName); // Active la bonne page

//         // ✅ Ferme le menu burger après un clic sur un lien
//         document.querySelector(".nav-links").classList.remove("active");
//         document.querySelector(".burger-menu").classList.remove("active");
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const pages = document.querySelectorAll(".page");

    // ✅ Fonction pour activer la bonne section
    const updateActivePage = (categoryName) => {
        console.log(`🔄 Activation de la section : ${categoryName}`);

        // 🔹 Si "projets" est cliqué → D'abord revenir sur "home", puis scroller
        if (categoryName === "projets") {
            console.log("📌 Demande d'affichage de la section catégories...");

            // D'abord s'assurer que la page "home" est bien active
            if (!document.querySelector(".home").classList.contains("active")) {
                console.log("🏠 Retour à Home d'abord...");
                updateActivePage("home"); // On revient sur home
                setTimeout(() => { scrollToProjects(); }, 300); // Puis on scroll après un court délai
            } else {
                scrollToProjects();
            }
            return; // ⛔ STOP ici, ne pas continuer à exécuter le reste du code
        }

        // 🔹 Désactive toutes les autres pages
        pages.forEach(page => {
            page.classList.remove("active");
            page.classList.add("inactive");
        });

        // 🔹 Activer la bonne page, si elle existe
        const targetPage = document.querySelector(`.${categoryName}`);
        if (targetPage) {
            targetPage.classList.add("active");
            targetPage.classList.remove("inactive");
        }
        
        if (categoryName === "home") {
            console.log("🏠 Scroll forcé vers le haut...");
        
            // Force le scroll en haut immédiatement
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        
            // 🕐 Ajoute un délai pour garantir le scroll avec un effet plus lent
            setTimeout(() => {
                let currentPosition = window.scrollY;
                const scrollSpeed = 20; // Ajuste la vitesse (plus petit = plus lent)
        
                const interval = setInterval(() => {
                    if (currentPosition > 0) {
                        currentPosition -= scrollSpeed;
                        window.scrollTo(0, currentPosition);
                    } else {
                        clearInterval(interval); // Stoppe le scroll une fois en haut
                    }
                }, 10); // Met à jour toutes les 10ms pour une transition plus fluide
            }, 300); // Petit délai pour éviter le conflit avec `window.scrollTo({ top: 0, behavior: "smooth" })`
        }
        
        
        

        // 🔹 Met à jour l'état actif des liens de navigation
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.classList.toggle("active", link.getAttribute("data-category") === categoryName);
        });

        // ✅ Ferme le menu burger après un clic sur un lien
        navLinks.classList.remove("active");
        burger.classList.remove("active");
    };

    // ✅ Fonction qui scroll directement à la section projets
    const scrollToProjects = () => {
        console.log("📌 Scrolling vers la section catégories...");
        const section = document.getElementById("categories-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.error("❌ La section #categories-section est introuvable.");
        }
    };

    // ✅ Événement d'ouverture / fermeture du menu burger
    burger.addEventListener("click", () => {
        console.log("🍔 Menu burger cliqué !");
        navLinks.classList.toggle("active");
        burger.classList.toggle("active");
    });

    // ✅ Gestion des clics sur les liens de navigation
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const target = link.getAttribute("data-category") || link.getAttribute("href").substring(1);
            if (!target) return console.error("❌ Lien sans catégorie valide.");

            updateActivePage(target);
        });
    });

    // ✅ Clique sur le logo → Retourne à "home"
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            updateActivePage("home");
        });
    }

    // ✅ Initialise la page avec l'URL (ex: ?category=projets)
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategoryName = urlParams.get("category") || "home";
    updateActivePage(currentCategoryName);
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    // ✅ Ouvre et ferme le menu burger au clic (mobile + desktop)
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("active");
    });

    // ✅ Ferme le menu burger après un clic sur un lien
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            burger.classList.remove("active");
        });
    });

    // ✅ Ajoute le hover uniquement pour grand écran (>= 1024px)
    const handleHover = (e) => {
        if (window.innerWidth >= 1024) { // Seulement sur grand écran
            navLinks.classList.add("active");
            burger.classList.add("active");
        }
    };

    const handleMouseLeave = (e) => {
        if (window.innerWidth >= 1024) { // Seulement sur grand écran
            navLinks.classList.remove("active");
            burger.classList.remove("active");
        }
    };

    // 🎯 Appliquer le hover pour grand écran
    burger.addEventListener("mouseenter", handleHover);
    navLinks.addEventListener("mouseleave", handleMouseLeave);

    // ✅ Fermer si on réduit la fenêtre (évite un menu bloqué)
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1024) {
            navLinks.classList.remove("active");
            burger.classList.remove("active");
        }
    });
});





