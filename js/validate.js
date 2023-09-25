const formElement = document.querySelector(".form");
const senderInputElement = formElement.querySelector("#idSender");
const recipientInputElement = formElement.querySelector("#idRecipient");
const issueInputElement = formElement.querySelector("#idIssue");
const bodyInputElement = formElement.querySelector("#idBody");
const addFileInputElement = formElement.querySelector("#idAddFile");
const checkboxInputElement = formElement.querySelector("#idCheckbox");
const dateAndTimeInputElement = formElement.querySelector("#idDateAndTime");
const buttonInputElement = formElement.querySelector("#idButton");

let sender;
let recipient;
let issue;
let body;
let file;
let programmed;
let dateAndTime;

formElement.addEventListener("input", (event) => {
  switch (event.target) {
    case senderInputElement:
      sender = event.target.value;
      console.log(sender);
      break;
    case recipientInputElement:
      recipient = event.target.value;
      break;
    case issueInputElement:
      issue = event.target.value;
      break;
    case bodyInputElement:
      body = event.target.value;
      break;
    case addFileInputElement:
      file = event.target.value;
      break;
    case checkboxInputElement:
      programmed = event.target.value;
      break;
    case dateAndTimeInputElement:
      dateAndTime = event.target.value;
      break;
  }
});
