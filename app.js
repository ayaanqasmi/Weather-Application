const apiKey="cdbf2f2d85bd17535b6668dd2b5201de";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
let error=false;
async function checkWeather(city){
    const response=await fetch(apiURL+city+"&appid="+apiKey);
    if (response.status==404){
        document.querySelector(".error-msg").style.display="block";
        document.querySelector(".weather-display").style.display="none";
        error=true;
        
    }
    else{error=false;}


    let data=await response.json();

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML+="°c";
    document.querySelector(".city").innerHTML=data.name;
    
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".humidity").innerHTML+="%";
    
    document.querySelector(".wind").innerHTML=data.wind.speed;
    document.querySelector(".wind").innerHTML+="kph";

    document.querySelector(".weather-display img").src="images/"+data.weather[0].main+".png";

    document.querySelector(".error-msg").style.display="none";
    document.querySelector(".weather-display").style.display="block";
}


searchButton.onclick=function(){
    checkWeather(searchInput.value);
}
document.addEventListener("keypress",()=>{
 if(event.key=="Enter"){
    searchButton.click();
 }
})

