$(document).ready(function(){

    new Typed('.effect',{

      strings : ["Get weather updates easier and anywhere from here.....","GIVE A TRY!!!!!"],

      smartBackspace : true,

      loop : true,

      typeSpeed : 60,

      backSpeed : 40,

      startDelay : 80,
    })

    $('#ip-location').on('keyup',function(e){
        
        var cityName = e.target.value;

        const APIKEY = "17e9a55a22d9c41dbe248147e543063a";

        $.ajax({
            
            url : `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`
        
        }).done(function(data){

            console.log(data);
            
            $('#profile').html(`
            
            <div class="container mx-auto mb-5">
            
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">City : ${cityName}</h5>
            <img class="card-img-top" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Weather : ${data.weather[0].description}</h5>
              <p class="card-text">Actual Temperature : ${data.main.temp}&#8451</p>
              <p class="card-text">Temperature feels like : ${data.main.feels_like}&#8451</p>
              <a href="https://www.google.com/search?q=${cityName}" target="_blank" class="btn btn-secondary">To learn more about this city</a>
            </div>
          </div>
            
            </div>
            
            `)
        })
    })
})