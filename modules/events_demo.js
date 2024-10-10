import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log("====================================");
  console.log(`Hello ${name}😃`);
};

const goodByeHandler = (name) => {
  console.log(`Good bye ${name}👋🏽`);
  console.log("====================================");
};

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

myEmitter.emit("greet", "Jane");
myEmitter.emit("goodbye", "June");

//==== Listening for error event
myEmitter.on("error", (err) => {
  console.log("====================================");
  console.log(`An error occured`);
  console.log("====================================");
});
