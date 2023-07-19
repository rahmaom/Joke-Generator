const apiKey = "Nijyd+jB9ZgIOvZmwH5MLQ==KbndfGYhF6SuC8pQ";
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";
const joke = document.getElementById("joke");
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
btn.addEventListener("click", async () => {
  try {
    //   console.log("Clicked");
    joke.innerText = "updating";
    btn.disabled = true;
    btn.innerText = "loading";
    const res = await fetch(apiURL, options);
    const data = await res.json();
    joke.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "Another one";
  } catch (error) {
    joke.innerText = "An error occurred, try again later.";
    btn.disabled = false;
    btn.innerText = "Tell me a Joke";
    console.log(error);
  }
});
