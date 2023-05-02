/**********afficher projets modal**********/
function afficherModalProjects() {
    const ModalAllProjects = document.querySelector(".modal_allProjects")
    //supprime les travaux avant d'afficher ceux selectionner, evite les doublons//
    document.querySelector(".modal_allProjects").innerHTML = ''

    for (let project of projects) {
        let figure = document.createElement("figure");
        figure.setAttribute("class", "figure")
        figure.setAttribute("id", project.id)
        ModalAllProjects.appendChild(figure)

        let image = document.createElement("img")
        image.setAttribute("src", project.imageUrl)
        image.setAttribute("alt", project.title)
        image.setAttribute("crossorigin", "anonymous")
        figure.appendChild(image)

        let editerBtn = document.createElement("div");
        editerBtn.setAttribute("class", "modal_editer_btn")
        editerBtn.innerText = "éditer"
        figure.appendChild(editerBtn)

        let deleteBtn = document.createElement("div");
        deleteBtn.setAttribute("class", "modal_delete_btn")
        deleteBtn.innerHTML = `<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6 1.8V0.9C6.6 0.402944 6.19704 0 5.7 0H3.3C2.80294 0 2.4 0.402944 2.4 0.9V1.8H0V2.4H0.6V8.1C0.6 8.59704 1.00294 9 1.5 9H7.5C7.99704 9 8.4 8.59704 8.4 8.1V2.4H9V1.8H6.6ZM3 0.9C3 0.734316 3.13432 0.6 3.3 0.6H5.7C5.86568 0.6 6 0.734316 6 0.9V1.8H3V0.9ZM4.2 4.2V7.2H4.8V4.2H4.2ZM2.4 7.2V5.4H3V7.2H2.4ZM6 5.4V7.2H6.6V5.4H6Z" fill="white"/>
        </svg>`
        figure.appendChild(deleteBtn)

        let positionBtn = document.createElement("div");
        positionBtn.setAttribute("class", "modal_position_btn")
        positionBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2364 5.81583L9.97332 4.55272C9.82886 4.40818 9.61143 4.36503 9.42271 4.44318C9.23391 4.52139 9.1108 4.7056 9.1108 4.90996V5.66783H6.33199V2.88898H7.08986C7.29421 2.88898 7.47843 2.76587 7.55664 2.57707C7.63482 2.38828 7.5916 2.17096 7.4471 2.02646L6.18399 0.763343C5.98671 0.566028 5.66679 0.566028 5.46947 0.763343L4.20636 2.02646C4.06186 2.17096 4.01865 2.38828 4.09683 2.57707C4.17504 2.76587 4.35928 2.88898 4.5636 2.88898H5.3215V5.66783H2.54266V4.90996C2.54266 4.7056 2.41955 4.52136 2.23076 4.44318C2.04193 4.365 1.82461 4.40822 1.68014 4.55272L0.417029 5.81583C0.219714 6.01314 0.219714 6.33303 0.417029 6.53035L1.68014 7.79346C1.77681 7.89013 1.90598 7.94146 2.03752 7.94146C2.10259 7.94146 2.16824 7.92887 2.23076 7.903C2.41955 7.82479 2.54266 7.64054 2.54266 7.43622V6.67832H5.3215V9.45716H4.56364C4.35928 9.45716 4.17504 9.58028 4.09686 9.76907C4.01868 9.95786 4.0619 10.1752 4.2064 10.3197L5.46951 11.5828C5.56813 11.6815 5.69744 11.7308 5.82675 11.7308C5.95606 11.7308 6.08537 11.6815 6.18399 11.5828L7.4471 10.3197C7.5916 10.1752 7.63482 9.95783 7.55664 9.76904C7.47843 9.58024 7.29421 9.45713 7.08986 9.45713H6.33199V6.67832H9.11084V7.43618C9.11084 7.64054 9.23391 7.82479 9.42274 7.90296C9.48522 7.92887 9.55091 7.94143 9.61598 7.94143C9.74745 7.94143 9.87669 7.8901 9.97332 7.79343L11.2364 6.53031C11.4338 6.33303 11.4338 6.01314 11.2364 5.81583Z" fill="white"/>
        </svg>`
        figure.appendChild(positionBtn)


        deleteBtn.addEventListener("click", async (e) => {
            /**********les fonction suivante sont dans deleteProjects.js**********/

            getItemId = e.target.closest(".figure").getAttribute("id")
            if (confirm("êtes-vous sûr de vouloir supprimer l'élément " + getItemId) === true) {
               await deleteOneProject(getItemId)

            }

        })

    }
}



///////////// DISPLAY BOUTON MODIFICATION/////////////

/********** is connected**********/

function isConnected() {
    token = localStorage.getItem("token")
    if (token !== null) {
        return true
    }
    else {
        return false
    }

}
/********** affiche bouton modifier**********/
displayBoutonModif()

/********** affiche modal galerie**********/
const btnModifier = document.querySelectorAll(".btn_modif")

for (const btn of btnModifier) {
    btn.addEventListener("click", () => {
        const modal = document.querySelector(".modal")
        modal.style.display = "flex"
        afficherModalProjects(projects)
    })
}

function displayBoutonModif() {

    const Article = document.querySelector("article")
    const Figure = document.querySelector("figure")
    const portfolioTitle = document.querySelector(".portfolioTitle")

    isConnected()
    if (isConnected() === true) {

        /**********bouton modifier designer d'espace**********/
        let btnArticle = document.createElement("div");
        btnArticle.setAttribute("class", "btn_modif")
        Article.insertAdjacentElement('afterbegin', btnArticle)
        btnArticle.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Modifier`

        /**********bouton modifier image**********/
        let btnFigure = document.createElement("div");
        btnFigure.setAttribute("class", "btn_modif")
        Figure.insertAdjacentElement('beforeend', btnFigure)
        btnFigure.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Modifier`

        /**********bouton modifier mes projets**********/
        let btnportfolioTitle = document.createElement("div");
        btnportfolioTitle.setAttribute("class", "btn_modif")
        portfolioTitle.insertAdjacentElement('beforeend', btnportfolioTitle)
        btnportfolioTitle.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> Modifier`

    }

}

/********** MODAL **********/

const modalGalerie = document.querySelector("#modal_galerie")
const modalAjoutPhoto = document.querySelector("#modal_ajout-photo")

const modals = document.querySelectorAll(".modal")
const modalContainers = document.querySelectorAll(".modal_container")

const closeXmarks = document.querySelectorAll(".fa-xmark")

const inputAjoutPhoto = document.querySelector(".modal_input_ajouter")


/********** ferme modal au click à l'exterieur de la modal**********/
for (const modal of modals) {
    modal.addEventListener("click", (e) => {
        closeModal()
    })
}

for (const modalContainer of modalContainers) {
    modalContainer.addEventListener("click", (e) => {
        e.stopPropagation()
    })
}
/********** ferme modal sur la croix**********/
for (const closeXmark of closeXmarks) {
    closeXmark.addEventListener("click", (e) => {
        e.stopPropagation()
        closeModal()
    })
}



function closeModal() {
    for (const modal of modals) {
        modal.style.display = "none"
    }
}

/********** open modal ajout photo (seconde modal)**********/
inputAjoutPhoto.addEventListener("click", (e) => {
    e.stopPropagation()
    openModalAjout()
})

function openModalAjout() {
    modalGalerie.style.display = "none"
    modalAjoutPhoto.style.display = "flex"
}

/********** return modal galerie **********/
const returnArrow = document.querySelector(".fa-arrow-left")

returnArrow.addEventListener("click", (e) => {
    e.stopPropagation()
    returnModalGalerie()
})

function returnModalGalerie() {
    modalAjoutPhoto.style.display = "none"
    modalGalerie.style.display = "flex"
}


