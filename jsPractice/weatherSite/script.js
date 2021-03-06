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
            
            <div class="conatiner mx-auto">

        <div class="row justify-content-center align-content-between">
            <div class="col-lg-4 col-md-12">

                <div class="card m-auto" style="width: 18rem;">
                    <h5 class="card-title">City : ${cityName}</h5>
                    <img class="card-img-top" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                        alt="Card image cap">
                    <div class="card-body">

                        <p class="card-text">Longitude : ${data.coord.lon}&#8451</p>

                        <p class="card-text">Lattitude : ${data.coord.lat}&#8451</p>

                        <h5 class="card-title">Weather : ${data.weather[0].description}</h5>

                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card m-auto" style="max-width: 18rem;">
                            <div class="card-body text-dark">
                                <h5 class="card-title">Temperature</h5>
                                <p class="card-text">Actual Temperature : ${data.main.temp}&#8451</p>
                                <p class="card-text">Minimum Temperature : ${data.main.temp_min}&#8451</p>
                                <p class="card-text">Maximum Temperature : ${data.main.temp_max}&#8451</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card m-auto" style="max-width: 18rem;">
                            <div class="card-body text-dark">
                                <h5 class="card-title">Wind and Humidity</h5>
                                <p class="card-text">Wind Speed : ${data.wind.speed}</p>
                                <p class="card-text">Wind Angle : ${data.wind.deg} degrees</p>
                                <p class="card-text">Humidity: ${data.main.humidity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
            
            `)
        })
    })
})