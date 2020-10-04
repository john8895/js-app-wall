let myApp = new Vue({
    el: '#myApp',
    data: {
        textInput: '',
        textOutput: '',
    },
    methods: {
        process: function(){
            const data = this.textInput;
            const reg = /(，)/g
            const reg2 = /<br>/g
            let newData = data.replace(reg, '\n')
            let newData2 = newData.replace(reg2, '\n')
            let newData3 = newData2.replace('。', '')

            this.textOutput = newData3
        }
    }
})