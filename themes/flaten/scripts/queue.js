/**
 * A simple queuing function to enqueue functions
 *
 * @author Marvin Heilemann <marvin.heilemann@googlemail.com>
 * @version 1.0
 */

class Queue {

  constructor(autorun = false) {
    this.running = false;
    if (typeof autorun !== "undefined") {
      this.autorun = autorun;
    }
    this.queue = []; //initialize the queue
  }

  add(callback) {
    const _this = this;
    //add callback to the queue
    this.queue.push(() => {
      var finished = callback();
      if (typeof finished === "undefined" || finished) {
        //  if callback returns `false`, then you have to
        //  call `next` somewhere in the callback
        _this.next();
      }
    });

    if (this.autorun && !this.running) {
      // if nothing is running, then start the engines!
      if (Number.isInteger(this.autorun)) {
        this.nextTimeout();
      } else {
        this.next();
      }
    }

    return this; // for chaining fun!
  }

  dequeue() {
    this.running = false;
    //get the first element off the queue
    var shift = this.queue.shift();
    if (shift) {
      this.running = true;
      shift();
    }
    return shift;
  }

  next() {
    this.dequeue();
  }

  nextTimeout() {
    const _this = this;
    setTimeout(function () {
      // start the queue
      _this.next();
    }, this.autorun);
  }
}
