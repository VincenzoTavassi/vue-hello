const { createApp } = Vue

createApp({
    data() {
        return {
            h1Message: 'Scrivi qui',
            h1Classes: ['text-center', 'display-3', 'm-5'],
            immagine: './img/01.webp',
            imageClasses: ['w-50', 'rounded-5', 'mb-3']
        }
    }
}).mount('#root')

