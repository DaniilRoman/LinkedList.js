class LinkedList {


    constructor() {
        this.length = 0;
        this.head = new Node();
        this.tail = new Node();
        this.current = this.head;
        for (let i = 0; i < arguments.length; i++) {
            this.push(arguments[i]);
        }
    }


    get(position, flag = true) {
        let currentNode = this.head,
            length = this.length,
            count = 0,
            message = {failure: 'Failure: non-existent node in this list.'};
        if (length === 0 || position < 0 || position > length) {
            throw new Error(message.failure);
        }
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        if (flag) return currentNode.data;
        else return currentNode;
    };

    set(position, value) {
        if (position < 0 || position > this.length || this.length === 0) {
            throw new Error("Dont set Node")
        }
        let afterNode = this.get(position, false),
            beforeNode = afterNode.previous,
            node = new Node(value);
        node.previous = beforeNode;
        node.next = afterNode;
        beforeNode.next = node;
        afterNode.previous = node;

    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            let node = new Node(arguments[i]);
            if (this.length) {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
                this.length++;
            }
            else {
                this.head = node;
                this.tail = node;
                this.length++;
            }
        }
    };

    unshift() {
        for (let i = arguments.length - 1; i >= 0; i--) {
            let node = new Node(arguments[i]);
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    };

    pop() {
        let node = this.tail.data;
        this.tail = this.tail.previous;
        this.tail.next = null;
        this.length--;
        return node
    };

    shift() {
        let node = this.head.data;
        this.head = this.head.next;
        this.head.previous = null;
        this.length--;
        return node;
    };

    contains(value) {
        for (let i = 0; i < this.length; i++) {
            if (value === this.get(i)) return true
        }
        return false
    };

    toString() {
        let listStr = "[";
        for (let i = 0; i < this.length - 1; i++) {
            let data = this.get(i);
            listStr += JSON.stringify(data) + ", ";
        }
        listStr += JSON.stringify(this.get(this.length - 1)) + "]";
        return listStr;
    };

    reverse() {
        let tempList = new LinkedList();

        for (let i = 0; i < this.length; i++) {
            tempList.unshift(this.get(i));
        }

        this.tail = tempList.tail;
        this.head = tempList.head;
        return this
    };

    sort() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = i; j < this.length - i - 1; j++) {
                let value1 = this.get(j),
                    value2 = this.get(j + 1);
                if (value1 > value2) {
                    this.get(j, false).data = value2;
                    this.get(j + 1, false).data = value1;
                }
            }
        }
    }

    [Symbol.iterator]() {
        let current = this.current;
        let last = this.current.next;

        return {
            next() {
                if (last) {
                    this.current = last;
                    return {
                        done: false,
                        value: current
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        }
    }
}

function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

module.exports = LinkedList;