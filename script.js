
 const shouldIcomplain = (temp) => {
    if (temp > 75 && temp < 90){
        complaint.innerText = "Yes, You Should Complain. You can say 'It's so hot today I'm melting'"
    }else if (temp < 65) {
        complaint.innerText = "Obviously, it's insane how freezing it is! You can say 'It's too cold today. Maybe I'll build a fire, later?!'"
    }else if(temp >= 90) {
        complaint.innerText = "There is only one way to describe today... OPPRESSIVE! You can complain ALL.DAMN.DAY!"
    }else
        complaint.innerText = "The temp is just right, there is nothing to complain about. Have an amazing day."
}




// define the things we need first
const submitBtn = document.querySelector("button");
const inputBox = document.querySelector("input");
const feels_like = document.getElementById("feels_like"); 
const main_temp = document.getElementById('main_temp');
const city_name = document.getElementById("city_name");
const description = document.getElementById("description");
const icon = document.getElementById("icon")
const complaint = document.getElementById("complaint") 

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputBox.value)
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=6e86f07e6a527b2d96ba64943b460f2e
    `)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        city_name.innerText = "Your Chosen City: " + data.name
        main_temp.innerText = "The Temp: " + (Math.round(data.main.temp));
        feels_like.innerText = "And it Feels like: " + (Math.round(data.main.feels_like));
        description.innerText = "And The Condiditons Outside Are: " + data.weather[0].description;
        icon.innerHTML= "<a href 'http://openweathermap.org/img/w/${data.weather[0].icon}.png`" ;
        shouldIcomplain(data.main.temp)

    })

        
      
    .catch((err) => console.log(err));
    })