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
                <div class="row g-0 align-items-center">
                    <div class="col-auto">
                        <label for="name">Name</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="name..." required />
                    </div>
                    <div class="col-auto">
                        <label for="phone">Phone</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control" id="phone" v-model="phone" placeholder="phone..."
                            required />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-success"><font-awesome-icon
                                icon="fa-regular fa-circle-check" />
                            Save</button>
                        <button type="submit" class="btn btn-warning text-white" @click="handleCancel"><font-awesome-icon
                                icon="fa-solid fa-ban" rotation=90 /> Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>