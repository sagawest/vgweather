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

var tempmin = 0.00;
var tempmax = 0.00;
var tempnow = 0.00;


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
            document.getElementById("result").innerHTML = 'Malmö: Temperaturen just nu är '+response.data.main.temp;
            tempmax = response.data.main.temp_max;
            tempmin = response.data.main.temp_min;
            tempnow = response.data.main.temp;
            drawChart();
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
          document.getElementById("result").innerHTML = 'Kiruna: Temperaturen just nu är '+response.data.main.temp;
          tempmax = response.data.main.temp_max;
          tempmin = response.data.main.temp_min;
          tempnow = response.data.main.temp;
          drawChart();
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
          document.getElementById("result").innerHTML = 'Stockholm: Temperaturen just nu är '+response.data.main.temp;
          tempmax = response.data.main.temp_max;
          tempmin = response.data.main.temp_min;
          tempnow = response.data.main.temp;
          drawChart();
        })()
        
          ;(async () => {
            const response = await axios.get(sthlm)
            console.log(response)
          })()
    }

}


function drawChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'bar',
  
      // The data for our dataset
      data: {
          labels: ['Min temp', 'Temp now', 'Max temp'],
          datasets: [{
              label: 'Väder graf',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [tempmin, tempnow, tempmax]
          }]
      },
  
      // Configuration options go here
      options: {
        scales: {
          yAxes:[{
          ticks: {
              min: 5,
              // stepSize: 0.1
            }
          }]
        }
      }
  });
}
  


