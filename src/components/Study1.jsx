import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
export default function Study1() {
  const mesh1 = useRef();
  const mesh2 = useRef();
  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  }, []);

  const mapcap = useTexture("/images/matcaps/2.png");
  const texture = useTexture("/images/matcaps/2.png");
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  return (
    <>
      <mesh ref={mesh1} position={[0.7, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.15, 256, 128]} />
        {/* <meshMatcapMaterial matcap={mapcap} flatShading={true} /> */}
        {/* <meshNormalMaterial /> */}
        <meshToonMaterial gradientMap={texture} />
      </mesh>
      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}
