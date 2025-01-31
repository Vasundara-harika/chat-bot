let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let inputEl = document.getElementById("userInput");
let Button = document.getElementById("sendMsgBtn");
let chatContainer = document.getElementById("chatContainer");

let count = 0;
Button.onclick = function() {
    let para = document.createElement("p");
    para.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    let inputElValue = inputEl.value;
    para.textContent = inputElValue;
    chatContainer.appendChild(para);
    inputEl.value = "";

    let paraC = document.createElement("p");
    paraC.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    let reply = chatbotMsgList[count];
    paraC.textContent = reply;
    chatContainer.appendChild(paraC);
    count = count + 1;

    if (count===chatbotMsgList.length){
        count=0;
    }
}