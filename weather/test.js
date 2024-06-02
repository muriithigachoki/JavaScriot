const cityInput = "nairobi";
const token = "f4796f4e2587bfb544e3e0504040dc72";

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
const icons = "04n";
let lat = 0.0421;
let lon = 36.3673;
iconsApiUrl = `https://openweathermap.org/img/wn/${icons}.png`;

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
    console.log(weatherObj);
    const index = weatherArr.indexOf(weatherObj);
    console.log(index);
  });
});
