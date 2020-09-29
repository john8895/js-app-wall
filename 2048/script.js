let myApp = new Vue({
    el: '#myApp',
    data: {
        squares: [],
        width: 4,
        resultDisplay: '',
    },
    mounted: function () {
        this.createBoard();
        this.moveLeft()
        document.addEventListener('keyup', this.control)
    },
    methods: {
        createBoard: function () {
            const gridDisplay = document.querySelector('.grid');
            const scoreDisplay = document.getElementById('score')
            // const resultDisplay = document.getElementById('result')
            // const width = 4
            // let squares = []

            for (let i = 0; i < this.width * this.width; i++) {
                let square = document.createElement('div')
                square.innerHTML = 0;
                gridDisplay.appendChild(square)
                this.squares.push(square)
            }
            this.generate()
            this.generate()
        },
        generate: function () {  // generate a number randomly
            let randomNumber = Math.floor(Math.random() * this.squares.length)
            if (this.squares[randomNumber].innerHTML === '0') {  // 0 is a string NOT number
                this.squares[randomNumber].innerHTML = 2
            } else this.generate()
        },
        moveRight: function () {  // swipe right
            for (let i = 0; i < 16; i++) {
                if (i % 4 === 0) {
                    let totalOne = this.squares[i].innerHTML
                    let totalTwo = this.squares[i + 1].innerHTML
                    let totalThree = this.squares[i + 2].innerHTML
                    let totalFour = this.squares[i + 3].innerHTML
                    let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                    let filteredRow = row.filter(num => num)  // 把 > 0 的傳出
                    let missing = 4 - filteredRow.length
                    let zeros = Array(missing).fill(0)  // 使用固定值填充陣列，可選START、END位置
                    let newRow = zeros.concat(filteredRow)

                    // 數字都會靠右
                    this.squares[i].innerHTML = newRow[0]
                    this.squares[i + 1].innerHTML = newRow[1]
                    this.squares[i + 2].innerHTML = newRow[2]
                    this.squares[i + 3].innerHTML = newRow[3]
                }
            }
        },
        moveLeft: function () {  // swipe left
            for (let i = 0; i < 16; i++) {
                if (i % 4 === 0) {
                    let totalOne = this.squares[i].innerHTML
                    let totalTwo = this.squares[i + 1].innerHTML
                    let totalThree = this.squares[i + 2].innerHTML
                    let totalFour = this.squares[i + 3].innerHTML
                    let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                    let filteredRow = row.filter(num => num)  // 把 > 0 的傳出
                    let missing = 4 - filteredRow.length
                    let zeros = Array(missing).fill(0)  // 使用固定值填充陣列，可選START、END位置
                    let newRow = filteredRow.concat(zeros);

                    //
                    this.squares[i].innerHTML = newRow[0]
                    this.squares[i + 1].innerHTML = newRow[1]
                    this.squares[i + 2].innerHTML = newRow[2]
                    this.squares[i + 3].innerHTML = newRow[3]
                }
            }
        },
        moverDown: function () {
            for (var i = 0; i < 4; i++) {
                let totalOne = this.squares[i].innerHTML
                let totalTwo = this.squares[i + this.width].innerHTML
                let totalThree = this.squares[i + (this.width * 2)].innerHTML
                let totalFour = this.squares[i + (this.width * 3)].innerHTML
                let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredColumn = column.filter(num => num)
                let missing = 4 - filteredColumn.length
                let zeros = Array(missing).fill(0)
                let newColumn = zeros.concat(filteredColumn)

                this.squares[i].innerHTML = newColumn[0]
                this.squares[i + this.width].innerHTML = newColumn[1]
                this.squares[i + (this.width * 2)].innerHTML = newColumn[2]
                this.squares[i + (this.width * 3)].innerHTML = newColumn[3]
            }
        },
        moverUp: function () {
            for (var i = 0; i < 4; i++) {
                let totalOne = this.squares[i].innerHTML
                let totalTwo = this.squares[i + this.width].innerHTML
                let totalThree = this.squares[i + (this.width * 2)].innerHTML
                let totalFour = this.squares[i + (this.width * 3)].innerHTML
                let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredColumn = column.filter(num => num)
                let missing = 4 - filteredColumn.length
                let zeros = Array(missing).fill(0)
                let newColumn = filteredColumn.concat(zeros)

                this.squares[i].innerHTML = newColumn[0]
                this.squares[i + this.width].innerHTML = newColumn[1]
                this.squares[i + (this.width * 2)].innerHTML = newColumn[2]
                this.squares[i + (this.width * 3)].innerHTML = newColumn[3]
            }
        },
        combineRow: function () {
            for (let i = 0; i < 15; i++) {
                if (this.squares[i].innerHTML === this.squares[i + 1].innerHTML) {
                    let combinedTotal = parseInt(this.squares[i].innerHTML) + parseInt(this.squares[i + 1].innerHTML);
                    this.squares[i].innerHTML = combinedTotal;
                    this.squares[i + 1].innerHTML = 0;
                }
            }
            this.checkForWin()
        },
        combineColumn: function () {
            for (let i = 0; i < 12; i++) {
                if (this.squares[i].innerHTML === this.squares[i + this.width].innerHTML) {
                    let combinedTotal = parseInt(this.squares[i].innerHTML) + parseInt(this.squares[i + this.width].innerHTML);
                    this.squares[i].innerHTML = combinedTotal;
                    this.squares[i + this.width].innerHTML = 0;
                }
            }
            this.checkForWin()
        },
        control: function (e) {
            if (e.keyCode === 39) {
                this.keyRight();
            } else if (e.keyCode === 37) {
                this.keyLeft();
            } else if (e.keyCode === 38) {
                this.keyUp()
            } else if (e.keyCode === 40) {
                this.keyDown()
            }
        },
        keyRight: function () {
            this.moveRight();
            this.combineRow();
            this.moveRight();
            this.generate();
        },
        keyLeft: function () {
            this.moveLeft();
            this.combineRow();
            this.moveLeft();
            this.generate();

        },
        keyDown: function () {
            this.moverDown()
            this.combineColumn()
            this.moverDown()
            this.generate()
        },
        keyUp: function () {
            this.moverUp()
            this.combineColumn()
            this.moverUp()
            this.generate()
        },
        checkForWin: function () {
            for (let i = 0; i < this.squares.length; i++) {
                if (this.squares[i].innerHTML === 2048){
                    this.resultDisplay = 'You Win!'
                    document.removeEventListener('keyUp', this.control)
                }
            }
        },
        checkForGameOver: function() {
            let zeros = 0

        }    }
})