//mensagem de cadastro
const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

//message

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);
