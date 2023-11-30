import Main from './components/Main';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firabase';


function App() {

  const [ user ] = useAuthState(auth);

  return (
    <div>{user ? <Main /> : <SignIn />}</div>
  );
}

export default App;
