class PhoneNumberObserver {
  notify(phoneNumber) {
    console.log(`Observer 1: ${phoneNumber}`);
  }
}

class FixedMessageObserver {
  notify(phoneNumber) {
    console.log("Observer 2: Now Dialling 2347023232");
  }
}

export { PhoneNumberObserver, FixedMessageObserver };

