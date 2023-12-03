import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Study4 from "./components/Study4";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>...loading</p>}>
        <Canvas>
          {/* camera={{ far: 6, near: 3.5 }} */}
          <OrbitControls />
          <ambientLight intensity={0.2} />
          <directionalLight position={[0, 1, 0]} />
          <directionalLight position={[1, 2, 8]} intensity={0.7} />
          <Study4 />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
