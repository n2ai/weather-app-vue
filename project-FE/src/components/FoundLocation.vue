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
    
    switch(weatherCondition){
        case "Clear":
            return ClearImg
        case "Cloud":
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
        <div>
            img section
            <img :src="imgUrl(condition)">
        </div>

        <div>  
            temp section
        </div>
            
        <div> 
            description
        </div>
    </div>
</template>

<style scoped>

</style>