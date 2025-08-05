import "./App.css";
import { OrbitingCirclesSelf } from "./components/self/circles";
import { DockSelf } from "./components/self/dock";
import { LensSelf } from "./components/self/footprint";
import { MarqueeSelf } from "./components/self/marquee";

function App() {
  return (
    <>
      <div>
        <DockSelf />
        <OrbitingCirclesSelf />
        <MarqueeSelf />
        <LensSelf />
      </div>
    </>
  );
}

export default App;
