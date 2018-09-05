// I want to fetch the data from the API using fetch('') API: we will use jsonplaceholder
// The JsonAPI returns the promise

const promise = fetch('https://jsonplaceholder.typicode.com/posts').
then(function(res){
    return res.json();
}).then(data => {
    console.log(data)
})
.catch(err=>console.log(err));
