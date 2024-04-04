let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description')
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit'  ,(event) => {
    if(valueSearch.value != ''){
        searchWeather();
    }
})
let id = '285413d9b1ffd3cc543c8874d1c21d77';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').scr='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';

            temperature.querySelector('img').scr='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }else{
            //false
            main.classList.add('error');
            setTimeout(() =>{
                main.classList.remove('error');
            }, 1000);

        }

        valueSearch.value = '';
    })
}
const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();