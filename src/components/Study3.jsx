import { RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { useControls } from "leva";
export default function Study3() {
  const leve = useControls({
    bounces: { value: 2, min: 1, max: 10, step: 0.1 },
    aberrationStrength: { value: 0.03, min: 0.01, max: 1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10, step: 1 },
    fresnel: { value: 1, min: 1, max: 10, step: 1 },
  });
  const texture = useLoader(
    RGBELoader,
    "./images/hdrs/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <CubeCamera resolution={1024} frames={1} envMap={texture}>
        {(texture) => (
          <mesh>
            <dodecahedronGeometry />
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
              bounces={2}
              aberrationStrength={0.03}
              ior={2.75}
              fresnel={1}
              color="white"
              fastChroma={true}
              {...leve}
            />
          </mesh>
        )}
      </CubeCamera>
    </>
  );
}
