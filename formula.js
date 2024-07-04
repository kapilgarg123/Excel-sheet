let address = document.querySelector("#addDisplay");

function cellandcellprop(address) {
    let rid = Number(address.slice(1)) - 1;
    // let cid = addressBar.getAttribute("currentcol");
    let cid = address.charCodeAt(0) - 65;
    // console.log(cid);
    let activecell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
    // console.log(document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`));
    let cellprop = sheet[rid][cid];
    return [activecell, cellprop];
}

function getRIDandCID (address){
    let rid = Number(address.slice(1)) -1 ;
    let cid = address.charCodeAt(0) - 65;
    return [rid,cid];
}

function evaluformula(formula) {
    let encodedforumla = formula.split(" ");
    for (let i = 0; i < encodedforumla.length; i++) {
        let ascivalue = encodedforumla[i].charCodeAt(0);
        if (ascivalue >= 65 && ascivalue <= 90) {
            let [cell, cellprop] = cellandcellprop(encodedforumla[i]);
            encodedforumla[i] = cell.innerHTML;
        }
    }
    let decodedformula = encodedforumla.join(" ");
    return eval(decodedformula);
}

function setcelluivalueandcellpropvalueindb(evaluatedvalue, formula) {
    let address = addressBar.value;
    let [activecell, cellprop] = cellandcellprop(address);
    cellprop.formula = formula;
    activecell.innerHTML = evaluatedvalue;
    cellprop.value = activecell.innerHTML;
    console.log(cellprop.value, cellprop.formula);
    console.log(activecell);
    console.log(cellprop);
}
function updatechidren(parentcell,parentcellprop){
    for(let i = 0 ; i< parentcellprop.children.length;i++){
        let [cell,cellprop] = cellandcellprop(parentcellprop.children[i]);
        cellprop.value = evaluformula(cellprop.formula)
        cell.innerHTML  = cellprop.value
        updatechidren(cell,cellprop);
    }

}


for (let i = 0; i < 2600; i++) {
    cell[i].addEventListener("blur", (e) => {
        let rid = Math.floor((i + 1) / 26);
        let cid = ((i + 1) % 26) - 1;
        let cell = document.querySelector(`.cell[rowid = "${rid}"][colid = "${cid}"]`);
        console.log(cell.innerHTML);
        console.log(sheet[rid][cid].value);
        if(cell.innerHTML === sheet[rid][cid].value  || Number(cell.innerHTML) == Number(sheet[rid][cid].value)){
            // return;
        }
        else{
            console.log('else');
            console.log(cell);
            let enteredData = cell.innerHTML;
            sheet[rid][cid].value = enteredData;
            updatechidren(cell,sheet[rid][cid]);
            removeChildFromParent(sheet[rid][cid].formula);
            sheet[rid][cid].formula = "";
            formulabar.value = sheet[rid][cid].formula;
        }
        
        console.log(sheet);
        // sheet[rid][cid].formula = formulabar.value;

    })
}


formulabar.addEventListener("keydown", (e) => {
    let formula = formulabar.value;
    if (e.key === "Enter" && formulabar.value) {
        let evaluatedvalue = evaluformula(formula);
        let [activecell, cellprop] = cellandcellprop(addressBar.value);
        addchildToGraphComponent(formula,addressBar.value);
        if(ifcycle(graphConponentMatrix)){
            alert("the formula entered creat a cycle");
            removechildFromGraphComponent(formula,addressBar.value);
            return;
        }
        if (cellprop.formula == formula) { 
        }
        else{
            removeChildFromParent(cellprop.formula)
        }
        console.log(formula)
        // cellprop.formula = formulabar;
        setcelluivalueandcellpropvalueindb(evaluatedvalue, formula);
        addchildtoparent(formula);
        // console.log(cellprop.formula);
        // // console.log()
        // console.log(sheet);
    }
})

function addchildtoparent(formula) {
    let encodedforumla = formula.split(" ");
    for (let i = 0; i < encodedforumla.length; i++) {
        console.log(encodedforumla[i]);
        let childaddress = addressBar.value;
        let ascivalue = encodedforumla[i].charCodeAt(0);
        if (ascivalue >= 65 && ascivalue <= 90) {
            console.log('working');
            let [parentcell, parentcellprop] = cellandcellprop(encodedforumla[i]);
            encodedforumla[i] = cell.innerHTML;

            parentcellprop.children.push(childaddress);
            console.log(childaddress);
            console.log(parentcell.children);
        }
    }
}

function removeChildFromParent(formula) {
    let encodedforumla = formula.split(" ");
    for (let i = 0; i < encodedforumla.length; i++) {
        let childaddress = addressBar.value;
        let ascivalue = encodedforumla[i].charCodeAt(0);
        if (ascivalue >= 65 && ascivalue <= 90) {
            let [parentcell, parentcellprop] = cellandcellprop(encodedforumla[i]);
            encodedforumla[i] = cell.innerHTML;
            // parentcellprop.children.pop(childaddress);
            let idx = parentcellprop.children.indexOf(childaddress);
            console.log(idx);
            parentcellprop.children.splice(idx, 1);
            console.log(parentcellprop.children);
        }
    }
}

function addchildToGraphComponent(formula,childaddress){
    console.log("hi");
    let [rid,cid] = getRIDandCID(childaddress);
    let encodedforumla = formula.split(" ");
    for (let i = 0; i < encodedforumla.length; i++) {
        let ascivalue = encodedforumla[i].charCodeAt(0);
        if (ascivalue >= 65 && ascivalue <= 90) {
            let [prarentRid,parentCid] = getRIDandCID(encodedforumla[i]);
            console.log(graphConponentMatrix[prarentRid][parentCid]);
            graphConponentMatrix[prarentRid][parentCid].push([rid,cid]);
            console.log(graphConponentMatrix[prarentRid][parentCid]);
        }
    }
    console.log(graphConponentMatrix);
    console.log("hi");
    
}

function removechildFromGraphComponent(formula, childaddress){
    let [rid,cid] = getRIDandCID(childaddress);
    let encodedforumla = formula.split(" ");
    for (let i = 0; i < encodedforumla.length; i++) {
        let ascivalue = encodedforumla[i].charCodeAt(0);
        if (ascivalue >= 65 && ascivalue <= 90) {
            let [prarentRid,parentCid] = getRIDandCID(encodedforumla[i]);
            graphConponentMatrix[prarentRid][parentCid].pop();
            // let idx = graphConponentMatrix[prarentRid][parentCid].indexOf([rid],[cid]);
            // graphConponentMatrix[prarentRid][parentCid].splice(idx,1);
            console.log(graphConponentMatrix[prarentRid][parentCid]);
            // graphConponentMatrix[prarentRid][parentCid].push([rid,cid]);
        }
    }
    
    console.log(graphConponentMatrix);
}