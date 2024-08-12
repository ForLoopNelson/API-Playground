// let req = new XMLHttpRequest();
// let url = "https://api.nasa.gov/planetary/apod?api_key=";
// let api_key = "fZo2Y3dHpvvMywGDG6jtpQ5GFhVEegRjFvnHbenj";

// req.open("GET", url + api_key);
// req.send();

// req
//   .addEventListener("load", function () {
//     if (req.status == 200 && req.readyState == 4) {
//       let response = JSON.parse(req.responseText);
//       document.querySelector("h2").textContent = response.title;
//       document.querySelector("input").input = response.date;
//       document.querySelector("img").src = response.hdurl;
//       document.querySelector("p").textContent = response.explanation;
//     }
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=fZo2Y3dHpvvMywGDG6jtpQ5GFhVEegRjFvnHbenj&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
      }
      document.querySelector("h2").textContent = data.title;

      document.querySelector("p").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
