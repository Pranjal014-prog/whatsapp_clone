import Messanger from "./components/Messanger.jsx";
import AccountProvider from "./contest/AccountProvider.jsx";
function App() {
  return (
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
  );
}

export default App;
