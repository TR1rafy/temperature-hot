const submitBtn= document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
    const inputBtn= document.getElementById('input-btn').value;
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=3084d18f9be14d5078c2cda45e0dcc45')
    .then(Response=>Response.json()
    .then(data=> {
    const cityName= data.name;
    const tem = data.main.temp;
     const temp= tem-273.15;
    const description= data.weather[0].description;

    document.getElementById('city').innerText=cityName;
    document.getElementById('temp').innerText=temp.toFixed(2);
    document.getElementById('lead').innerText= description;

    }))
    
})