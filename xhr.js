const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const myCol=[];
const myRow=[];
const myData=[];
let myTable=document.querySelector("#table");

const getHttpRequest = (method,url,key,value) => {
    const promise=new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader(key,value);
    xhr.responseType='json'
    xhr.onload=()=>{
        resolve(xhr.response);
    } 
    xhr.send();
    })
    return promise;
};

const getData = () => {
    let method='GET';
    let api='https://api.applicationinsights.io/v1/apps/cdc2ef3e-8768-4247-b53c-7505d4a0d6a5/events/$all';
    let key='x-api-key';
    let value='6skielwmonikehuyd5avlpyid07qbtx4gtwdav8q';
    getHttpRequest(method,api,key,value).then(responseData=>{
        let myarray=responseData.value;
        myarray.forEach(element => {
            console.log(element);
            // console.log(element['availabilityResult']['location']);
            // console.log("Availibility Results",element['availabilityResult']);
            // myCol.push(element['availabilityResult']['location']);
            // myRow.push(element['availabilityResult']['name'])
            // myData.push(element['availabilityResult']['success']);
            // if(element['availabilityResult']['success']==1){
            //     console.log("1",element['availabilityResult']['name'],"||",element['availabilityResult']['location']);
            // }
            // else{
            //     console.log("0",element['availabilityResult']['name'],"||",element['availabilityResult']['location'])
            // }
        });
        console.log(myRow);
        console.log(myCol);
        console.log(myData);
        let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
        let y = (names) => names.filter((v,i) => names.indexOf(v) === i)
        let z = (names) => names.filter((v,i) => names.indexOf(v) === i)
        console.log(x(myCol));
        console.log(y(myRow));
        // console.log(z(myData));
        // loadData(x(myCol));
    })
};




function loadData(col){
    // let header=document.getElementsByClassName('header');
    // let colData="";
    // col.forEach(element => {
    //     console.log(element);
    //     colData+=`<th scope="col">${element}</th>`;
    // });
    // console.log(colData);
    // header.innerHTML=colData;
    // header.innerHTML="his is my data";
    let table=document.createElement('table');
    table.setAttribute('class','table');
    let headerRow=document.createElement('tr');
    let firstHeader=document.createElement('th');
    let firstTextNode=document.createTextNode('Names') ;
    firstHeader.appendChild(firstTextNode);
    headerRow.appendChild(firstHeader);
    col.forEach(element => {
        let header=document.createElement('th');
        header.setAttribute('scope','col');
        let textNode=document.createTextNode(element);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    myTable.appendChild(table);

}

getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', sendData);
