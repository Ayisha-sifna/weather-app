const apykey="cadf377e28263583518b70b6f0ee3a2a";
const apyurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const sbox= document.querySelector(".search input");
const sbtn= document.querySelector(".search button");
const wicon= document.querySelector(".w-icon")

async function checkWeather(city){
    const response=await fetch(apyurl +city +`&appid=${apykey}`);
    var data= await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed +"km/h";


    // if(data.weather[0].main==Clouds){
    //     wicon.src="images/clouds.png";

    // }
    // else if(data.weather[0].main==Clear){
    //     wicon.src="images/clear.png";

    // }
    // else if(data.weather[0].main==Rain){
    //     wicon.src="images/rain.png";

    // }
    // else if(data.weather[0].main==Drizzle){
    //     wicon.src="images/drizzle.png";

    // }
    // else if(data.weather[0].main==Mist){
    //     wicon.src="images/mist.png";

    // }
}
sbtn.addEventListener("click",()=>{
    checkWeather(sbox.value);

})
