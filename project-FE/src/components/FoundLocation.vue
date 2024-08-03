<script setup>
import ClearImg from '../../images/clear.png'
import CloudImg from '../../images/cloud.png'
import MistImg from '../../images/mist.png'
import SnowImg from '../../images/snow.png'
import RainImg from '../../images/rain.png'
const props = defineProps({
    condition:String,
    description:String,
    temperature:Number
})

const imgUrl = (weatherCondition)=>{
    console.log(weatherCondition)
    switch(weatherCondition){
        case "Clear":
            return ClearImg
        case "Clouds":
            return CloudImg
        case "Mist":
            return MistImg  
        case "Snow":
            return SnowImg
        case "Rain":
            return RainImg
    }
}


</script>

<template>
    <div class="weather_contents">
        <div class="weather_img_container">
            <img class="weather_img" :src="imgUrl(condition)">
        </div>

        <div class="weather_temp_container">  
            <h1 class="weather_temp">{{ `${temperature}${'&#8451;'}` }}</h1>
        </div>
            
        <div class="weather_desc_container"> 
            <p class="weather_desc">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.weather_img{
    width: 150px;
    height: 150px;
}

.weather_temp_container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.weather_desc_container{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>