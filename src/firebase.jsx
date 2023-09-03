import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCQwaS3_NsOYKqnNxOLbiGEh7r81nRKRfw",
  authDomain: "happypawsbd-6c3d6.firebaseapp.com",
  projectId: "happypawsbd-6c3d6",
  storageBucket: "happypawsbd-6c3d6.appspot.com",
  messagingSenderId: "1069879445379",
  appId: "1:1069879445379:web:5190395e55790b278ad8b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
