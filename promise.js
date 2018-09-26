// I want to fetch the data from the API using fetch('') API: we will use jsonplaceholder
// The JsonAPI returns the promise

const promise = fetch('https://jsonplaceholder.typicode.com/posts');

promise.then(function(res){
    // console.log(res); This here is again a promise, so we have to return it and use another then to get the data
    return res.json(); // We are returning a Promise again which will now be resolved for the data
}).then(data => {
    console.log(data)
})
.catch(err=>console.log(err));
