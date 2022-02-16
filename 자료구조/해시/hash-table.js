function Node(key, data) {
  this.key = key;
  this.data = data;
  this.next = null;
}

function HashTable(size) {
  Array.call(this);
  this.size = size;
}
HashTable.prototype = Object.create(Array.prototype);
HashTable.prototype.constructor = HashTable;

HashTable.prototype.set = function (key, value) {
  const addr = this.hash(key, key.length);
  const newNode = new Node(key, value);

  if (this[addr] === undefined) {
    this[addr] = newNode;
  } else {
    let temp = this[addr];
    newNode.next = temp;
    this[addr] = newNode;

    console.log(`충돌 발생: Key(${key}), Address(${addr})`);
  }
};

HashTable.prototype.get = function (key) {
  const addr = this.hash(key, key.length);

  if (this[addr] === undefined) {
    return null;
  }
  let current = this[addr];
  while (true) {
    if (current.key === key) {
      return current.data;
    }
    if (current.next === null) return null;
    else current = current.next;
  }
};

HashTable.prototype.hash = function (key, keylen) {
  let hash = 0;
  for (let i = 0; i < keylen; i++) {
    hash = hash + key[i].charCodeAt(0);
  }
  return hash % this.size;
};

const ht = new HashTable(12289);
ht.set('NAVE', '네이버');
ht.set('KAKA', '카카오');
ht.set('LINE', '라인');
ht.set('COUP', '쿠팡');
console.log(ht.get('KAKA'));
