<script>
import { useContactStore } from '../stores/contact';

export default {
    setup() {
        const Contact = useContactStore()
        return { Contact }
    },
    props: {
        no: {
            type: Number,
            required: true
        },
        contact: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isEdit: false,
            name: this.contact.name,
            phone: this.contact.phone,
            showingConfirmModal: false,
        }
    },
    methods: {
        update(id) {
            this.Contact.updateItem({ id, name: this.name, phone: this.phone })
            this.isEdit = false
        },
        showConfirmModal() {
            this.showingConfirmModal = true;
        },
        hideConfirmModal() {
            this.showingConfirmModal = false;
        },
        confirmDelete(id) {
            this.Contact.removeItem(id);
            this.showingConfirmModal = false;
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ no }}</td>
        <td v-if="isEdit">
            <input class="form-control" type="text" v-model="name" />
        </td>
        <td v-else>{{ contact.name }}</td>
        <td v-if="isEdit">
            <input class="form-control" type="text" v-model="phone" />
        </td>
        <td v-else>{{ contact.phone }}</td>
        <td v-if="isEdit">
            <button class="btn btn-success mx-1" type="button" @click="update(contact.id)"><font-awesome-icon
                    icon="fa-regular fa-circle-check" /> Save</button>
            <button class="btn btn-warning text-white" type="button" @click="isEdit = false"><font-awesome-icon
                    icon="fa-solid fa-ban" rotation=90 /> Cancel</button>
        </td>
        <td v-else>
            <div v-if="contact.sent">
                <button class="btn btn-primary mx-1" type="button" @click="isEdit = true"><font-awesome-icon
                        icon="fa-solid fa-pencil" /> Edit</button>
                <button class="btn btn-danger" type="button" @click="showConfirmModal"><font-awesome-icon
                        icon="fa-solid fa-trash-can" /> Delete</button>
            </div>
            <div v-else>
                <button class="btn btn-warning text-white" type="button"
                    @click="Contact.resendItem(contact)"><font-awesome-icon icon="fa-solid fa-repeat" /> Resend</button>
            </div>
        </td>

        <div v-if="showingConfirmModal" class="modals-overlay">
            <div class="modals">
                <div class="modals-header">
                    <h5 class="modal-title">Confirm Delete</h5>
                    <button type="button" class="btn-close" @click="hideConfirmModal" aria-label="Close"></button>
                </div>
                <hr>
                <p>Are you sure, you want delete it?</p>
                <h3>` {{ contact.name }} `</h3>
                <hr>
                <div class="modals-footer">
                    <button type="button" class="btn btn-danger m-3" @click="confirmDelete(contact.id)">Yes</button>
                    <button type="button" class="btn btn-secondary m-3" @click="hideConfirmModal">No</button>
                </div>
            </div>
        </div>
    </tr>
</template>

<style scoped>
.modals-overlay {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modals {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 500px;
}

.modals-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modals-footer {
    position: relative;
    margin-top: -13px;
    margin-bottom: -13px;
}
</style>
