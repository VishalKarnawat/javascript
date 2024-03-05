/*
*  Author : Vishal Karnawat
*/

const API = "https://jsonplaceholder.typicode.com/users";

const getFacts = async () => {
    let x = await fetch(API)
        const data= await x.json()
        console.log(data);
}

getFacts();
