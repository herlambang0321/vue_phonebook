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
            }).catch((err) => {
                console.log('Failed to load data', err);
            })
        },

        addItem({ name, phone }) {
            const id = Date.now()
            this.rawItems.push({ id, name, phone })
            request.post('/phonebooks', { name, phone }).then((response) => {
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === id) {
                        return {
                            id: response.data.data.id,
                            name: response.data.data.name,
                            phone: response.data.data.phone,
                            sent: true
                        }
                    }
                    return item
                })
            }).catch((err) => {
                console.log('Failed to add data', err);
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === id) {
                        return {
                            id: item.id,
                            name: item.name,
                            phone: item.phone,
                            sent: false
                        }
                    }
                    return item
                })
            })
        },

        removeItem(id) {
            request.delete(`/phonebooks/${id}`).then(() => {
                this.rawItems = this.rawItems.filter(item => item.id !== id)
            }).catch((err) => {
                console.log('Failed to delete data', err);
            })
        },

        updateItem(contact) {
            request.put(`/phonebooks/${contact.id}`, { name: contact.name, phone: contact.phone }).then((response) => {
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === contact.id) {
                        return {
                            id: response.data.data.id,
                            name: response.data.data.name,
                            phone: response.data.data.phone,
                            sent: true
                        }
                    }
                    return item
                })
            }).catch((err) => {
                console.log('Failed to update data', err);
            })
        },

        resendItem(contact) {
            request.post('/phonebooks', { name: contact.name, phone: contact.phone }).then((response) => {
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === contact.id) {
                        return {
                            id: response.data.data.id,
                            name: response.data.data.name,
                            phone: response.data.data.phone,
                            sent: true
                        }
                    }
                    return item
                })
            }).catch((err) => {
                console.log('Failed to resend data', err);
            })
        }
    },
})