const targetElement = document.querySelector("form");
const senderInputElement = targetElement.querySelector("#idSender");
const recipientInputElement = targetElement.querySelector("#idRecipient");
const issueInputElement = targetElement.querySelector("#idIssue");
const bodyInputElement = targetElement.querySelector("#idBody");
const addFileInputElement = targetElement.querySelector("#idAddFile");
const checkboxInputElement = targetElement.querySelector("#idCheckbox");
const dateAndTimeInputElement = targetElement.querySelector("#idDateAndTime");
const buttonInputElement = targetElement.querySelector("#idButton");

let sender;
let recipient;
let issue;
let body;
let file;
let programmed;
let dateAndTime;

targetElement.addEventListener("input", (event) => {
  switch (event.target) {
    case senderInputElement:
      sender = event.target.value;
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

const validateForm = () => {
  console.log(sender, recipient, issue, body);
};
