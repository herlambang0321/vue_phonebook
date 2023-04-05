<script setup>
import ContactItem from "./ContactItem.vue";
import { useContactStore } from '../stores/contact';

const Contact = useContactStore()

defineProps({
    contacts: {
        type: Object,
        required: true,
    },
});

const scrolled = (event) => {
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        Contact.loadmoreItem()

    }
}
</script>

<template>
    <div class="scrolls" @scroll="scrolled">
        <table class="table table-striped mt-2">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <ContactItem v-for="(contact, index) in contacts" :no="index + 1" :contact="contact" />
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.scrolls {
    height: 200px;
    overflow-y: scroll;
}
</style>