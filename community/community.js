let currentUser = "User1"; // Default user

function switchUser() {
  currentUser = currentUser === "User1" ? "User2" : "User1";
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messagesContainer = document.getElementById("messages");

  const messageText = messageInput.value.trim();
  if (messageText !== "") {
    const messageElement = createMessage(currentUser, messageText);
    messagesContainer.appendChild(messageElement);
    messageInput.value = "";

    // Switch user for the next message
    switchUser();
  }
}

function createMessage(username, text) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `<strong>${username}:</strong><p>${text}</p>`;
  return messageElement;
}
