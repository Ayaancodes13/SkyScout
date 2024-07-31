const get = document.getElementById("get")
const apikey = ("311ec8fd56d93983218f67f4650169a8")
const input = document.getElementById("enter")
let weather
let myinfo
let val;
let newval
let humiditydis = document.getElementById("humidity")
let tempdis = document.getElementById("temp")
let temp2 = document.getElementById("temp2")
let infodis = document.getElementById("info")
let clear = document.getElementById("clear")
get.onclick = function(){
    val = input.value
    
    getweather(val)
}

async function getweather(){
    try{
    weather = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}`)
    if(!weather.ok){
        val.value="Oops An error occoured"
    }
    myinfo = await(weather).json()
    console.log(myinfo)
    humiditydis.textContent = ""
    tempdis.textContent = ""
    temp2.textContent = ""
    infodis.textContent = ""
    humiditydis.textContent = `Humidity${myinfo.main.humidity}%`
    tempdis.textContent = (myinfo.main.temp -273.15).toFixed(1)+"°C"
    temp2.textContent = ((myinfo.main.temp-273.15)*1.8+32).toFixed(1)+"°F"
    infodis.textContent = `${myinfo.weather[0].description}`



}
catch(error){
    console.log(error);
    input.style.color = "red"
    input.value = ("Something went wrong")
     humiditydis.textContent = ""
    tempdis.textContent = ""
    temp2.textContent = ""
    infodis.textContent = ""
    
}

}
clear.onclick = function(){
    input.value = ""
    input.style.color="black"
    humiditydis.textContent = ""
    tempdis.textContent = ""
    temp2.textContent = ""
    infodis.textContent = ""
}
