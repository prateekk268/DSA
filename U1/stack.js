/* Stack -- The last element added to the stack will be the first element to be removed from the stack.
Used in 1> Managing function invocation , 2> Undo/Redo , 3> Routing(this history object) is treated like a stack.
BIG-O Insertion O(1), Removal O(1), Searching O(N), Acess - O(N) */
class Node {
    constructor(val){
        this.val = val;
        this.next = this.next;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let removed = this.first;
        if(this.size===1){
            this.last = null;
        } else {
            this.first = removed.next;
            removed.next = null;
        }
        this.size--;
        return removed.val;
    }
}
