class MinHeap {
  data = [];

  push({ rt, d }) {
    this.data.push({ rt, d });

    if (this.data.length < 2) return;

    let childIndex = this.data.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.data[childIndex].d < this.data[parentIndex].d
    ) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  pop() {
    const value = { ...this.data[0] };

    if (this.data.length === 1) {
      this.data.pop();
      return value;
    }

    this.data[0] = this.data.pop();

    let parentIndex = 0;
    let childIndex = parentIndex * 2 + 1;
    if (
      this.data[childIndex + 1] &&
      this.data[childIndex].d > this.data[childIndex + 1].d
    ) {
      childIndex++;
    }

    while (
      this.data[childIndex] &&
      this.data[parentIndex].d > this.data[childIndex].d
    ) {
      this.swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = parentIndex * 2 + 1;
      if (
        this.data[childIndex + 1] &&
        this.data[childIndex].d > this.data[childIndex + 1].d
      ) {
        childIndex++;
      }
    }

    return value;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  swap(p, c) {
    [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
  }
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  const pq = new MinHeap();
  let i = 0;
  let current = jobs[0][0];
  let total = 0;

  while (i < jobs.length || !pq.isEmpty()) {
    while (i < jobs.length && jobs[i][0] <= current) {
      const [rt, d] = jobs[i++];
      pq.push({ rt, d });
    }

    if (!pq.isEmpty()) {
      const { rt, d } = pq.pop();
      total += current - rt + d;
      current += d;
    } else if (jobs[i]) {
      current = jobs[i][0];
    }
  }

  return Math.floor(total / jobs.length);
}
