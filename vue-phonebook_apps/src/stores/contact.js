import { defineStore } from 'pinia'
import { request } from './api'

export const useContactStore = defineStore({
    id: 'contact',
    state: () => ({
        rawItems: [],
    }),
    getters: {
        items: (state) =>
            state.rawItems,
    },
    actions: {
        loadItem() {
            request.get('/phonebooks').then((response) => {
                this.rawItems = response.data.data.rows.map(item => ({
                    id: item.id,
                    name: item.name,
                    phone: item.phone,
                    sent: true
                }));
            }).catch(() => {
                console.log('Failed to load data');
            })
        },

        addItem({ name, phone }) {
            this.rawItems.push({ id: Date.now(), name, phone })
            // axios
        },

        removeItem(id) {
            this.rawItems = this.rawItems.filter(item => item.id !== id)
        },

        updateItem(contact) {
            this.rawItems = this.rawItems.map(item => {
                if (item.id === contact.id) {
                    return contact
                }
                return item
            })
        }
    },
})