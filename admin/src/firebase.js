
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDNiTUbycgjYpUxLt7q-OTlpnUSN7CanTs",
    authDomain: "netflix-4a5cf.firebaseapp.com",
    projectId: "netflix-4a5cf",
    storageBucket: "netflix-4a5cf.appspot.com",
    messagingSenderId: "653395439825",
    appId: "1:653395439825:web:64f581f270c8561f79d5f0",
    measurementId: "G-8CT27G2E66"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const storage = getStorage(firebaseApp);

   export default storage;