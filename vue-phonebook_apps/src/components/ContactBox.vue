<script setup>
import ContactList from "./ContactList.vue";
import ContactForm from "./ContactForm.vue";
import ContactSearch from "./ContactSearch.vue";
import { useContactStore } from '../stores/contact';
import { ref } from "vue"

const Contact = useContactStore()

const vLoadContact = {
    beforeMount: () => {
        Contact.loadItem()
    }
}

const showAdd = ref(false)

const showAddContact = () => {
    showAdd.value = true
}

const hiddenAddContact = () => {
    showAdd.value = false
}
</script>

<template>
    <div class="container-contact">
        <div class="card">
            <div class="card-header text-center">
                <h1>Phone Book Apps</h1>
            </div>
            <div v-if="showAdd">
                <div class="card-body">
                    <ContactForm @cancel="hiddenAddContact" @createContact="Contact.addItem" />
                </div>
            </div>
            <div v-else>
                <div class="card-body md-2">
                    <button type="submit" class="btn btn-primary" @click="showAddContact"><font-awesome-icon
                            icon="fa-solid fa-plus" /> Add</button>
                </div>
            </div>
            <div class="card-body py-0">
                <ContactSearch @searchContact="Contact.searchItem" />
            </div>
            <ContactList v-load-contact :contacts="Contact.rawItems" />
        </div>
    </div>
</template>

<style scoped>
.container-contact {
    margin: 10px;
}
</style>