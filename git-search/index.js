const token = "";
async function fetchData(url) {
  return await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      if (!res.ok) {
        throw new Error("network error", res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("there was a problem with fetch operation", error);
    });
}

function userInput(event) {
  event.preventDefault();

  const data = document.querySelector("#data");
  const query = data.value;
  Apiurl = `https://api.github.com/users/${query}`;

  fetchData(Apiurl)
    .then((data) => {
      console.log(data);
      const Image = document.querySelector("#image");
      Image.src = data.avatar_url;
      const Name = document.querySelector("#name");
      Name.textContent = data.name ? data.name : data.login;
      const Repos = document.querySelector("#numberOfRepos");
      Repos.textContent = `${data.public_repos} repos`;
      const location = document.querySelector("#location");
      location.textContent = data.location ? data.location : "No location";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
