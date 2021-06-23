var app = new Vue({
    el: '#app',
    data: {
        nuovoImpegno:'',
        impegni:[
            'Fare la spesa',
            'Pulire la macchina',
            'Allenarsi',
            'Compleanno amico/a'
          
        ]
    },
    methods: {
        addImpegno(){
            this.impegni.push(this.nuovoImpegno)
        }
    }
})