// Hash map with separate chaining. Average O(1) set / get / delete.
export default class HashMap {
  constructor(size = 8) {
    this.size = size;
    this.count = 0;
    this.buckets = Array.from({ length: size }, () => []);
  }

  hash(key) {
    let h = 7;
    for (const c of String(key)) h = (h * 31 + c.charCodeAt(0)) % this.size;
    return h;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];
    const entry = bucket.find((p) => p[0] === key);
    if (entry) { entry[1] = value; return false; }
    bucket.push([key, value]);
    this.count++;
    if (this.count / this.size > 0.75) this.grow();
    return true;
  }

  get(key) {
    const entry = this.buckets[this.hash(key)].find((p) => p[0] === key);
    return entry ? entry[1] : undefined;
  }

  has(key) { return this.get(key) !== undefined; }

  delete(key) {
    const bucket = this.buckets[this.hash(key)];
    const i = bucket.findIndex((p) => p[0] === key);
    if (i < 0) return false;
    bucket.splice(i, 1);
    this.count--;
    return true;
  }

  // Double the table and re-insert everything when load factor > 0.75
  grow() {
    const old = this.buckets.flat();
    this.size *= 2;
    this.count = 0;
    this.buckets = Array.from({ length: this.size }, () => []);
    old.forEach(([k, v]) => this.set(k, v));
  }

  values() { return this.buckets.flat().map((p) => p[1]); }
}
