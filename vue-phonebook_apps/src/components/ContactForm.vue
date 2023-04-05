<script setup>
import { ref } from 'vue'

const emit = defineEmits(['createContact', 'cancel'])

const name = ref('')
const phone = ref('')

function addContact() {
    emit('createContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}

function handleCancel() {
    emit('cancel')
}
</script>

<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h6 class="cardText">Adding Form</h6>
            </div>
            <form class="m-3" @submit.prevent="addContact">
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
                    <button type="submit" class="btn btn-success"><font-awesome-icon icon="fa-regular fa-circle-check" />
                        Save</button>
                    <button type="submit" class="btn btn-warning text-white" @click="handleCancel"><font-awesome-icon
                            icon="fa-solid fa-ban" /> Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>