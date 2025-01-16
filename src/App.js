import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Theme>
        <div className="App">
          <Posts />
        </div>
      </Theme>
    </>
  );
}

export default App;
