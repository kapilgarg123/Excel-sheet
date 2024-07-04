let graphConponentMatrix = [];
for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < col; j++) {
        let col = [];
        row.push(col);
    }
    graphConponentMatrix.push(row);
}
// if cyclic then return 1 and if not cyclic then return 0
function ifcycle(graphConponentMatrix) {
    let visitedArr = [];
    let dfsVistiedArr = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < col; j++) {
            let a = 0;
            row.push(a);
            // console.log(false);

        }
        visitedArr.push(row);
        dfsVistiedArr.push(row);
    }
    console.log("hi");
    console.log(visitedArr);
    console.log(dfsVistiedArr);
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            if (visitedArr[i][j] == false) {
                // let responce = dfsCycleDetection(graphConponentMatrix, i, j, visitedArr, dfsVistiedArr);
                // if (responce == true) {
                //     return true;
                // }
                console.log(visitedArr[i][j]);
                console.log(dfsVistiedArr[i][j]);
                // visitedArr[i][j] = true;
                dfsCycleDetection(graphConponentMatrix,i,j,visitedArr,dfsVistiedArr);
                console.log(visitedArr[i][j]);
                console.log(dfsVistiedArr[i][j]);
            }
        }
    }
    console.log(visitedArr);
    console.log(dfsVistiedArr);
    return false;
}
function dfsCycleDetection(graphConponentMatrix,srcR,srcC, visitedArr,dfsVistiedArr){
    // for(let i = 0 ; i < rows; i++){
    //     for(let j = 0 ; j < col; j++){
            visitedArr[srcR][srcC] = 1;
            console.log(dfsVistiedArr[srcR][srcC]);
    //     }

    // }

}


// function dfsCycleDetection(graphConponentMatrix, srcR, srcC, visitedArr, dfsVistiedArr) {
//     visitedArr[srcR][srcC] = true;
//     dfsVistiedArr[srcR][srcC] = true;
    // for (let i = 0; i < graphConponentMatrix[srcR][srcC].length; i++) {
    //     let [nbrR, nbrC] = graphConponentMatrix[srcR][srcC][i];
    //     if (visitedArr[nbrR][nbrC] == false) {
    //         let responce = dfsCycleDetection(graphConponentMatrix, nbrR, nbrC, visitedArr, dfsVistiedArr);
    //         if (responce == true) {
    //         }
    //     }
    //     else if (visitedArr[nbrR][nbrC] == true && dfsVistiedArr[nbrR][nbrC] == true) {
    //         return true;
    //     }
    // }

//     dfsVistiedArr[srcR][srcC] = false;
//     return false;
// }