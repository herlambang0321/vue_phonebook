<script setup>
import ContactList from "./ContactList.vue";
import ContactForm from "./ContactForm.vue";
import ContactSearch from "./ContactSearch.vue";
import { useContactStore } from '../stores/contact';

const Contact = useContactStore()

const vLoadContact = {
    beforeMount: (el) => {
        Contact.loadItem()
    }
}
</script>

<template>
  <div class="container-contact">
    <div class="card">
        <div class="card-header text-center">
            <h1>Phone Book Apps</h1>
        </div>
        <div class="card-body">
            <ContactForm @createContact="Contact.addItem"/>
        </div>
        <div class="card-body">
            <ContactSearch @searchContact="Contact.searchItem"/>
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