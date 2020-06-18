let city1 = document.getElementById("malmo");
city1.addEventListener("click", onMyButtonClick);
let city2 = document.getElementById("kiruna");
city2.addEventListener("click", onMyButtonClick);
let city3 = document.getElementById("sthlm");
city3.addEventListener("click", onMyButtonClick);
let cityy = document.getElementById("city");
cityy.addEventListener("click", onMyButtonClick);
let results = document.getElementById("result");
results.addEventListener("click", onMyButtonClick);

const API_KEY = "e1dc2085d5a9112b2579772c4e3637ba";
const malmo = `https://api.openweathermap.org/data/2.5/weather?q=malmo,sweden&units=metric&appid=e1dc2085d5a9112b2579772c4e3637ba`;
const kiruna = `https://api.openweathermap.org/data/2.5/weather?q=kiruna,sweden&units=metric&appid=e1dc2085d5a9112b2579772c4e3637ba`;
const sthlm = `https://api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&units=metric&appid=e1dc2085d5a9112b2579772c4e3637ba`;


function onMyButtonClick(event) {
    if (this.id == "malmo"){
        axios({
            url: malmo,
            method: 'get'
          })
        
          ;(async () => {
                const response = await axios({
                  url: malmo,
                  method: 'get'
                })
          
            console.log(response)
            document.getElementById("result").innerHTML = 'Malmö: Temperaturen är '+response.data.main.temp;
          })()
        
        
          ;(async () => {
            const response = await axios.get(malmo)
            console.log(response)
          })()
    }

    else if (this.id == "kiruna"){
        axios({
            url: kiruna,
            method: 'get'
          })

        
          ;(async () => {
                const response = await axios({
                  url: kiruna,
                  method: 'get'
                })
          
         
        
          console.log(response)
          document.getElementById("result").innerHTML = 'Kiruna: Temperaturen är '+response.data.main.temp;
            })()

          ;(async () => {
            const response = await axios.get(kiruna)
            console.log(response)
          })()
    }
    else if (this.id == "sthlm"){
        axios({
            url: sthlm,
            method: 'get'
          })
        
          ;(async () => {
                const response = await axios({
                  url: sthlm,
                  method: 'get'
                })
   
          console.log(response)
          document.getElementById("result").innerHTML = 'Stockholm: Temperaturen är '+response.data.main.temp;
        })()
        
          ;(async () => {
            const response = await axios.get(sthlm)
            console.log(response)
          })()
    }
   
}

  

// $.ajax({
//     url:' http://api.sr.se/api/v2/channels'+number+'?firstName='+firstName+'&amp&lastName='+lastName+category+'',
//     dataType: 'JSON'
// }).done(function(data) {
//     var i;
//     for (i = 0; i < number; i++){
//         $("#joke").append(
//                 data.value[i].joke+'</br></br>'
//                 );
//             $("#joke").fadeIn();
//     }



