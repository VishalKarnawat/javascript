/*
*  Author : Vishal Karnawat
*/

const API = "https://jsonplaceholder.typicode.com/users";

const getFacts = () => {
    fetch(API)
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data); 
        })
        .catch((error) => console.log(error));
}

getFacts();
