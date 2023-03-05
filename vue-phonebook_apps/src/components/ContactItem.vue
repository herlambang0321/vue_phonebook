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
            phone: this.contact.phone
        }
    },
    methods: {
        update(id) {
            this.Contact.updateItem({ id, name: this.name, phone: this.phone })
            this.isEdit = false
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
                    icon="fa-solid fa-ban" /> Cancel</button>
        </td>
        <td v-else>
            <div v-if="contact.sent">
                <button class="btn btn-primary mx-1" type="button" @click="isEdit = true"><font-awesome-icon
                        icon="fa-solid fa-pencil" /> Edit</button>
                <button class="btn btn-danger" type="button" @click="Contact.removeItem(contact.id)"><font-awesome-icon
                        icon="fa-solid fa-trash-can" /> Delete</button>
            </div>
            <div v-else>
                <button class="btn btn-warning text-white" type="button"
                    @click="Contact.resendItem(contact)"><font-awesome-icon icon="fa-solid fa-repeat" /> Resend</button>
            </div>
        </td>
    </tr>
</template>