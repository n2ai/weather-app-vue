<script setup>
import { ref } from 'vue';
import FoundLocation from './FoundLocation.vue';
import NotFoundLocation from './NotFoundLocation.vue';

const weatherData = ref(null);
const foundData = ref(false);
const city = ref('')
const onChangeInput = (event)=>{
    city.value = event.target.value
}

const fetchWeatherData = async () => {
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    weatherData.value = data;
    foundData.value = true;
    console.log(weatherData)
  } catch (err) {
    foundData.value = false;
    console.error('Error fetching weather data:', err);
  }
};
</script>

<template>
    <div class="weather_card">
        <div class="container"> 
            <div class="weather_card_search"> 
                <font-awesome-icon icon="location-dot"/>
                <input @input="onChangeInput" class="search_bar" placeholder="Enter your location"/>
                <button @click="fetchWeatherData" type="button" class="search_button">
                    <font-awesome-icon icon="magnifying-glass" />
                </button>
            </div>  
        </div>
        

        <div class="container">
            <!-- <NotFoundLocation></NotFoundLocation> -->

            <FoundLocation
                v-if="foundData"
                :condition="weatherData.weather[0].main"
                :description="weatherData.weather[0].description"
                :temperature="weatherData.main.temp"
            />
            <NotFoundLocation v-else />
        </div>

        <div v-if="foundData" class="container weather_attributes"> 
            <div class="weather_humidity"> 
                <div>
                    <p>Humidity</p>
                </div>

                <div>
                     <p>{{ weatherData.main.humidity }}</p>
                     <font-awesome-icon icon="temperature-0" />
                </div>
            </div>

            <div class="weather_wind">
                <div>
                    <p>Wind Speed</p>
                </div>

                <div>
                     <p>{{ weatherData.wind.speed }}</p>
                     <font-awesome-icon icon="temperature-0" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.weather_attributes{
    font-size: 14px;
}

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

.search_button{
    width: 25px;
    height: 25px;
    border:none;
    padding: none;
    cursor: pointer;
    background: none;
}
</style>
