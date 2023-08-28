let button = document.querySelector(".meme-generator .generate-meme-btn");
let title = document.querySelector(".meme-generator .meme-title");
let imgMemes = document.querySelector(" .meme-generator img");
let author1 = document.querySelector(".meme-generator .meme-author");

function showTheMems(url, title, author) {
  imgMemes.setAttribute("src", url);
  title.innerHTML = title;
  author1.innerHTML = `Meme by: ${author}`;
}
// fetch("https://meme-api.com/gimme/wholesomememes")
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     showTheMems(data.url, data.title, data.author);
//   });
// async function generateMeme() {
//   let data = await fetch("https://meme-api.com/gimme/wholesomememes");
//   let jsonText = await data.json();
//   console.log(jsonText.author);
//   showTheMems(jsonText.url, jsonText.title, jsonText.author);
// }
//  button.addEventListener("click", generateMeme);
function getData() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      showTheMems(data.url, data.title, data.author);
    });
}
button.addEventListener("click", getData);
