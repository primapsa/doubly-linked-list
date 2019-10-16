const Node = require('./node');

class LinkedList {
    
    constructor() {
        this._head = null;
        this._tail = null;   
        this.length = 0;     
    }

    append(data) {
        let element = new Node();
        element.data = data;
      if(!this._head) {
      this._head = element;
      this._tail = element;
      }
      else {      
      element.prev = this._tail;
      this._tail.next = element;
      this._tail = element
      }
      this.length++;   
      return this;  
      
     
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
      let indx = this._head;
      for(let j=0; j<index; j++){
        indx = indx.next;
      }
      return indx.data;
    }

    insertAt(index, data) {
      let indx = this._head;     
      for(let j=0; j<=index; j++){
       indx;
        if(j == index-1){
          let node = new Node();
           node.data = data;        
          node.prev = indx;        
          node.next = indx.next;
          indx.next = node;
          indx.next.prev = node;        
          break;    
        }
        indx = indx.next;
      }  
      return this;   
    }

    isEmpty() {
      if(this.length == 0) return true;
      return false;
    }

    clear() {
      this._head.data = null;
      this._tail.data = null;
      this.length = 0;
      return this;  
    }

    deleteAt(index) {
      let head = this._head;
      if(index == 0){
        this._head.prev = null;
        this._head.next = this._head;
      }
      else{
        for(let i = 0; i <= index; i++){
          head = head.next;
          if(i == index-1){           
           head.prev.next = head.next;
           head.next.prev = head.prev.next;
           break;
          }  
        }        
      }
      if(index == this.length){
        this._tail.next = null;
        this._tail.prev = this._tail;
      }
      return this;  
    }

    reverse() {  
      let head = this._head, nextHead;
      let prevHead = this._head.prev;
      if(this.length > 1){
        for (let i = 0; i < this.length; i++){
        nextHead = head.next;
        head.next = prevHead;
        head.prev = nextHead;
        prevHead = head;
        head = nextHead;   
        }
        this._tail = this._head
        this._head = prevHead
      }
      return this;  
    }

    indexOf(data) {
      let head = this._head;
      for(let i = 0; i < this.length; i++){
        if(head.data == data){
          return i;
        }
        head = head.next;
      }
      return -1;
      
    }
}

module.exports = LinkedList;
