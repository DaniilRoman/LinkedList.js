function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
function DoubleList() {
    this._length = 0;
    this.head = new Node();
    this.tail = new Node();

    for(var i=0;i<arguments.length;i++){
        this.add(arguments[i]);
    }
}

DoubleList.prototype.add = function (value) {
    var node = new Node(value);
    if(this._length){
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this._length++;

    return node;
};

DoubleList.prototype.get = function (position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
    if(length===0||position<1||position>length){
        throw new Error(message.failure);
    }
    while (count<position){
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

DoubleList.prototype.remove = function (position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.', success:'Success'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        afterNodeToDelete = null;
    if(length===0||position<1||position>length){
        throw new Error(message.failure);
    }
    if(position===1){
        this.head = currentNode.next;
        if(!this.head){
            this.head.previous = null;
        }else{
            this.tail = null;
        }
    }else if(position===this._length){
        this.tail = this.tail.previous;
        this.tail.next = null;
    } else {
        while (true){
            //currentNode = currentNode.next;
            count++;
            if(count<position){
                currentNode = currentNode.next;
            }else break

        }


        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        nodeToDelete = null;
    }

    this._length--;

    return message.success;

};

// DoubleList.prototype.set = function (position, value) {
//     length = this._length;
//     if(position<0||position>length)
// }

DoubleList.prototype.push = function () {
  for(var i=0;i<arguments.length;i++){
      var node = new Node(arguments[i]);
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this._length++;
  }
};
DoubleList.prototype.unshift = function () {
    for (var i = 0; i < arguments.length; i++) {
        var node = new Node(arguments[i]);
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
        this._length++;
    }
};

DoubleList.prototype.pop = function () {
    this.tail = this.tail.previous;
    this.tail.next = null;
    this._length--;
};

DoubleList.prototype.shift = function () {
    this.head = this.head.next;
    this.head.previous = null;
    this._length--;
};

DoubleList.prototype.contains = function (value) {
    for(var i = 1; i <= this._length; i++){
        if(value === this.get(i).data) return true
    }
    return false
};

DoubleList.prototype.toString = function () {
    listStr = "";
    for(var i = 1; i <= this._length; i++){
        data = this.get(i).data;
        listStr += JSON.stringify(data) + " => ";
    }
    return listStr;
};

DoubleList.prototype.reverse = function () {
    tempList = new DoubleList();

    for(i = 1;i<=this._length;i++){
        tempList.unshift(this.get(i).data);
    }

    this.tail = tempList.tail;
    this.head = tempList.head;

};





var list = new DoubleList("fsdf","dsfdf");
console.log(list._length);
 list.add("sadasd");
 list.add(324);
 list.add({a:'asd',b:'assad'});
// for (var i = 1; i <= list._length; i++) {
//     console.log(list.get(i));
// }
// console.log(list.get(5));
// console.log(list.get(2));
// console.log(list.remove(2));
console.log(list._length);
list.push("fdfdsf",7665);
console.log(list._length);
list.unshift({ad:"dasa",q:3143},1123,'asdaw');
console.log(list._length);
console.log(list.get(10));
list.pop();
console.log(list._length);
console.log(list.contains("2asdaw"));
console.log(list.toString());
list.reverse();
console.log(list.toString());