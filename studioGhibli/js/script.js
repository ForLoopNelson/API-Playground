// document.querySelector("button").addEventListener("click", getMovie);

// function getMovie() {
//   const url = "https://ghibliapi.herokuapp.com/films";
//   const choice = document.querySelector("input").value.toLowerCase();

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       let idx = data.filter((el) => el.title).indexOf(`${choice}`);
//       if (idx != -1) {
//         id = data[idx].id;
//         return fetch(`${url}/${id}`);
//       } else return;
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("img").src = data.image;
//       document.querySelector("h1").innerText = data.title;
//       document.querySelector("h3").innerText = data.description;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i += 1) {
      console.log(data[i].title);
      document.querySelector("h1").innerText = data[0].title;
      document.querySelector("img").src = data[0].image;
      document.querySelector("h3").innerText = data[0].description;
    }
  });
