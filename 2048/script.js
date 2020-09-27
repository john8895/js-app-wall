let myApp = new Vue({
    el: '#myApp',
    data: {},
    mounted: function () {
        this.createBoard();
    },
    methods: {
        createBoard: function () {
            const gridDisplay = document.querySelector('.grid');
            const scoreDisplay = document.getElementById('score')
            const resultDisplay = document.getElementById('result')
            const width = 4
            let squares = []

            for (let i = 0; i < width * width; i++) {
                let square = document.createElement('div')
                square.innerHTML = 0;
                gridDisplay.appendChild(square)
                squares.push(square)
            }
        }
    }
})