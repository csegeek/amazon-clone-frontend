
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8L1oSuMIHDbgJ_mdm_O9qQ2DzTTNKnzg",
  authDomain: "clone-343e8.firebaseapp.com",
  projectId: "clone-343e8",
  storageBucket: "clone-343e8.appspot.com",
  messagingSenderId: "508040013102",
  appId: "1:508040013102:web:0af1a68ac930f0806006bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth=getAuth();

export{ app,auth};
