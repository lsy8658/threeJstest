import { useLoader } from "@react-three/fiber";
import { CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useControls } from "leva";
export default function Study3() {
  const leve = useControls({
    // bounces: { value: 2, min: 1, max: 10, step: 0.1 },
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[1.4, 128, 128]} />
        <meshStandardMaterial transparent={true} opacity={0.2} />
      </mesh>
      <mesh scale={0.3}>
        <torusGeometry args={[0.5, 0.2, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
