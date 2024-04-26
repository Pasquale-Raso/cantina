import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Plane() {
  const Plane = useGLTF("./models/plane.glb");
  console.log(Plane);

  return <primitive object={Plane.scene} />;
}

useGLTF.preload("./models/plane.glb");
