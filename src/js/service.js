import callRow from './view';

export let display = () => {
	document.getElementById("tBody").innerHTML = "";
let getUrl = "http://localhost:3000/items";
fetch(getUrl)
.then((resp) => resp.json())
.then(data => {
data.map(bagItem =>{
	callRow(bagItem);
})

}
)
} 

export function putqty(id,qty){
const getUrl = 'http://localhost:3000/items/'+id;
fetch(getUrl)
.then(resp => resp.json())
.then((data) => {
let editedObject = Object.assign({},data,{
"qty" : qty
});
const putData = {
method: 'PUT', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, cors, *same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, same-origin, *omit
headers: {
'Content-Type': 'application/json; charset=utf-8',
// "Content-Type": "application/x-www-form-urlencoded",
},
redirect: 'follow', // manual, *follow, error
referrer: 'no-referrer', // no-referrer, *client
body: JSON.stringify(editedObject), // body data type must match "Content-Type" header
};
fetch(getUrl,putData)
.then(() => {

display();
})
})
}