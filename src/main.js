import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue"
import BaseCard from "./components/ui/BaseCard.vue"
import CSBS from './components/department/CSBS.vue'
import AIDS from './components/department/AIDS.vue'
import CSE from './components/department/CSE.vue'
import CCE from './components/department/CCE.vue'
import MECH from './components/department/MECH.vue'
import ECE from './components/department/ECE.vue'
import TheFooter from './components/TheFooter.vue'

const app = createApp(App);
app.component('the-header',TheHeader)
app.component('the-footer',TheFooter)
app.component('base-card',BaseCard)
app.component('CSBS',CSBS)
app.component('AIDS',AIDS)
app.component('CSE',CSE)
app.component('CCE',CCE)
app.component('MECH',MECH)
app.component('ECE',ECE)
app.mount("#app");
