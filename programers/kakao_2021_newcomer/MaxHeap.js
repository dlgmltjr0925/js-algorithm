class MaxHeap {
  data = [];

  push(value) {
    this.data.push(value);

    let childIndex = this.data.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.data[parentIndex] < this.data[childIndex]) {
      this.swap(parentIndex, childIndex);

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  pop() {
    const value = this.data[0];
    this.data[0] = this.data.pop();

    let parentIndex = 0;
    let childIndex = parentIndex * 2 + 1;
    if (this.data[childIndex] < this.data[childIndex + 1]) {
      childIndex++;
    }

    while (this.data[parentIndex] < this.data[childIndex]) {
      this.swap(parentIndex, childIndex);

      parentIndex = childIndex;
      childIndex = parentIndex * 2 + 1;
      if (this.data[childIndex] < this.data[childIndex + 1]) {
        childIndex++;
      }
    }

    return value;
  }

  log() {
    console.log(this.data);
  }

  swap(p, c) {
    [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
  }
}

const maxHeap = new MaxHeap();

maxHeap.push(10);
maxHeap.log(); // [ 10 ]

maxHeap.push(2);
maxHeap.log(); // [ 10, 2 ]

maxHeap.push(5);
maxHeap.log(); // [ 10, 2, 5 ]

maxHeap.push(4);
maxHeap.log(); // [ 10, 4, 5, 2 ]

maxHeap.push(1);
maxHeap.log(); // [ 10, 4, 5, 2, 1 ]

maxHeap.pop();
maxHeap.log(); // [ 5, 4, 1, 2 ]

maxHeap.pop();
maxHeap.log(); // [ 4, 2, 1 ]
