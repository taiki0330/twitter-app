import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../../firabase';
import './SignOut.css';

function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()} className="signout" fullWidth>
        <p>サインアウト</p>
      </Button>
    </div>
  );
}

export default SignOut;
