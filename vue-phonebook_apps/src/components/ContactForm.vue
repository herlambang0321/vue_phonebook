<script setup>
import { ref } from 'vue'

const emit = defineEmits(['createContact'])

const name = ref('')
const phone = ref('')

function addContact(){
    emit('createContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}
</script>

<template>
    <!-- <button type="submit" class="btn btn-primary mb-3">Add</button>
        <div class="card">
            <div class="card-header">
                <h6>Adding Form</h6>
                <form @submit.prevent="addContact">
                    <div class="row mb-3">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" v-model="name" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="phone" v-model="phone" />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="submit" class="btn btn-warning">Cancel</button>
                </form>
            </div>
        </div> -->

        <div>
            <!-- <button type="submit" class="btn btn-primary mb-3"><font-awesome-icon icon="fa-solid fa-plus" /> Add</button> -->
            <div class="card">
                <div class="card-header">
                    <h6>Adding Form</h6>
                </div>
                <form class="m-3" @submit.prevent="addContact">
                    <div class="d-flex justify-content me-5">
                        <div class="d-flex align-items-center">
                            <label for="name">Name</label>
                        </div>
                        <div class="d-flex col-sm-2">
                            <input type="text" class="form-control" id="name" v-model="name" placeholder="name"/>
                        </div>
                        <div class="d-flex align-items-center">
                            <label for="phone">Phone</label>
                        </div>
                        <div class="d-flex col-sm-2">
                            <input type="text" class="form-control" id="phone" v-model="phone" placeholder="phone"/>
                        </div>
                            <button type="submit" class="btn btn-success"><font-awesome-icon icon="fa-regular fa-circle-check" /> Save</button>
                            <button type="submit" class="btn btn-warning text-white"><font-awesome-icon icon="fa-solid fa-ban" /> Cancel</button>
                    </div>
                </form>
            </div>
        </div>
</template>