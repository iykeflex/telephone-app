::# Telephone Package - Observer Pattern

## Overview

This project implements a simple **Telephone** package using the **Observer Pattern** in JavaScript. The Telephone class allows adding, removing, and dialing phone numbers while notifying observers whenever a number is dialed.

## Features

- Add a phone number
- Remove a phone number
- Dial a phone number (only if added)
- Use the Observer Pattern to notify subscribers when a number is dialed
- Two observers:
  1. Prints the dialed phone number
  2. Prints a fixed message "Now Dialling 2347023232"

## Project Structure

```
/telephone-app
│── telephone.js         # Telephone class (Subject)
│── observer.js          # Observer classes
│── index.js             # Main execution file
│── README.md            # Project documentation
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/telephone-app.git
   cd telephone-app
   ```
2. Ensure you have **Node.js** installed.
3. Run the project using Node.js:
   ```sh
   node index.js
   ```

## Usage

### 1. Creating a Telephone Instance

```javascript
const telephone = new Telephone();
```

### 2. Adding & Removing Phone Numbers

```javascript
telephone.addPhoneNumber("2347023232");
telephone.removePhoneNumber("2347023232");
```

### 3. Dialing a Phone Number

```javascript
telephone.dialPhoneNumber("2347023232");
```

### 4. Adding Observers

```javascript
const observer1 = new PhoneNumberObserver();
const observer2 = new FixedMessageObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);
```

### 5. Observer Output

When dialing **2347023232**, the output will be:

```
Dialing 2347023232...
Observer 1: 2347023232
Observer 2: Now Dialling 2347023232
```

## Technologies Used

- JavaScript (ES6+)
- Node.js (for execution)

## Future Improvements

- Implement a UI using React
- Store phone numbers in a database
- Allow observers to be dynamically configured

## License

This project is open-source under the MIT License.

Feel free to customize this template to fit the specifics of your project! If there's anything more specific you'd like to add or change, let me know!

