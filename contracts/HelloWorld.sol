pragma solidity >= 0.7.3;

contract HelloWorld {
  event UpdateMessages(string oldStr, string newStr);

  string public message;

  constructor(string memory initMessage) {
    message = initMessage;
  }

  function update(string memory newMessage) public {
    string memory oldMessage = message;
    message = newMessage;
    emit UpdateMessages(oldMessage, newMessage);
  }

}