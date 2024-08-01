import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMagnifyingGlass, faLocationDot)
createApp(App).
    component("font-awesome-icon",FontAwesomeIcon)
    .mount('#app')
