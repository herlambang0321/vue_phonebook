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
        // console.log('ini scroll');
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




<!-- loadmoreItem() {
    console.log('ini jalan');
    if (this.$state.params.page < this.$state.params.totalPage) {
        let params = {
            ...this.$state.params,
            page: this.$state.params.page + 1
        }
        request.get('/phonebooks', { params }).then((response) => {
            console.log(params, 'param');
            this.$state.params = {
                ...params,
                totalPage: data.data.totalPage
            }
            this.$state.rawItems = response.data.data.rows.map(item => ({
                id: item.id,
                name: item.name,
                phone: item.phone,
                sent: true
            }));
            this.$state.params = params
        }).catch((err) => {
            console.log('Failed to scroll data', err);
        })
    }
}, -->