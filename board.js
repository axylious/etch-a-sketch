const board = document.createElement('div')
board.className = 'board'

const slider = document.querySelector('#size')
const dimensions = document.getElementById('dimensions')
dimensions.innerText = `${slider.value}x${slider.value}`

function createBoard(num) {
    const boardSize = num || getSize()
    
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
    this.style['background-color'] = 'black'
}

function fillSolid() {
    this.style['background-color'] 
}

function clearForm() {
    removeBoard()
    createBoard(getSize())
}

function toggleGrid() {
    const blocks = document.getElementsByClassName('block')
    Object.values(blocks).forEach(block => {
        block.classList.toggle('grid')
    })
}

function getSize() {
    slider.addEventListener('input', () => {
        let num = slider.value
        dimensions.innerText = `${num}x${num}`
    })
    return slider.value
}
getSize()