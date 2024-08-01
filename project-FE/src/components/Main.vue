<script setup>
import { nextTick, reactive, ref } from "vue";
import NotFoundLocation from './NotFoundLocation.vue'
const data = ref(null)

fetch()

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
