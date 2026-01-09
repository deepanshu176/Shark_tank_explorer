import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedShark = () => {
  const sharkRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (sharkRef.current) {
      sharkRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      sharkRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={sharkRef} scale={1.2}>
        {/* Body */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.4, 1.2, 8, 16]} />
          <MeshDistortMaterial
            color="#1e40af"
            roughness={0.3}
            metalness={0.8}
            distort={0.1}
            speed={2}
          />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 0.9, 0]}>
          <coneGeometry args={[0.35, 0.6, 8]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.7} />
        </mesh>
        
        {/* Dorsal Fin */}
        <mesh position={[0, 0.1, 0.35]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.2, 0.5, 4]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.8} />
        </mesh>
        
        {/* Tail */}
        <group ref={tailRef} position={[0, -0.9, 0]}>
          <mesh rotation={[0, 0, 0]}>
            <coneGeometry args={[0.3, 0.5, 4]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.7} />
          </mesh>
        </group>
        
        {/* Side Fins */}
        <mesh position={[0.35, 0.2, 0]} rotation={[0, 0, -0.5]}>
          <coneGeometry args={[0.1, 0.4, 4]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.7} />
        </mesh>
        <mesh position={[-0.35, 0.2, 0]} rotation={[0, 0, 0.5]}>
          <coneGeometry args={[0.1, 0.4, 4]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.7} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[0.2, 0.7, 0.2]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.2, 0.7, 0.2]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#60a5fa" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const Bubbles = () => {
  const bubblesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bubblesRef.current) {
      bubblesRef.current.children.forEach((bubble, i) => {
        bubble.position.y += 0.01 + i * 0.002;
        if (bubble.position.y > 3) {
          bubble.position.y = -2;
        }
      });
    }
  });

  return (
    <group ref={bubblesRef}>
      {[...Array(15)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 - 1,
            (Math.random() - 0.5) * 2 - 2
          ]}
        >
          <sphereGeometry args={[0.03 + Math.random() * 0.05, 16, 16]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.4}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const SharkScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
          <AnimatedShark />
          <Bubbles />
          <Environment preset="night" />
          <fog attach="fog" args={["#0c1929", 3, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SharkScene;
