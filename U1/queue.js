
/* Queues -- A FIFO data structure ! ie First In First Out; Uses 1> Background tasks; 2> Printing/Task; 3> Uploading resource
4> Process . Enqueue - Adding element to queue; Dequeue - Removing element to queue
BIG-O Insertion -O(1); Removal -O(1); Searching -O(N); Access -O(N)*/
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queues {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode; 
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}