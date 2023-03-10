<script setup>
import ContactItem from "./ContactItem.vue";

defineProps({
    contacts: {
        type: Object,
        required: true,
    },
});
</script>

<template>
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
</template>