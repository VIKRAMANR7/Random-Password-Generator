let slider = document.getElementById("myRange");
let slideCount = document.querySelector(".slidecount");
let copyIcon = document.querySelector(".fa-copy");
let passwordVal = document.querySelector(".password");
let reloadPasswordIcon = document.querySelector(".fa-repeat");

slider.addEventListener("input", () => {
  slideCount.innerHTML = slider.value;
  generatePassword();
});
function generatePassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-{}[]|?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = slider.value;
  let password = "";
  for (let i = 1; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordVal.value = password;
  return password;
}
reloadPasswordIcon.addEventListener("click", () => {
  slideCount.innerHTML = slider.value;
  generatePassword();
});

copyIcon.addEventListener("click", () => {
  let copiedVal = passwordVal.value;
  copyPassword(copiedVal);
});

async function copyPassword(copiedVal) {
  try {
    await navigator.clipboard.writeText(copiedVal);
    alert("Text copied to clipboard");
  } catch (err) {
    alert("Error in copying text: ", err);
  }
}
