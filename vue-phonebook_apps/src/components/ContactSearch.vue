<script setup>
import { ref } from 'vue'

const emit = defineEmits(['searchContact'])

const name = ref('')
const phone = ref('')

function searchContact() {
    emit('searchContact', { name: name.value, phone: phone.value })
}

function resetContact() {
    emit('searchContact', { name: '', phone: '' })
    name.value = ''
    phone.value = ''
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h6 class="cardText">Search Form</h6>
        </div>
        <form class="m-3" @submit.prevent="searchContact">
            <div class="row g-0 align-items-center">
                <div class="col-auto">
                    <label for="name">Name</label>
                </div>
                <div class="col-sm-2">
                    <input type="text" class="form-control" id="name" v-model="name" placeholder="name..." />
                </div>
                <div class="col-auto">
                    <label for="phone">Phone</label>
                </div>
                <div class="col-sm-2">
                    <input type="text" class="form-control" id="phone" v-model="phone" placeholder="phone..." />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-info text-white"><font-awesome-icon
                            icon="fa-solid fa-magnifying-glass" /> Search</button>
                    <button type="submit" class="btn btn-warning text-white" @click="resetContact"><font-awesome-icon
                            icon="fa-solid fa-rotate-left" /> Reset</button>
                </div>
            </div>
        </form>
    </div>
</template>