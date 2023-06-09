const passwordDisplay = document.querySelector("#password-display")
const createPasswordButton = document.getElementById("start-button")

createPasswordButton.addEventListener("click", (e) => {
  e.preventDefault
  const name = prompt("digita il tuo nome")
  const surname = prompt("digita il tuo cognome")
  const favoriteColor = prompt("digita il tuo colore preferito")

  const nameNospace = name.replace(" ", "")
  const surnameNospace = surname.replace(" ", "")
  const favoriteColorNospace = favoriteColor.replace(" ", "")

  passwordDisplay.innerText = `${nameNospace}${surnameNospace}${favoriteColorNospace}101`
})
