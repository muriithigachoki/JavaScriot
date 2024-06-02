const mainContainer = document.createElement("div");
mainContainer.style.width = "900px";
mainContainer.style.height = "350px";
mainContainer.style.display = "grid";
mainContainer.style.alignItems = "start";
mainContainer.style.border = "1px solid";
document.body.appendChild(mainContainer);

const mainContainer1 = document.createElement("div");
mainContainer1.style.display = "flex";
mainContainer1.style.justifyContent = "space-between";
mainContainer1.style.alignItems = "start";
mainContainer.appendChild(mainContainer1);

const divContainer = document.createElement("div");
divContainer.style.width = "900px";
divContainer.style.display = "grid";
divContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
divContainer.style.alignItems = "start";
mainContainer.appendChild(divContainer);

const icons = "04n";
iconsApiUrl = `https://openweathermap.org/img/wn/${icons}.png`;

async function fetchData(url) {
  return await fetch(url)
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

async function fetchWeatherIn5days(url) {
  return await fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("network error", res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

function SearchCity(event) {
  event.preventDefault();
  const data = document.querySelector("#data");
  const cityInput = data.value || "nyahururu";

  weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput}&appid=${token}`;
  console.log(cityInput);
  fetchData(weatherApiUrl).then((data) => {
    console.log(data);
    const lon = data.coord.lon;
    const lat = data.coord.lat;

    const apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}`;

    fetchWeatherIn5days(apiurl).then((data) => {
      console.log(data);
      const weatherArr = [];
      data.list.map((Obj) => {
        const time = Obj.dt_txt.split(" ")[1];
        if (time === "12:00:00") {
          weatherArr.push(Obj);
        }
      });
      weatherArr.map((weatherObj) => {
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const dateStr = weatherObj.dt_txt;
        const date = new Date(dateStr);
        const dayName = daysOfWeek[date.getDay()];
        console.log(dayName);
        const index = weatherArr.indexOf(weatherObj);

        const temp = weatherObj.main.temp - 273;
        if (index === 0) {
          weatherObj.weather.map((data) => {
            console.log(data.icon);
            const lightRain = document.createElement("img");
            lightRain.src = `https://openweathermap.org/img/wn/${data.icon}.png`;
            lightRain.style.width = "200px";
            lightRain.style.height = "200px";
            mainContainer1.appendChild(lightRain);

            const mainContainer2 = document.createElement("div");
            mainContainer1.appendChild(mainContainer2);

            const city = document.createElement("h2");
            city.textContent = `${cityInput}`;
            mainContainer2.appendChild(city);
            const temperature = document.createElement("h2");
            temperature.textContent = `Temperature: ${temp.toFixed(2)}\u00B0C`;
            mainContainer2.appendChild(temperature);
            const description = document.createElement("h2");
            description.textContent = `${data.description}`;
            mainContainer2.appendChild(description);
          });
        } else {
          weatherObj.weather.map((data) => {
            console.log(data.icon);
            const mainContainer3 = document.createElement("div");
            mainContainer3.style.border = "2px solid";
            mainContainer3.style.height = "300px";
            divContainer.appendChild(mainContainer3);

            const para = document.createElement("P");
            para.textContent = dayName;
            para.style.fontSize = "30px";
            para.style.margin = "0px";
            para.style.color = "white";
            mainContainer3.appendChild(para);

            const lightRain = document.createElement("img");
            lightRain.src = `https://openweathermap.org/img/wn/${data.icon}.png`;
            lightRain.style.width = "200px";
            lightRain.style.height = "200px";
            lightRain.style.border = "5px";
            mainContainer3.appendChild(lightRain);

            const mainContainer4 = document.createElement("div");
            mainContainer4.style.display = "flex";
            mainContainer4.style.width = "200px";
            mainContainer4.style.height = "200px";
            mainContainer4.style.gap = "5px";
            mainContainer3.appendChild(mainContainer4);

            const temperature = document.createElement("h2");
            temperature.textContent = `${temp.toFixed(2)}\u00B0C`;
            mainContainer4.appendChild(temperature);
          });
        }
      });
    });
  });
}

SearchCity();
