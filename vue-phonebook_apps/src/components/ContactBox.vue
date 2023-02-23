<script setup>
import ContactList from "./ContactList.vue";
import ContactForm from "./ContactForm.vue";
import { useContactStore } from '../stores/contact';

const Contact = useContactStore()
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
        <ContactList :contacts="Contact.rawItems" />
    </div>
  </div>
</template>

<style scoped>
.container-contact {
    margin: 10px;
}
</style>