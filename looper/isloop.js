'use strict';

//Complete this algo
const isLoop = linkedlist => {
  // console.log('here', linkedlist.head);
  let head = linkedlist.head;
  // let next = head.next
  let jump1 = head.next;
  let jump2 = head.next.next;

  if (linkedlist.head === linkedlist.tail) {
    return false;
  } else {
    while (jump1 !== jump2) {
      if (!jump1.next || !jump2.next) {
        return false;
      }
      jump1 = jump1.next;
      jump2 = jump2.next.next;
    }
    return true;
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
