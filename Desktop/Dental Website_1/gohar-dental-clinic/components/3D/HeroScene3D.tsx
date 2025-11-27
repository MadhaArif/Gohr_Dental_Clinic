'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface HeroScene3DProps {
  cameraPosition?: [number, number, number];
  className?: string;
}

// Visible tooth model based on your reference image
function VisibleToothModel() {
  const toothRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (toothRef.current) {
      // Gentle floating animation
      toothRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.03;
      // Slow, smooth rotation
      toothRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={toothRef} position={[0, 0, 0]}>
      {/* Main tooth crown - bright white */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.0}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Root - slightly off-white */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.6, 0.5, 1.2, 32]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.2} 
          metalness={0.0}
        />
      </mesh>
    </group>
  );
}

export function HeroScene3D({ 
  cameraPosition = [0, 0, 3.5], 
  className = ''
}: HeroScene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={55} />
        <Suspense fallback={null}>
          {/* Better lighting setup for visibility */}
          <ambientLight intensity={0.8} />
          <spotLight 
            position={[5, 5, 5]} 
            angle={0.3} 
            penumbra={1} 
            intensity={2} 
            color="#ffffff"
          />
          <spotLight 
            position={[-5, -5, -5]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1} 
            color="#ffffff"
          />
          
          {/* Visible tooth model as the centerpiece */}
          <VisibleToothModel />
        </Suspense>
      </Canvas>
    </div>
  );
}