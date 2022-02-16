const board = document.createElement('div')
board.className = 'board'

function createBoard(num) {
    const boardSize = num || 16
    
    const container = document.getElementById('container')
    const docFrag = document.createDocumentFragment()
    
    for(i=0; i<boardSize; i++){
        for(j=0; j<boardSize; j++){
            let block = document.createElement('div')
            block.className ='block'
            docFrag.appendChild(block)
        }
    }
    board.setAttribute('style',
        `grid-template-columns: repeat(${boardSize}, 1fr);
        grid-template-rows: repeat(${boardSize}, 1fr);`
    )
    
    board.appendChild(docFrag)
    
    container.appendChild(board)

    const blocks = document.getElementsByClassName('block')
    Object.values(blocks).forEach(block => {
        block.addEventListener('mouseover', fillBlock)
    })
}
createBoard()

function removeBoard() {
    while(board.firstChild) {
        board.removeChild(board.firstChild)
    }
}

function fillBlock(e) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    this.style['background-color'] = `rgb(${r},${g},${b})`
}

function clearForm() {
    let num = 0
    do {
        num = Number(window.prompt('Please enter a number:', '[1-100]'))
    } while(num<1 || num>100)

    removeBoard()
    createBoard(num)
}