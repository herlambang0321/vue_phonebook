import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons free-solid*/
import { faUserPlus, faBan, faMagnifyingGlass, faRotateLeft, faPencil, faTrashCan, faRepeat } from '@fortawesome/free-solid-svg-icons'

/* import specific icons free-regular*/
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserPlus, faCircleCheck, faBan, faMagnifyingGlass, faRotateLeft, faPencil, faTrashCan, faRepeat)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
