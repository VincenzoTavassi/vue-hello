const { createApp } = Vue

createApp({
    data() {
        return {
            h1Message: 'Sono il messaggio di un h1 con Vue',
            h1Classes: ['text-center', 'display-3', 'm-5'],
            immagine: './img/01.webp',
            imageClasses: ['w-50', 'rounded-5']
        }
    }
}).mount('#root')

