abstract class House {
  constructor( public door: boolean ) {
  }
}

class Key extends House {
  constructor(public key: string) {
    super(true);
  }
  checkDoor() {
    console.log(this.door);
  }
}

const myKey = new Key('some key');
myKey.checkDoor();