"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleWave() {
  const mesh = useRef<THREE.Points>(null!);
  
  const count = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        const y = 0;
        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    if (mesh.current) {
        // Simple wave animation
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            const x = positions[i * 3];
            const z = positions[i * 3 + 2];
            // Y = sin(x + time) + cos(z + time)
            positions[i * 3 + 1] = Math.sin(x + time * 0.3) * 0.5 + Math.cos(z + time * 0.2) * 0.5;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6" // Violet/Purple color
        sizeAttenuation={true}
        transparent
        opacity={0.5}
      />
    </points>
  );
}
