<script setup>
import { nextTick, onMounted, reactive, ref, TrackOpTypes } from "vue";
import NotFoundLocation from './NotFoundLocation.vue'
import FoundLocation from './FoundLocation.vue'
const data = ref(null)

const weatherData = ref(null)
const foundData = ref(false)

const fetchWeatherData = async ()=>{
    const apiKey = import.meta.env.VITE_WEATHER_API
    const city = "Berlin"
    //Will get back later
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    // try{
    //     const response = await fetch(url)
    //     if(!response.ok){
    //         throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     weatherData.value = data
    //     foundData.value = true

    //     //Get Temperature:
    //     //weatherData.value.main.temp

    //     //Get Condition:
    //     //weatherData.value.weather[0].main

    //     //Get wind speed:
    //     //weatherData.value.wind.speed

    //     //Get Humidity:
    //     //weatherData.value.main.humidity
    //     console.log(weatherData.value)
    // }catch(err){
    //     foundData.value = false
    //     console.log(err)
    // }
}

onMounted(()=>{
    fetchWeatherData()
})

</script>

<template>
    <div class="weather_card">
        <div class="container"> 
            <div class="weather_card_search"> 
                <font-awesome-icon icon="location-dot"/>
                <input class="search_bar" placeholder="Enter your location"/>
                <font-awesome-icon icon="magnifying-glass" />
            </div>
        </div>
        

        <div class="container">
            <!-- <NotFoundLocation></NotFoundLocation> -->
             <FoundLocation condition="Cloud" ></FoundLocation>
        </div>

        <div class="container weather_attributes"> 
            <div> 
                Humidity
            </div>

            <div>
                Wind Speed
            </div>
        </div>
    </div>
</template>

<style scoped>
.weather_card{
    width: 350px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    border-style: solid;
    border-width: thin;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search_bar{
    border:none;
    outline: none;
    margin-left: 10px;
    margin-right: 10px;
}

.weather_card_search{
    border-radius: 5px;
    border-style: solid;
    border-width: thin;
    padding: 10px;
}
</style>
