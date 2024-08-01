<script setup>
import errorImg from '../../images/404.png'
</script>

<template>
    <div class="notFound_container">
        <div class="notFound_header_container"> 
            <h1 class="notFound_header">
                No such location exist
            </h1>
        </div>
        
        <div class="notFound_image_container"> 
            <img :src="errorImg" class="notFound_image"/>
        </div>
        
    
    </div>
</template>

<style scoped>

</style>