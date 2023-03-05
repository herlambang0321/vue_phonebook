<script setup>
import { ref } from 'vue'

const emit = defineEmits(['searchContact'])

const name = ref('')
const phone = ref('')

function searchContact() {
    emit('searchContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}

function resetContact() {
    emit('searchContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h6>Search Form</h6>
            </div>
            <form class="m-3" @submit.prevent="searchContact">
                <div class="d-flex justify-content me-5">
                    <div class="d-flex align-items-center">
                        <label for="name">Name</label>
                    </div>
                    <div class="d-flex col-sm-2">
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="name" />
                    </div>
                    <div class="d-flex align-items-center">
                        <label for="phone">Phone</label>
                    </div>
                    <div class="d-flex col-sm-2">
                        <input type="text" class="form-control" id="phone" v-model="phone" placeholder="phone" />
                    </div>
                    <button type="submit" class="btn btn-info text-white"><font-awesome-icon
                            icon="fa-solid fa-magnifying-glass" /> Search</button>
                    <button type="submit" class="btn btn-warning text-white"><font-awesome-icon
                            icon="fa-solid fa-rotate-left" /> Reset</button>
                </div>
            </form>
        </div>
    </div>
</template>