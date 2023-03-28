/*const table = document.querySelector('table')
let content = ""



for (let i = 0; i < matrix.length; i++) {
    content += "<tr>"
    for (let j = 0; j < matrix[i].length; j++) {
        content += "<td>" + matrix[i][j] + "</td>"
    }
    content += "</tr>"
   
}

table.innerHTML = content
*/

let matrix = [
    [1,2,3],
    [2,3,4]
]

const tbl = document.createElement("table");

for (let i = 0; i < matrix.length; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < matrix[i].length; j++) {
        let td = document.createElement("td")
        td.innerHTML = matrix[i][j]
        tr.appendChild(td)
    }
    table.appendChild(tr)

}

