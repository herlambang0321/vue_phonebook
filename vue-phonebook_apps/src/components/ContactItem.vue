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
    data () {
        return {
            isEdit: false,
            name: this.contact.name,
            phone: this.contact.phone
        }
    },
    methods: {
        update(id){
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
            <button class="btn btn-primary" type="button" @click="update(contact.id)">save</button>
            <button class="btn btn-warning" type="button" @click="isEdit = false">cancel</button>
        </td>
        <td v-else>
            <button class="btn btn-success" type="button" @click="isEdit = true">edit</button>
            <button class="btn btn-danger" type="button" @click="Contact.removeItem(contact.id)">delete </button>
        </td>
    </tr>
</template>