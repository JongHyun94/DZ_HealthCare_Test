import Contact from "./views/Contact";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

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
