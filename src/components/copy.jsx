import { useLoader } from "@react-three/fiber";
import { CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useControls } from "leva";
export default function Study3() {
  const leve = useControls({
    // bounces: { value: 2, min: 1, max: 10, step: 0.1 },
  });

  return (
    <>
      <mesh></mesh>
    </>
  );
}
