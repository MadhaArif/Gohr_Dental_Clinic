'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ToothModel } from './ToothModel';
import { DentalModels } from './DentalModels';

interface Scene3DProps {
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  className?: string;
}

export function Scene3D({ 
  cameraPosition = [0, 0, 5], 
  enableControls = false,
  className = ''
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <ToothModel position={[0, 0, 0]} />
          <DentalModels />
          
          <Environment preset="city" />
          {enableControls && <OrbitControls enableZoom={false} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
