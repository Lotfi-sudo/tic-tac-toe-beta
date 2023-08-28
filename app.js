const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')

const cells = [[cell1, cell2, cell3], 
               [cell4, cell5, cell6],
               [cell7, cell8, cell9]]
const choice = ['<img src="public/x.svg">', '<img src="public/circle.svg">']
let index = true

cells.forEach( row => {
    let i = cells.indexOf(row)
    row.forEach( cell => {
        let j = cells[i].indexOf(cell)
        cell.addEventListener('click', () => {
            console.log(i, j)
            if(index){
                cell.innerHTML = choice[0]
            } else {
                cell.innerHTML = choice[1]
            }
            index = !index
            if(verifyRow(cell, i) || verifyColumn(cell, j) || verifyDiagonal(cell, i, j)) {
                const line = document.querySelector('.line')
                if(verifyRow(cell, i)){
                    switch(i){
                        case 0:
                            line.style = 'display:block; top: 17%; animation: width1 0.5s ease;'
                            break
                        case 1:
                            line.style = 'display:block; top: 50%; animation: width1 0.5s ease;'
                            break
                        case 2:
                            line.style = 'display:block; top: 83%; animation: width1 0.5s ease;'
                            break
                        default:
                            break
                    }
                }
                if(verifyColumn(cell, j)){
                    switch(j){
                        case 0:
                            line.style = 'display:block; top: 50%; left: 17%; transform: translateX(-50%) rotate(90deg);animation: width1 0.5s ease; '
                            break
                        case 1:
                            line.style = 'display:block; top: 50%; left: 50%; transform: translateX(-50%) rotate(90deg); animation: width1 0.5s ease;'
                            break
                        case 2:
                            line.style =  'display:block; top: 50%; left: 83%; transform: translateX(-50%) rotate(90deg); animation: width1 0.5s ease;'
                            break
                        default:
                            break
                    }
                }
                if(verifyDiagonal(cell, i, j)){
                    if(i==j){
                        line.style = 'display:block; top: 50%; transform: translateX(-10.8%) rotate(45deg); width: 130%'
                    } else {
                        line.style = 'display:block; top: 50%; transform: translateX(-11.8%) rotate(-45deg); width: 130%'
                    }
                }
                setTimeout( () => {
                    location.reload()
                }, 1500)
            }
        })
    })
})
function verifyRow (cell, i){
    let arr = cells[i]
    let flag = true
    let k = 0
    while(flag && k < 3){
        if(cell.innerHTML != arr[k].innerHTML){
            flag = false
        }
        k++
    }
    return flag
}
function verifyColumn (cell, j){
    let flag = true
    let k = 0
    while(flag && k < 3){
        if(cell.innerHTML != cells[k][j].innerHTML){
            flag = false
        }
        k++
    }
    return flag
}
function verifyDiagonal (cell, i, j){
    let flag = true
    let k = 0
    if(i == j){
        while(flag && k < 3){
            if(cell.innerHTML != cells[k][k].innerHTML){
                flag = false
            }
            k++
        }
    } else {
        while(flag && k < 3){
            if(cell.innerHTML != cells[2-k][0+k].innerHTML){
                flag = false
            }
            k++
        }
    }
    return flag
}