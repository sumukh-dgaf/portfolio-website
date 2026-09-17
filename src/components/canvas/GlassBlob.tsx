"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function GlassBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 12), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    target.current.x = (state.pointer.x * viewport.width) / 8;
    target.current.y = (state.pointer.y * viewport.height) / 8;

    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.x += delta * 0.04;

    meshRef.current.position.x += (target.current.x - meshRef.current.position.x) * 0.03;
    meshRef.current.position.y += (target.current.y - meshRef.current.position.y) * 0.03;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#b98cff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#5b7cff" />
      <pointLight position={[0, 2, 3]} intensity={0.6} color="#ffffff" />

      {/* Soft colored panels behind the blob give the transmission material
          something to refract — three.js renders the live scene into the
          material's transmission buffer, so no environment map is needed. */}
      <mesh position={[-1.6, 0.6, -2.4]}>
        <planeGeometry args={[2.6, 2.6]} />
        <meshBasicMaterial color="#5b7cff" transparent opacity={0.5} />
      </mesh>
      <mesh position={[1.8, -0.8, -2.8]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color="#b98cff" transparent opacity={0.45} />
      </mesh>

      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef} geometry={geometry}>
          <meshPhysicalMaterial
            roughness={0.15}
            metalness={0}
            transmission={1}
            thickness={1.4}
            ior={1.4}
            envMapIntensity={1.4}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#dfe6ff"
          />
        </mesh>
      </Float>

      <Sparkles count={60} scale={[6, 6, 6]} size={2} speed={0.25} opacity={0.4} color="#8ba4ff" />
    </>
  );
}
