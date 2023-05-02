const addImage = document.querySelector(".modal_add_form #add_project_image")
const addTitle = document.querySelector(".modal_add_form #add_project_title")
const addCategorie = document.querySelector(".modal_add_form #add_project_cat")
const addProjectValid = document.querySelector(".modal_add_form input[type='submit']")


addProjectValid.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation()
    const modal_add_form = document.querySelector(".modal_add_form")
    const formData = new FormData(modal_add_form);

    const addImage = document.querySelector(".modal_add_form #add_project_image")

    formData.append("image", addImage.files[0]);
    
    if ( (addImage.validity.valueMissing === false) && ( addTitle.validity.valueMissing === false) && ( addCategorie.validity.valueMissing === false) ) {
    fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("token"),
            
        },
        body: formData,

    })
        .then(function (response) {
            if (response.ok) {
                //console.log(response)
                return response.json();
            }
        })
        .then(function (data) {
           
            projects.push(data)          
            
            /**********Affiche projets page index actualisé**********/
            afficherProjects()
            /**********afficher projets modal actualisé**********/
            afficherModalProjects()

    })
}
else {
    return alert("Vous devez remplir tous les champs avant de valider.")
}

})


/**********affichage image miniature dans l'input d'upload**********/

addImage.addEventListener("change", (e) => {
    afficherInputImage(e)
    changeColorInput()
})
addTitle.addEventListener("change", (e) => {
    changeColorInput()
})
addCategorie.addEventListener("change", (e) => {
    changeColorInput()
})


function afficherInputImage(e) {
    const btnContainer = document.querySelector(".modal_add_form .input_add_photo_bouton_container")
    const p = document.querySelector(".modal_add_form .input_add_photo p")
    /////cache l'input image//////
    btnContainer.style.visibility = "hidden"
    p.style.visibility = "hidden"
    

    //////Affiche l'image chargé//////
    let image = document.querySelector(".modal_add_form .input_add_photo .uploadedImage")
    image.style.display = "flex"
    image.setAttribute("src", URL.createObjectURL(e.target.files[0]))
    image.setAttribute("crossorigin", "anonymous")
    
}

/**********changement de couleur du bouton add image submit**********/


changeColorInput()



function changeColorInput() {

    if ( (addImage.validity.valueMissing === false) && ( addTitle.validity.valueMissing === false) && ( addCategorie.validity.valueMissing === false) ) {
        addProjectValid.style.background = "#1D6154"
    }
    else {
        addProjectValid.style.background = "#A7A7A7"
    }

}

