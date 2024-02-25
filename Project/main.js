var chat = document.querySelector("#chat>ul");

// Função para adicionar uma nova mensagem ao chat
function addMessageToChat(message, className) {
         var newMessage = document.createElement("div");
         newMessage.classList.add('containerMessage')
         var span = document.createElement("span");
         span.textContent = message;
         span.classList.add("message");
         if (className) {
             span.classList.add(className);

         }
         newMessage.appendChild(span);
         chat.appendChild(newMessage);


         var img = document.createElement("img");
         img.setAttribute('src','./assets/moon.png');
         newMessage.appendChild(img);


     }

     // Configuração do evento onJoin para exibir uma mensagem quando um usuário entra no chat
     ComfyJS.onJoin = (user, self, extra) => {
         var message = `${user} entrou no chat!`;
         addMessageToChat(message, "user-join");
         
     };


ComfyJS.onChat = (user, message, flags, self, extra) => {
 
 var newMessage = document.createElement("li");
 var userElement = document.createElement("span");
 var messageElement = document.createElement("span");

 userElement.classList.add('user');
 

 userElement.innerText = user + ':';
 messageElement.innerText = message;

 newMessage.appendChild(userElement);
 newMessage.appendChild(messageElement);

 chat.appendChild(newMessage); 

} 

ComfyJS.Init("dallight");