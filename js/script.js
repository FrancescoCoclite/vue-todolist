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
            if (this.nuovoImpegno == ''){
                alert('Devi prima inserire un impegno')
            }else{
                this.impegni.push(this.nuovoImpegno)
                this.nuovoImpegno = '';
            }
        },
        remove(index){
            console.log(index);
            this.impegni.splice(index,1)
        }
    }
})