// setTimeout(() => {
//     console.log("Cuci baju"); // proses asynchronous
//   }, 2000);
//   setTimeout(() =>{
//   console.log("Proses 1");
// }, 3000);
// setTimeout(() =>{
//   console.log("Proses 2");
// }, 4000);
// setTimeout(()=>{
//   console.log("Proses 3");
// }, 5000);

//2. Concurent


//promise
let condition = true
let newPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve("So Jadi bree");
    } else { 
        reject("Gagal Bree");
    }
});

//2 cara menggunakan Promise
// //1. Then - catch
// newPromise
// .then((result) => `${result}!!!`)
// .then((result) => console.log(result2))
// .then((error) => console.log(error))
// .finally(() => console.log ("Pasti Akan di Jalankan"));
//2. Asyn - Await

// const getData = async()=> {
//     let result = await newPromise;
//     console.log(result);
// }

// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((Response)=> Response.json())
//     .then((json)=> console.log(json));

const getJSONPlaceholder = async () =>{
    let Response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await Response.json();
    console.log(Response);
};

getJSONPlaceholder();