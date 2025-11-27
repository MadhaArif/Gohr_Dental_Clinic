'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function ToothModel({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Main tooth body */}
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={[0.8, 1.2, 0.8]}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[1.2, 32, 32]} scale={[0.8, 1.2, 0.8]}>
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}
