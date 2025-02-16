import { PhoneNumberObserver, FixedMessageObserver } from "./observer.js";

class Telephone {
  constructor() {
    this.phoneNumbers = []; // List of added phone numbers
    this.observers = []; // List of observer instances
  }

  addPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.includes(phoneNumber)) {
      this.phoneNumbers.push(phoneNumber);
    }
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((num) => num !== phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}...`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
}

export default Telephone;

