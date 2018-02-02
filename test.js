// function Node(data) {
//     this.data = data;
//     this.next = null;
// }
// function SinglyList() {
//     this._lenght = 0;
//     this.head = null;
// }
//
// SinglyList.prototype.add = function (value) {
//     var node = new Node(value), currentNode = this.head;
//     if(!currentNode){
//         this.head = node;
//         this._lenght++;
//
//         return node;
//     }
//
//     while(currentNode.next){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = currentNode;
//     this._lenght++;
//     return node;
// };
//
// SinglyList.prototype.searchNodeAt = function (position) {
//   var currentNode = this.head,
//       length = this._lenght,
//       count = 1,
//       message = {failure: 'Failure: non-existent node in this list.'};
//   if(length===0 || position<1 || position>length){
//       throw new Error(message.failure);
//   }
//   while (count<position){
//       currentNode = currentNode.next;
//       count++;
//   }
//
//   return currentNode;
//
// };
//
// SinglyList.prototype.remove = function (position) {
//     var currentNode = this.head,
//         length = this._lenght,
//         count = 0,
//         message = {failure: 'Failure: non-existent node in this list.'},
//         beforeNodeToDelete = null,
//         nodeToDelete = null,
//         deletedNode = null;
//
//     if(position<0||position>length){
//         throw new Error(message.failure);
//     }
//
//     if(position===1){
//         this.head = currentNode.next;
//         deletedNode = currentNode;
//         currentNode = null;
//         this._lenght--;
//
//         return deletedNode;
//     }
//     while (count < position){
//         beforeNodeToDelete = currentNode;
//         nodeToDelete = currentNode.next;
//         count++;
//     }
//     beforeNodeToDelete.next = nodeToDelete.next;
//     deletedNode = nodeToDelete;
//     nodeToDelete = null;
//     this._lenght--;
//
//     return deletedNode;
// };
//
//
// var list= new SinglyList();
//  list.add("sadasd");
//  list.add(324);
// // list.add({a:'asd',b:'asd'});
// console.log(list._lenght);
// console.log(list.searchNodeAt(1));
// console.log(list.remove(2));
// console.log(list._lenght);