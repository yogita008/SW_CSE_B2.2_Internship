import './App.css';
import ClickDemo from "./components/EventHandlerOne";
import FromDemo from "./components/EventHandlerTwo";
import ActionButtonDemo from "./components/EventHandlerThree";
import SimpleList from "./components/LitsAndKeysOne";
import UserListHook from "./components/HookOne";
import ThemeProviderDemo from "./components/HookTwo";
import SimpleNameForm from "./components/FormOne";
import SignupForm from "./components/FormTwo";
import ValidatedForm from "./components/FormThree";
import GitHubProfile from "./components/GithubApi";
function App() {
  return (
    <>
    {/* <ClickDemo/>
    <FromDemo/>
    <ActionButtonDemo/>
    <SimpleList/>
    <UserListHook/>
    <ThemeProviderDemo/>
    <SimpleNameForm/>
    <SignupForm/>
    <ValidatedForm/> */}
    <GitHubProfile username="Yogita008"/>
   </>
  )
}

export default App
