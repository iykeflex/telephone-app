import Telephone from "./telephone.js";
import { PhoneNumberObserver, FixedMessageObserver } from "./observer.js";

const telephone = new Telephone();

telephone.addPhoneNumber("0817733854");
telephone.addPhoneNumber("07082161117");

const observer1 = new PhoneNumberObserver();
const observer2 = new FixedMessageObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.dialPhoneNumber("0708216117");

