let wannalaugh = document.getElementById("wannalaugh");
let modelJoke = document.getElementById("modelJoke");

wannalaugh.addEventListener("click", (event) => {
    getJoke();
});

async function getJoke() {
  try {
    // make a request to the api
    let response = await fetch(`https://icanhazdadjoke.com/`);

    // get the response from the api
      data = await response.json();
      console.log(data.joke);
      let para = document.createElement("p");
      para.innerHTML = `${data.joke}`;
      modelJoke.replaceChild(para, modelJoke.childNodes[0]);
  } catch (error) {}
}