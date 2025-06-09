class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    head

    print() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }

    printRecursive(node) {
        if (!node) {
            return;
        }
        
        console.log(node.data);
        this.printRecursive(node.next);
    }

    reverse() {
        let prev=null, current=this.head, next = this.head.next;
    
        while(current) {
            current.next = prev;
            prev = current;
            current = next;
            next = current?.next ?? null;
        }
        
        this.head = prev;
    }

    load(limit = 10, circleAt = null) {
        let current = null;
        let circleNode = null;

        for(let i=1; i<=limit; i++) {
            if (!this.head) {
                this.head = new Node(i);
                current = this.head;
                continue;
            }
            
            current.next = new Node(i);
            current = current.next;

            if (i === circleAt) {
                circleNode = current;
            }
        }

        current.next = circleNode;
    }

    detectCycle() {
        let slow = this.head, fast = this.head;
        while(slow) {
            slow = slow.next;
            fast = fast?.next?.next;

            if(slow === fast) {
                slow = this.head;
                while(slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
            
        }
        return null;
    }

    removeCycle() {
        const cycleStartNode = this.detectCycle();

        if(cycleStartNode === null) return null;

        let currentNode = cycleStartNode;

        while(cycleStartNode !== currentNode.next) {currentNode = currentNode.next;}

        currentNode.next = null;
    }
}


const list = new SinglyLinkedList();

list.load(10);
list.removeCycle();
list.print();


