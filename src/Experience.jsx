import { Environment, OrbitControls } from "@react-three/drei";
import Plane from "./Components/Plane.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <Plane />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
    </>
  );
}
