import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTexture, MeshReflectorMaterial } from "@react-three/drei";
export default function Study2() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  useEffect(() => {
    // mesh2.current.material = mesh1.current.material;
  }, []);

  const mapcap = useTexture("/images/matcaps/2.png");
  const texture = useTexture("/images/matcaps/2.png");
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  return (
    <>
      <mesh ref={mesh1} position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          mixBlur={1}
          mixStrength={30}
          roughness={1}
          depthScale={0.7}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <mesh ref={mesh2} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </>
  );
}
