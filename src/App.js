import Messanger from "./components/Messanger.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./contest/AccountProvider.jsx";
function App() {
  const clientId='';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
      </GoogleOAuthProvider>
  );
}

export default App;
