// 키를 통해 데이터가 담긴 위치를 가져오는 극한의 성능 테이블
// 체이닝: 개방주소법 (충돌 시 테이블 외부에 데이터를 저장해 나가는 것)
// 폐쇄주소법 (충돌 시 테이블 내부에서 자리를 만들어 처리하는 것)

class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class HashTable extends Array {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }

  set(newData) {
    const address = this.hash(newData.key % this.maxSize);

    if (this[address] === undefined) {
      this[address] = newData;
    } else {
      let temp = this[address];
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newData;
      console.log(`Collision Occured: Key(${newData.key}), Address(${address})`);
    }
  }

  get(key) {
    const address = this.hash(key);

    if (this[address] === undefined) {
      return null;
    } else {
      let temp = this[address];
      while (temp.next !== null) {
        temp = temp.next;
      }
      return temp;
    }
  }

  hash(key) {
    return key % this.maxSize;
  }
}

console.time('해시테이블');
const ht = new HashTable(10);
ht.set(new Node(1, '데이터 A'));
ht.set(new Node(11, '데이터 B'));
ht.set(new Node(2, '데이터 C'));
console.log(ht.get(11));

console.timeEnd('해시테이블');
