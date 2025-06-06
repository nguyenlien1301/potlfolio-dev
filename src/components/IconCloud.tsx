import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Text,
  Float,
  OrbitControls,
  Points,
  PointMaterial,
} from '@react-three/drei';
import { Vector3 } from 'three';
import { skills } from '../data/skills';

// Tạo danh sách vị trí trên hình cầu
const createSpherePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    points[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(phi);
  }
  return points;
};

// Hạt bên ngoài quả cầu (tạo hiệu ứng sống động)
const createParticleField = (count: number, area: number, sizeFactor = 1) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * area;
    positions[i * 3 + 1] = (Math.random() - 0.5) * area;
    positions[i * 3 + 2] = (Math.random() - 0.5) * area;
  }
  return positions;
};

// Hạt tạo thành quả cầu
const globeParticles = createSpherePoints(2500, 3.5);

// Hạt nhỏ bay xung quanh
const smallParticles = createParticleField(5000, 15, 0.02);

// Hạt lớn hơn bay xung quanh
const largeParticles = createParticleField(1000, 20, 0.05);

// Hành tinh quay trên quỹ đạo
const OrbitingPlanet = ({ radius, speed, size, color }: any) => {
  const planetRef = useRef<any>();

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const time = clock.getElapsedTime() * speed;
      planetRef.current.position.x = Math.cos(time) * radius;
      planetRef.current.position.z = Math.sin(time) * radius;
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Mặt trời trung tâm
const Sun = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial emissive="#FFD700" emissiveIntensity={2} />
      <pointLight color="#ffaa00" intensity={3} distance={10} />
    </mesh>
  );
};

// Đường quỹ đạo của hành tinh
const createOrbitPath = (radius: number, segments: number) => {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    );
  }
  return points;
};

const SkillText = ({ position, children, fontSize = 0.4, color }) => {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <Text
        position={position}
        fontSize={fontSize}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
    </Float>
  );
};

const Cloud = ({ setCursor }: { setCursor: (state: boolean) => void }) => {
  const cloudRef = useRef<any>();
  const spherePoints = createSpherePoints(skills.length, 3.5);
  const orbits = [
    createOrbitPath(2, 100),
    createOrbitPath(3, 100),
    createOrbitPath(4, 100),
    createOrbitPath(5, 100),
  ];

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={cloudRef}>
      <Sun /> {/* Mặt trời trung tâm */}
      {skills.map((skill, i) => (
        <SkillText
          key={skill.name}
          position={
            new Vector3(
              spherePoints[i * 3],
              spherePoints[i * 3 + 1],
              spherePoints[i * 3 + 2]
            )
          }
          fontSize={0.35}
          color={skill.color}
        >
          {skill.name}
        </SkillText>
      ))}
      {/* Các hành tinh quay trên quỹ đạo */}
      <OrbitingPlanet radius={2} speed={0.5} size={0.15} color="#918E85" />
      <OrbitingPlanet radius={3} speed={0.3} size={0.2} color="#D9C29E" />
      <OrbitingPlanet radius={4} speed={0.2} size={0.25} color="#2A6F9B" />
      <OrbitingPlanet radius={5} speed={0.1} size={0.3} color="#C1440E" />
      {/* Vẽ đường quỹ đạo */}
      {orbits.map((points, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap((p) => p.toArray()))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            attach="material"
            color="#ffffff"
            opacity={0.4}
            transparent
          />
        </line>
      ))}
      {/* Hạt tạo thành quả cầu */}
      <Points positions={globeParticles} stride={3} frustumCulled>
        <PointMaterial
          color="#ffffff"
          size={0.02}
          transparent
          opacity={0.8}
          depthWrite={false}
        />
        <PointMaterial
          size={0.02}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </Points>
      {/* Hạt nhỏ bay xung quanh */}
      <Points positions={smallParticles} stride={3} frustumCulled>
        <PointMaterial
          color="#8888ff"
          size={0.02}
          transparent
          opacity={0.5}
          depthWrite={false}
        />
        <PointMaterial
          size={0.02}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </Points>
      {/* Hạt lớn hơn bay xung quanh */}
      <Points positions={largeParticles} stride={3} frustumCulled>
        <PointMaterial
          color="#ffcc00"
          size={0.05}
          transparent
          opacity={0.6}
          depthWrite={false}
        />
        <PointMaterial
          size={0.02}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </Points>
    </group>
  );
};

const IconCloud: React.FC = () => {
  const [cursor, setCursor] = useState(false);

  return (
    <div
      className="relative top-0 left-0 w-full h-full cursor-grab md:static md:w-full md:min-h-[350px]"
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        onPointerDown={() => setCursor(true)}
        onPointerUp={() => setCursor(false)}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <Cloud setCursor={setCursor} />
        <OrbitControls enableZoom={false} rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};

export default IconCloud;
