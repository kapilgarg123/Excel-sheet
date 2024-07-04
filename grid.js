let rows = 100;
let col = 26;
// let cid;

let colnamecont = document.querySelector(".collumName");

for (let i = 0; i < rows; i++) {
    let rowadd = document.createElement("div")
    rowadd.innerHTML = i + 1;
    rowadd.setAttribute("class", "addCollum");
    colnamecont.appendChild(rowadd);
}

let rownamecont = document.querySelector(".rowName");
for (let i = 0; i < col; i++) {
    let coladd = document.createElement("div");
    coladd.innerHTML = String.fromCharCode(65 + i);
    coladd.setAttribute("class", "addRow");
    rownamecont.appendChild(coladd);
}
function addressgenerator(cell, i, j) {
    cell.add
}
let cellarea = document.querySelector(".cells");
let addressBar = document.querySelector("#addDisplay");
for (let i = 0; i < rows; i++) {
    let newrow = document.createElement("div");
    newrow.setAttribute("class", "rows");
    cellarea.appendChild(newrow);
    for (let j = 0; j < col; j++) {
        let newrowcell = document.createElement("div");
        newrowcell.setAttribute("class", "cell");
        newrowcell.setAttribute("rowid", i);
        newrowcell.setAttribute("colid", j);
        newrowcell.setAttribute("contenteditable", "true");
        newrowcell.setAttribute("spellcheck", "false");
        newrowcell.addEventListener("click", (e) => {
            let coln = String.fromCharCode(65 + j);
            let rown = i + 1;
            addressBar.value = `${coln}${rown}`;
            addressBar.setAttribute("currentcol", j);
        })
        newrow.appendChild(newrowcell);
    }

}

let firstcell = document.querySelector(".cell");

firstcell.click();

