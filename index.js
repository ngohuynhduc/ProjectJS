let index =1;
let dataTable = document.getElementById("dataTable");// khai bao lay ra bang de them
let dataForm = document.getElementById("dataForm");// lay ra cac gia tri nhap vao
let dataFormInput = dataForm.getElementsByTagName("input");//lay ra all the input ben trong table
let record=[]; //bien sum dung` de luu lai tat ca cac row table duoc them vao`

//add function for button
document.getElementById("submit").addEventListener("click",submitFunction);//submitFunction))
document.getElementById("calculateAverage").addEventListener("click",calculatorAverageScore);//calculatorAverageScore
document.getElementById("determineGoodStd").addEventListener("click",determineGoodStudent);//determineGoodStd


//this is the constructor for student score
function StudentScore(fullName, math, physics, chemistry){
    this.fullName=fullName;
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.averageScore='?';
}
//funtion submit btn
function submitFunction(){
    let i=0;
    let data=[];
    let newRow = dataTable.insertRow(index);//add new rớ to table
    //add new cells
    newRow.insertCell(0);
    for(let i=0;i<dataFormInput.length;i++){
        data.push(dataFormInput[i].value);
        newRow.insertCell(i+1);
    }
    newRow.insertCell(5);

    //convert input value from string to number
    data = data.map(function (item){
        if(parseInt(item)) return parseInt(item);
        else return item;
    })

    let newDataSet = new StudentScore(...data);// create new object from input value
    record.push(newDataSet);//add new object to container array

    //add value to cells of new row
    newRow.cells[0].innerHTML = index;
    i=1;
    for(const key in newDataSet){
        newRow.cells[i].innerHTML = newDataSet[key];
        i++
    }
    index++;//update number of row in table
    dataForm.reset();
}

//function "calculator"
function calculatorAverageScore(){
    let i,averageScore;
    for(let i=1;i<dataTable.rows.length;i++){
        averageScore =(dataTable.rows[i].cells[2].innerHTML*1+
                       dataTable.rows[i].cells[3].innerHTML*1+
                       dataTable.rows[i].cells[4].innerHTML*1)/3;
                       dataTable.rows[i].cells[5].innerHTML = Math.round(averageScore*100)/100;
    }
}
function determineGoodStudent(){
    let i;
    let theRow;
    //check row de tim` Sinh vien good
    for(i=0;i<dataTable.rows.length;i++){
        theRow=dataTable.rows[i];
        if(theRow.cells[5].innerHTML>=8.0){
            theRow.classList.add("table-light","text-danger","font-weight-bold");
        }
    }
}