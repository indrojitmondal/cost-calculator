console.log('Connected to index.js');


let sum = 0;
const thing = document.getElementById('thing');
const amount = document.getElementById('amount');

const btn_add = document.getElementById('btn_add');
let table_body = document.getElementById('table-boby');
let newAdded = false;

let itemDeleteArray = document.querySelectorAll('#table-boby button');

let tableContainer = document.getElementById('table-boby');

let arrayOfTr = document.querySelectorAll('#cost')

let itemDeleteArray1;
let tableContainer1;
function HandleCheck() {

    if (newAdded) {

        // Deleting

        let itemsList = itemDeleteArray1;

        itemsList.forEach(element => {
            element.addEventListener('click', function () {
             
                element.parentElement.parentElement.remove();
                 
                let y=0;
                document.querySelectorAll('#cost').forEach( element => {
                    y+=Number(element.innerText);
                })

                document.getElementById('total-cost').innerText = y;

            
                let aNewArray= document.querySelectorAll('#table-boby th');
               for(let i=0; i<aNewArray.length; i++){
                  aNewArray[i].innerText = i+1;
               }

             



            })
        });


    }
    // else {

    //     itemDeleteArray.forEach(element => {
    //         element.addEventListener('click', function () {
    //             // sum -= Number(element.parentElement.previousElementSibling.innerText);
    //             // document.getElementById('total-cost').innerText = sum;
    //             element.parentElement.parentElement.remove();
    //             alert('Its previous');


    //         })
    //     });



    // }
}

function btnAdd() {

    btn_add.addEventListener('click', function () {


        let tr = document.createElement('tr');
        let th = document.createElement('th');
        tr.append(th);
        let td1 = document.createElement('td');
        td1.innerText = thing.value;
        tr.append(td1);

        let td2 = document.createElement('td');
        td2.setAttribute('id', 'cost');
        td2.innerText = amount.value;
        tr.append(td2);

        if (td1.innerText !== '' && td2.innerText !== '') {


            // alert(td2.innerText);


            let td3 = document.createElement('td');
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            td3.append(deleteBtn);
            tr.append(td3);


            table_body.append(tr);
            let x = 0;
            document.querySelectorAll('#cost').forEach(element => {
                x += Number(element.innerText);
            });
            // alert(x);

            document.getElementById('total-cost').innerText = x;
            
            // document.querySelectorAll('#table-boby th').forEach((element, index) => {
            //     element.innerText= index + 1;
            // });

            let aNewArray= document.querySelectorAll('#table-boby th');
            for(let i=0; i<aNewArray.length; i++){
               aNewArray[i].innerText = i+1;
            }

            thing.value = '';
            amount.value = '';
            // const rows= document.querySelectorAll('#table-boby tr');
            //  rows.forEach((row, index) => {
            // row.querySelector('th').innerText = index + 1;
            //  });

            newAdded = true;
            itemDeleteArray1 = document.querySelectorAll('#table-boby button');
            itemDeleteArray = itemDeleteArray1;
            tableContainer1 = document.getElementById('table-boby');
            tableContainer = tableContainer1;


            HandleCheck();



        }







    });
}
HandleCheck();
btnAdd();

function totalCost() {

    arrayOfTr = document.querySelectorAll('#cost');
    arrayOfTr.forEach(element => {
        sum += Number(element.innerText);
        document.getElementById('total-cost').innerText = sum;

    });


}
// totalCost();








// document.getElementById('table-boby').addEventListener('click', function(event){
//     // console.log(event.target);
//     console.log(event.target.parentElement.parentElement);
//     event.target.parentElement.parentElement.remove();
// })
