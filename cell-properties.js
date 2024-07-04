let sheet = [];

for (let i = 0; i < rows; i++) {
    let sheetrow = [];
    for (let j = 0; j < col; j++) {
        let cellpro = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "Fantasy",
            BGcolor: "#",
            fontcolor: "#",
            fontsize: 14,
            value: "",
            formula: "",
            children: [],
        }
        sheetrow.push(cellpro);
    }
    sheet.push(sheetrow);
}


let bold = document.querySelector(".fa-bold");
let italic = document.querySelector(".fa-italic");
let underline = document.querySelector(".fa-underline");
let alignleft = document.querySelector(".fa-align-left");
let alignright = document.querySelector(".fa-align-right");
let aligncenter = document.querySelector(".fa-align-center");
let BGcolor = document.querySelector(".fa-fill");
let textcolor = document.querySelector(".fa-palette");
let fontFamily = document.querySelector("#fontFamilyDropDown");
let fontsize = document.querySelector("#fontSizeDropDown");
let formulabar = document.querySelector("#formulaDisplay");

// let addressBar = document.getElementById("addDisplay");
console.log(addressBar.value);


// bold
bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    sheet[rid][cid].bold = !sheet[rid][cid].bold;
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.fontWeight = sheet[rid][cid].bold ? "bold" : "normal";
    bold.style.borderBottom = sheet[rid][cid].bold ? "1px solid white" : "none";
    console.log(cell.innerHTML);
    // bold.style.backgroundColor = sheet[rid][cid].bold ? "white" : "black";
})
// italic
italic.addEventListener("click", () => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    sheet[rid][cid].italic = !sheet[rid][cid].italic;
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.fontStyle = sheet[rid][cid].italic ? "italic" : "normal";
    italic.style.borderBottom = sheet[rid][cid].italic ? "1px solid white" : "none";
})
// underline
underline.addEventListener("click", () => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    sheet[rid][cid].underline = !sheet[rid][cid].underline;
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.textDecoration = sheet[rid][cid].underline ? "underline" : "none";
    underline.style.borderBottom = sheet[rid][cid].underline ? "1px solid white" : "none";
})

aligncenter.addEventListener("click", (e) => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    if (sheet[rid][cid].alignment == "center") {
        sheet[rid][cid].alignment = "left";
        cell.style.justifyContent = "left";
        aligncenter.style.borderBottom = "none";
        alignright.style.borderBottom = "none";
    }
    else {
        cell.style.justifyContent = "center";
        sheet[rid][cid].alignment = "center";
        aligncenter.style.borderBottom = "1px solid white";
        alignright.style.borderBottom = "none";
        alignleft.style.borderBottom = "none";
    }
})


alignright.addEventListener("click", (e) => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    if (sheet[rid][cid].alignment == "right") {
        sheet[rid][cid].alignment = "left";
        cell.style.justifyContent = "left";
        aligncenter.style.borderBottom = "none";
        alignright.style.borderBottom = "none";
    }
    else {
        cell.style.justifyContent = "right";
        sheet[rid][cid].alignment = "right";
        alignright.style.borderBottom = "1px solid white";
        aligncenter.style.borderBottom = "none";
        alignleft.style.borderBottom = "none";
    }
})


alignleft.addEventListener("click", (e) => {
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    if (sheet[rid][cid].alignment == "left") {
        sheet[rid][cid].alignment = "left";
        cell.style.justifyContent = "left";
        aligncenter.style.borderBottom = "none";
        alignright.style.borderBottom = "none";
        alignleft.style.borderBottom = "none";
    }
    else {
        cell.style.justifyContent = "left";
        sheet[rid][cid].alignment = "left";
        alignleft.style.borderBottom = "1px solid white";
        aligncenter.style.borderBottom = "none";
        alignright.style.borderBottom = "none";
    }
})

let fontcolor = document.querySelector("#textColor");
console.log('hi');
// console.log(colorpicker);
// console.log(colorpicker.value);

fontcolor.addEventListener("change", (e) => {
    console.log(fontcolor.value);
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.color = fontcolor.value;
    document.querySelector(".fa-palette").style.borderBottom = "1px solid white";
    sheet[rid][cid].fontcolor = fontcolor.value;
})


document.querySelector("#bgColor").addEventListener("change", (e) => {
    console.log(document.querySelector("#bgColor").value);

    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.backgroundColor = document.querySelector("#bgColor").value;
    document.querySelector(".fa-fill").style.borderBottom = "1px solid white";
    sheet[rid][cid].BGcolor = document.querySelector("#bgColor").value;

})

fontFamily.addEventListener("change", (e) => {
    console.log(fontFamily.value);
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    cell.style.fontFamily = fontFamily.value;
    sheet[rid][cid].fontFamily = fontFamily.value;
})

fontsize.addEventListener("change", (e) => {
    console.log(fontsize.value);
    let address = addressBar.value;
    let rid = Number(address.slice(1)) - 1;
    let cid = addressBar.getAttribute("currentcol");
    let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    // cell.style.fontSize = Number(fontsize.value);
    cell.style.fontSize = fontsize.value + "px";
    sheet[rid][cid].fontsize = fontsize.value;
})


let bgcolor = document.querySelector(".fa-fill");
let cell = document.querySelectorAll(".cell");
// console.log(cell);
for (let i = 0; i < 2600; i++) {
    let rid = Math.floor((i + 1) / 26);
    let cid = ((i + 1) % 26) - 1;
    let forumula = formulabar.value;
    cell[i].addEventListener("click", (e) => {
        // console.log(rid);
        // console.log(cid);
        bold.style.borderBottom = sheet[rid][cid].bold ? "1px solid white" : "none";
        underline.style.borderBottom = sheet[rid][cid].underline ? "1px solid white" : "none";
        italic.style.borderBottom = sheet[rid][cid].italic ? "1px solid white" : "none";
        aligncenter.style.borderBottom = (sheet[rid][cid].alignment == "center") ? "1px solid white" : "none";
        alignright.style.borderBottom = (sheet[rid][cid].alignment == "right") ? "1px solid white" : "none";
        alignleft.style.borderBottom = (sheet[rid][cid].alignment == "left") ? "1px solid white" : "none";
        fontFamily.value = sheet[rid][cid].fontFamily;
        fontsize.value = sheet[rid][cid].fontsize;
        textcolor.style.borderBottom = (sheet[rid][cid].fontcolor == "#") ? "none" : "1px solid white";
        bgcolor.style.borderBottom = (sheet[rid][cid].BGcolor == "#") ? "none" : "1px solid white";
        // formulabar.value = sheet[rid][cid].formula;
        formulabar.value = sheet[rid][cid].formula;
    })
}