import { Button } from '@mui/material';
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firabase.js';
import './SignIn.css';

function SignIn() {
  function SignInWithGoogle() {
    provider.setCustomParameters({prompt: 'select_account'});
    signInWithPopup(auth, provider);
  }
  return (
    <div>
      <div className="signin">
        <h3>ログイン</h3>
        <Button onClick={SignInWithGoogle} className="signin_button">
          Googleでログインする
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
