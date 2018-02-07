const LinkedList = require('./hw-node');

let list;
function setUpList() {
    list = new LinkedList(1, 23, 44, 'dsfs',{});
}
setUpList();
console.log(list.toString());
list.sort();
console.log(list.toString());

//a = [32,234,21,313];
//list.current = list.get(0,false);
for(let i of list){
    console.log(i.data);
}