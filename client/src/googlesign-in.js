import { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig'; // Assuming your Firebase configuration is stored in firebaseConfig.js

const GoogleSignInButton = () => {
  // Get the Firebase Auth instance
  const auth = getAuth(app);

  // Function to handle Google Sign-In
  const signInWithGoogle = async () => {
    try {
      // Create a new instance of the GoogleAuthProvider
      const provider = new GoogleAuthProvider();

      // Sign in with Google using a pop-up window
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  // Attach click event listener to Google Sign-In button
  useEffect(() => {
    const googleSignInButton = document.getElementById('googleSignInButton');
    if (googleSignInButton) {
      googleSignInButton.addEventListener('click', signInWithGoogle);
    }

    return () => {
      if (googleSignInButton) {
        googleSignInButton.removeEventListener('click', signInWithGoogle);
      }
    };
  }, []);

  return (
    <button id="googleSignInButton">
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
