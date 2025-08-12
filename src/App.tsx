import "./App.css";
import { OrbitingCirclesSelf } from "./components/self/circles";
import { DockSelf } from "./components/self/dock";
import { LensSelf } from "./components/self/footprint";
import { MarqueeSelf } from "./components/self/marquee";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 m-auto z-50">
        <DockSelf />
      </div>
      <div>
        <section id="zhiyog">
          <OrbitingCirclesSelf />
        </section>
        <section id="code">
          <MarqueeSelf />
        </section>
        <section id="fun">
          <LensSelf />
        </section>
      </div>
    </>
  );
}

export default App;
