import Contact from "./views/Contact";
import "./App.css";
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <Contact/>
     </RecoilRoot>
    </>
  );
}

export default App;
