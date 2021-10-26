class MaxHeap {
  queue = [];

  insert(n) {
    this.queue.push(n);

    if (this.queue.length < 2) return;

    let ci = this.queue.length - 1;
    let pi = ((ci - 1) / 2) >> 0;

    while (this.queue[pi] < this.queue[ci]) {
      this.swap(ci, pi);
      ci = pi;
      pi = ((ci - 1) / 2) >> 0;
    }
  }

  delete() {
    if (this.queue.length < 2) return this.queue.pop();

    const max = this.queue[0];

    this.queue[0] = this.queue.pop();
    let pi = 0;
    let ci = pi * 2 + 1;
    if (this.queue[ci + 1] && this.queue[ci] < this.queue[ci + 1]) ci++;

    while (this.queue[pi] < this.queue[ci]) {
      this.swap(ci, pi);
      pi = ci;
      ci = pi * 2 + 1;
      if (this.queue[ci + 1] && this.queue[ci] < this.queue[ci + 1]) ci++;
    }

    return max;
  }

  deleteN(n) {
    let ci = this.queue.lastIndexOf(n);
    if (ci === this.queue.length - 1) return this.queue.pop();
    this.swap(ci, this.queue.length - 1);
    this.queue.pop();

    let pi = ((ci - 1) / 2) >> 0;
    while (this.queue[pi] < this.queue[ci]) {
      this.swap(ci, pi);
      ci = pi;
      pi = ((ci - 1) / 2) >> 0;
    }
  }

  swap(i1, i2) {
    [this.queue[i1], this.queue[i2]] = [this.queue[i2], this.queue[i1]];
  }
}

class MinHeap {
  queue = [];

  insert(n) {
    this.queue.push(n);

    if (this.queue.length < 2) return;

    let ci = this.queue.length - 1;
    let pi = ((ci - 1) / 2) >> 0;

    while (this.queue[pi] > this.queue[ci]) {
      this.swap(ci, pi);
      ci = pi;
      pi = ((ci - 1) / 2) >> 0;
    }
  }

  delete() {
    if (this.queue.length < 2) return this.queue.pop();

    const max = this.queue[0];

    this.queue[0] = this.queue.pop();
    let pi = 0;
    let ci = pi * 2 + 1;
    if (this.queue[ci + 1] && this.queue[ci] > this.queue[ci + 1]) ci++;

    while (this.queue[pi] > this.queue[ci]) {
      this.swap(ci, pi);
      pi = ci;
      ci = pi * 2 + 1;
      if (this.queue[ci + 1] && this.queue[ci] > this.queue[ci + 1]) ci++;
    }

    return max;
  }

  deleteN(n) {
    let ci = this.queue.lastIndexOf(n);
    if (ci === this.queue.length - 1) return this.queue.pop();
    this.swap(ci, this.queue.length - 1);
    this.queue.pop();

    let pi = ((ci - 1) / 2) >> 0;
    while (this.queue[pi] > this.queue[ci]) {
      this.swap(ci, pi);
      ci = pi;
      pi = ((ci - 1) / 2) >> 0;
    }
  }

  swap(i1, i2) {
    [this.queue[i1], this.queue[i2]] = [this.queue[i2], this.queue[i1]];
  }
}

class DualPriorityQueue {
  maxHeap = new MaxHeap();
  minHeap = new MinHeap();

  insert(n) {
    this.maxHeap.insert(n);
    this.minHeap.insert(n);
  }

  deleteMax() {
    const max = this.maxHeap.delete();
    if (max !== undefined) this.minHeap.deleteN(max);
  }

  deleteMin() {
    const min = this.minHeap.delete();
    if (min !== undefined) this.maxHeap.deleteN(min);
  }

  get max() {
    return this.maxHeap.queue[0] || 0;
  }

  get min() {
    return this.minHeap.queue[0] || 0;
  }
}

function solution(operations) {
  const pq = new DualPriorityQueue();

  for (const operation of operations) {
    let [c, n] = operation.split(' ');
    n = parseInt(n);
    if (c === 'I') {
      pq.insert(n);
    } else if (n === 1) {
      pq.deleteMax();
    } else if (n === -1) {
      pq.deleteMin();
    }
  }

  return [pq.max, pq.min];
}
