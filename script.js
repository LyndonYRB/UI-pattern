const url = 'https://kitsu.io/api/edge/manga'


let firstManga = document.querySelector("#manga-one")
let secondManga = document.querySelector("#manga-two")
let thirdManga = document.querySelector("#manga-three")
let fourthManga = document.querySelector("#manga-four")
let fifthManga = document.querySelector("#manga-five")
let sixthManga = document.querySelector("#manga-six")

let mangaPic = document.querySelector(".manga-cover")

let buttons = document.querySelectorAll(".header");
let articles = document.querySelectorAll(".article");


fetch(url)
  .then(res => res.json())
  .then(res => {
  
    let firstDescription = document.createElement('p');
    firstDescription.innerHTML = res.data[0].attributes.description;
    firstManga.appendChild(firstDescription);
    
    

    let secondDescription = document.createElement('p');
    secondDescription.innerHTML = res.data[1].attributes.description;
    secondManga.appendChild(secondDescription);

    let thirdDescription = document.createElement('p');
    thirdDescription.innerHTML = res.data[3].attributes.description;
    thirdManga.appendChild(thirdDescription);

    let fourthDescription = document.createElement('p');
    fourthDescription.innerHTML = res.data[7].attributes.description;
    fourthManga.appendChild(fourthDescription);

    let fifthDescription = document.createElement('p');
    fifthDescription.innerHTML = res.data[6].attributes.description;
    fifthManga.appendChild(fifthDescription);

    let sixthDescription = document.createElement('p');
    sixthDescription.innerHTML = res.data[5].attributes.description;
    sixthManga.appendChild(sixthDescription);
})

  .catch(err => console.log("err", err))
    
  buttons.forEach((button, i) => {
    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      let currentClass = articles[i];
      articles.forEach((article) => {
        article.classList.remove("active");
      });
      currentClass.classList.add("active");
    });
  });


    

