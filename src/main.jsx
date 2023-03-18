import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_uQ9NJfAHwOB93jYhNElnavx2lzejDho",
  authDomain: "proyectoreact-20f80.firebaseapp.com",
  projectId: "proyectoreact-20f80",
  storageBucket: "proyectoreact-20f80.appspot.com",
  messagingSenderId: "574583373763",
  appId: "1:574583373763:web:4eed81defbacc3752f0776"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
