/////////////RECUPERATION DES PROJETS/////////////
const projetsApi = fetch('http://localhost:5678/api/works')
  .then(function (response) {
    if (response.ok) {
      //console.log(response)
      return response.json();
    }
  })
  .then(function (data) {
    //console.log(data)
    projects = data
    projectsFiltered = data
    /**********Affiche projets page index**********/
    afficherProjects()
    /**********afficher projets modal**********/
    afficherModalProjects()
  })
/*.catch(function(err) {
  // Affiche une erreur est survenue
  return alert("une erreur est survenue.")
});*/

/////////////AFFICHAGE DES PROJETS/////////////

/**********projets page index**********/
const gallery = document.querySelector(".gallery")
const figure = document.getElementsByTagName("figure")

function afficherProjects() {

  //supprime les travaux avant d'afficher ceux selectionner, evite les doublons//
  document.querySelector(".gallery").innerHTML = ''

  for (let project of projects) {
    let figure = document.createElement("figure");
    gallery.appendChild(figure)

    let image = document.createElement("img")
    image.setAttribute("src", project.imageUrl)
    image.setAttribute("alt", project.title)
    image.setAttribute("crossorigin", "anonymous")
    figure.appendChild(image)

    let figcap = document.createElement("figcaption");
    figcap.innerText = project.title
    figure.appendChild(figcap)

  }
}

function afficherProjectsFiltered() {

  //supprime les travaux avant d'afficher ceux selectionner, evite les doublons//
  document.querySelector(".gallery").innerHTML = ''

  for (let project of projectsFiltered) {
    let figure = document.createElement("figure");
    gallery.appendChild(figure)

    let image = document.createElement("img")
    image.setAttribute("src", project.imageUrl)
    image.setAttribute("alt", project.title)
    image.setAttribute("crossorigin", "anonymous")
    figure.appendChild(image)

    let figcap = document.createElement("figcaption");
    figcap.innerText = project.title
    figure.appendChild(figcap)

  }
}



/////////////MENU DE SELECTION DES PROJETS/////////////

const boutonTous = document.querySelector(".btn_Tous");
const boutonObjets = document.querySelector(".btn_Objets");
const boutonAppartements = document.querySelector(".btn_Appartements")
const boutonHotelsRestaurants = document.querySelector(".btn_Hotels-restaurants")

const btn_filters = document.querySelectorAll(".btn_filter")



for (const btn of btn_filters) {
  btn.addEventListener("click", () => {
    const getValue = btn.getAttribute("value");

    if (getValue === "Tous") {
      projectsFiltered = projects
    
    }
    else {
      projectsFiltered = projects.filter(function (projet) {
        return projet.category.name === getValue;
      })
     
    }
    afficherProjectsFiltered()
    //console.log(projectsFiltered)
  })


}







