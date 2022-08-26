// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  //TODO: Adicione SDKs para produtos do Firebase que você deseja usar
  // https://firebase.google.com/docs/web/setup#available-libraries

  // A configuração do Firebase do seu app da Web
const firebaseConfig = {
    apiKey: "AIzaSyBHCwmQNdP1gr0AePQL1GkFrD9l1V0We5c",
    authDomain: "projeto-teste-c1760.firebaseapp.com",
    projectId: "projeto-teste-c1760",
    storageBucket: "projeto-teste-c1760.appspot.com",
    messagingSenderId: "375306465401",
    appId: "1:375306465401:web:66afab54b9c25b81f964a8"
};

  // Inicializar o Firebase

const app = initializeApp(firebaseConfig);

export default app;