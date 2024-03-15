import {type Writable, writable} from "svelte/store"
import type {FlintToastMessageData} from "$type/flint/toasts/flintToastMessageData"
import type {FlintToastType} from "$type/flint/toasts/flintToastType"

const toastMessages = writable<FlintToastMessageData[]>([])

class FlintToastManager {

    private static MAX_TOASTS = 3

    static addMessage(message: string, type: FlintToastType) {
        const id = Math.random()
        const newToast = {id, message, type}
        toastMessages.update(messages => {
            messages.unshift(newToast)

            if (messages.length > this.MAX_TOASTS) {
                messages.pop()
            }

            return messages
        })
    }

    static removeMessage(id: number) {
        toastMessages.update(messages => messages.filter(e => e.id !== id))
    }

    static getWritable(): Writable<FlintToastMessageData[]> {
        return toastMessages
    }
}

export default FlintToastManager