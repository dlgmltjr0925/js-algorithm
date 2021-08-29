class MinHeap {
  data = [];

  push(value) {
    this.data.push(value);

    let childIndex = this.data.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.data[childIndex] < this.data[parentIndex]) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  pop() {
    this.data[0] = this.data.pop();

    let parentIndex = 0;
    let childIndex = parentIndex * 2 + 1;
    if (this.data[childIndex] > this.data[childIndex + 1]) {
      childIndex++;
    }

    while (this.data[parentIndex] > this.data[childIndex]) {
      this.swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = parentIndex * 2 + 1;
      if (this.data[childIndex] > this.data[childIndex + 1]) {
        childIndex++;
      }
    }
  }

  swap(p, c) {
    [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
  }

  log() {
    console.log(this.data);
  }
}

const minHeap = new MinHeap();

minHeap.push(10);
minHeap.log(); // [ 10 ]

minHeap.push(2);
minHeap.log(); // [ 2, 10 ]

minHeap.push(5);
minHeap.log(); // [ 2, 10, 5 ]

minHeap.push(4);
minHeap.log(); // [ 2, 4, 5, 10 ]

minHeap.push(1);
minHeap.log(); // [ 1, 2, 5, 10, 4]

minHeap.pop();
minHeap.log(); // [ 2, 4, 5, 10 ]

minHeap.pop();
minHeap.log(); // [ 4, 10, 5 ]
