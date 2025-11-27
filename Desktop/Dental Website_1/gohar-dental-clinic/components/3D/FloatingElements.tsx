'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingElements() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Floating spheres */}
      <Sphere position={[3, 2, 0]} args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#0ea5e9" transparent opacity={0.6} />
      </Sphere>
      
      <Sphere position={[-3, -1, 1]} args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} />
      </Sphere>
      
      <Sphere position={[2, -2, -1]} args={[0.25, 32, 32]}>
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.7} />
      </Sphere>

      {/* Floating rings */}
      <Torus position={[-2, 1, -2]} args={[0.5, 0.1, 16, 32]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#0ea5e9" wireframe />
      </Torus>

      <Torus position={[1, 3, 1]} args={[0.4, 0.08, 16, 32]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <meshStandardMaterial color="#06b6d4" wireframe />
      </Torus>

      {/* Floating boxes */}
      <Box position={[-1, -3, 0]} args={[0.4, 0.4, 0.4]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.4} />
      </Box>
    </group>
  );
}
