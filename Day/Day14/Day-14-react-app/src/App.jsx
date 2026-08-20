import './App.css';
import ClickDemo from "./components/EventHandlerOne";
import FromDemo from "./components/EventHandlerTwo";
import ActionButtonDemo from "./components/EventHandlerThree";
import SimpleList from "./components/LitsAndKeysOne";
import UserListHook from "./components/HookOne";
import ThemeProviderDemo from "./components/HookTwo";
function App() {
  return (
    <>
    <ClickDemo/>
    <FromDemo/>
    <ActionButtonDemo/>
    <SimpleList/>
    <UserListHook/>
    <ThemeProviderDemo/>
   </>
  )
}

export default App
