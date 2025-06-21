const openDialogBox1 = document.getElementById('openDialogBox1');
const dialogBox1 = document.getElementById('dialogBox1');
const closeDialog1 = document.querySelector('#closeDialog1');

const openDialogBox2 = document.getElementById('openDialogBox2');
const dialogBox2 = document.getElementById('dialogBox2');
const closeDialog2 = document.querySelector('#closeDialog2');

const openDialogBox3 = document.getElementById('openDialogBox3');
const dialogBox3 = document.getElementById('dialogBox3');
const closeDialog3 = document.querySelector('#closeDialog3');

const openDialogBox4 = document.getElementById('openDialogBox4');
const dialogBox4 = document.getElementById('dialogBox4');
const closeDialog4 = document.querySelector('#closeDialog4');


//dialog Box 1
openDialogBox1.addEventListener('click',() =>{
dialogBox1.showModal();
});

closeDialog1.addEventListener('click', () => {
    dialogBox1.close();
});

//Dialog Box 2
openDialogBox2.addEventListener('click', () => {
    dialogBox2.showModal();
});

closeDialog2.addEventListener('click', () => {
    dialogBox2.close();
});
//dialog Box 3
openDialogBox3.addEventListener('click',() =>{
dialogBox3.showModal();
});

closeDialog3.addEventListener('click', () => {
    dialogBox3.close();
});

//Dialog Box 4
openDialogBox4.addEventListener('click', () => {
    dialogBox4.showModal();
});

closeDialog4.addEventListener('click', () => {
    dialogBox4.close();
});