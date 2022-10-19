const container=document.querySelector(".container");
const signUpBtn=document.querySelector(".green-bg button");

signUpBtn.addEventListener('click', () => {
   console.log("clicked");
   container.classList.toggle("change");
});