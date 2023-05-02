
const email = document.querySelector("form input[type='email']")
const password = document.querySelector("form input[type='password']")
const connexion = document.querySelector("form input[type='submit']")


connexion.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(email.value);
  //console.log(password.value);

  fetch("http://localhost:5678/api/users/login", {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then(function (response) {
      if (response.ok) {
        //console.log(response)
        return response.json();
      }
    })
    .then(function (data) {
      //console.log(data)
      if (data == undefined) {
        errorMessage();
      } else {
        tokenRegister(data)
        window.location.href = "../index.html"
         /*opens the target page while Id & password matches*/
      }

    })
  /*.catch(function(err) {
    // Affiche une erreur est survenue
    return alert("une erreur est survenue.")
  });*/

})


function errorMessage() {
  const alertMessage = `<p class="alertMessage" >Le nom d'utilisateur ou le mot de passe est incorrect.</p>`;
  email.insertAdjacentHTML("beforebegin", alertMessage)
 /*displays error message*/

}

function tokenRegister(data) {
  localStorage.setItem('token', data.token)
}






