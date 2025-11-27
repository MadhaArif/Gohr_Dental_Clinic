'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Cylinder, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

export function DentalModels() {
  const implantGroup = useRef<THREE.Group>(null);
  const toothGroup = useRef<THREE.Group>(null);
  const toolsGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate implant model
    if (implantGroup.current) {
      implantGroup.current.rotation.y = time * 0.5;
      implantGroup.current.position.y = Math.sin(time * 2) * 0.1;
    }
    
    // Animate tooth whitening effect
    if (toothGroup.current) {
      toothGroup.current.rotation.y = time * 0.3;
      toothGroup.current.position.y = Math.cos(time * 1.5) * 0.15;
    }
    
    // Rotate dental tools
    if (toolsGroup.current) {
      toolsGroup.current.rotation.y = time * 0.2;
      toolsGroup.current.position.y = Math.sin(time) * 0.05;
    }
  });

  return (
    <>
      {/* Dental Implant Model */}
      <group position={[-2, 1, 0]} ref={implantGroup}>
        {/* Titanium implant post */}
        <Cylinder args={[0.15, 0.15, 0.8, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
        </Cylinder>
        
        {/* Abutment connector */}
        <Cylinder args={[0.2, 0.15, 0.3, 16]} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#a0a0a0" metalness={0.7} roughness={0.3} />
        </Cylinder>
        
        {/* Crown */}
        <group position={[0, 0.8, 0]}>
          <Box args={[0.4, 0.3, 0.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.1} />
          </Box>
          {/* Tooth-colored ceramic */}
          <Box args={[0.38, 0.28, 0.38]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f8f8f8" roughness={0.05} metalness={0.05} />
          </Box>
        </group>
        
        {/* Glow effect */}
        <Sphere args={[0.3, 16, 16]} position={[0, 0.8, 0]}>
          <meshBasicMaterial 
            color="#0ea5e9" 
            transparent 
            opacity={0.3} 
            side={THREE.BackSide}
          />
        </Sphere>
      </group>

      {/* Animated Tooth Whitening Effect */}
      <group position={[0, -1, 0]} ref={toothGroup}>
        {/* "Before" tooth - yellowish */}
        <group visible={true}>
          <Box args={[0.5, 0.7, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#e0c080" roughness={0.2} />
          </Box>
          {/* Enamel effect */}
          <Box args={[0.48, 0.68, 0.48]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f0d090" roughness={0.1} />
          </Box>
        </group>
        
        {/* Whitening particles */}
        {[...Array(8)].map((_, i) => (
          <Sphere 
            key={i} 
            args={[0.05, 8, 8]} 
            position={[
              Math.sin(i * Math.PI / 4) * 0.3,
              Math.cos(i * Math.PI / 4) * 0.3,
              0
            ]}
          >
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#67e8f9" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </Sphere>
        ))}
        
        {/* "Whitening" label */}
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.2}
          color="#67e8f9"
          anchorX="center"
          anchorY="middle"
        >
          Whitening
        </Text>
      </group>

      {/* Floating Dental Tools */}
      <group position={[2, 0.5, 0]} ref={toolsGroup}>
        {/* Dental mirror */}
        <group position={[0, 0.3, 0]}>
          <Cylinder args={[0.02, 0.02, 0.4, 8]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
          </Cylinder>
          <Sphere args={[0.1, 16, 16]} position={[0.2, 0, 0]}>
            <meshStandardMaterial color="#f0f0f0" metalness={0.8} roughness={0.1} />
          </Sphere>
        </group>
        
        {/* Dental scaler */}
        <group position={[0, -0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
          <Box args={[0.02, 0.3, 0.01]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#a0a0a0" metalness={0.8} roughness={0.2} />
          </Box>
          <Box args={[0.05, 0.02, 0.03]} position={[0, 0.15, 0]}>
            <meshStandardMaterial color="#c0c0c0" metalness={0.7} roughness={0.3} />
          </Box>
        </group>
        
        {/* Dental drill */}
        <group position={[0, -0.6, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <Cylinder args={[0.03, 0.03, 0.2, 12]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#808080" metalness={0.9} roughness={0.1} />
          </Cylinder>
          <Cylinder args={[0.01, 0.01, 0.1, 8]} position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#606060" metalness={0.95} roughness={0.05} />
          </Cylinder>
        </group>
      </group>
    </>
  );
}