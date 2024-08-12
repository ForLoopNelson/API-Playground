document.querySelector("button").addEventListener("click", getMovie)

function getMovie() {
  fetch(`https://ghibliapi.vercel.app/2baf70d1-42bb-4437-b551-e5fed5a87abe`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      data.forEach((el) => {
        console.log(el.title)
        const h1 = document.createElement("h1")
        h1.textContent = el.title
        document.querySelector("h1").appendChild(h1)
      })
    })
}
