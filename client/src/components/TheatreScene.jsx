import { OrbitControls, PerspectiveCamera, SpotLight, Text, useVideoTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const screenPosition = new THREE.Vector3(0, 5, 18);

const ratingFromDistance = (distance) => {
  if (distance < 18) return 'Excellent';
  if (distance < 23) return 'Good';
  if (distance < 29) return 'Average';
  return 'Poor';
};

const TheatreMesh = ({ seats, selectedSeat, onSeatSelect, trailerUrl, onMetricsChange }) => {
  const videoTexture = useVideoTexture(trailerUrl || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', {
    loop: true,
    muted: true,
    start: true,
    crossOrigin: 'Anonymous'
  });

  const { camera } = useThree();
  const seatRefs = useRef({});

  useEffect(() => {
    if (!selectedSeat) return;

    const seatPosition = new THREE.Vector3(selectedSeat.position.x, 1.15, selectedSeat.position.z + 0.15);
    const angleFactor = Math.abs(selectedSeat.position.x) / 8;
    gsap.to(camera.position, {
      duration: 1.2,
      x: seatPosition.x,
      y: seatPosition.y,
      z: seatPosition.z,
      onUpdate: () => camera.lookAt(0, 5, 18)
    });

    const distance = seatPosition.distanceTo(screenPosition);
    onMetricsChange({
      seatNumber: `${selectedSeat.row}${selectedSeat.number}`,
      row: selectedSeat.row,
      distance: distance.toFixed(1),
      rating: ratingFromDistance(distance),
      angle: (angleFactor * 100).toFixed(0)
    });
  }, [selectedSeat, camera, onMetricsChange]);

  useFrame(() => {
    camera.fov = selectedSeat ? 53 + Math.min(Math.abs(selectedSeat.position.x) * 1.2, 8) : 55;
    camera.updateProjectionMatrix();
  });

  return (
    <group>
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <boxGeometry args={[30, 0.4, 45]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[0, 5.5, 20]}>
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial map={videoTexture} emissive="#ffffff" emissiveIntensity={0.9} toneMapped={false} />
      </mesh>

      <mesh position={[0, 10, 8]} rotation={[-0.45, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 1.8, 24]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <SpotLight position={[0, 9.6, 8.5]} angle={0.45} distance={40} intensity={25} penumbra={0.4} color="#a5b4fc" castShadow />

      {seats.map((seat) => {
        const id = `${seat.row}${seat.number}`;
        const selected = selectedSeat?._id === seat._id;
        const color = seat.status === 'booked' ? '#ef4444' : seat.status === 'unavailable' ? '#f59e0b' : '#22c55e';
        return (
          <group key={seat._id} position={[seat.position.x, seat.position.y, seat.position.z]}>
            <mesh
              ref={(node) => {
                seatRefs.current[id] = node;
              }}
              castShadow
              onClick={() => onSeatSelect(seat)}
            >
              <boxGeometry args={[0.9, 0.8, 0.9]} />
              <meshStandardMaterial color={selected ? '#a78bfa' : color} roughness={0.35} />
            </mesh>
            {selected && (
              <Text position={[0, 0.8, 0]} fontSize={0.25} color="#f8fafc" anchorX="center" anchorY="middle">
                {id}
              </Text>
            )}
          </group>
        );
      })}

      <mesh position={[0, 7, -16]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[30, 14]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[-15, 7, 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[45, 14]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[15, 7, 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[45, 14]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
};

const TheatreScene = ({ seats, selectedSeat, onSeatSelect, trailerUrl, onMetricsChange }) => (
  <Canvas shadows gl={{ antialias: true }}>
    <color attach="background" args={['#020617']} />
    <PerspectiveCamera makeDefault position={[0, 4, 4]} fov={55} />
    <ambientLight intensity={0.35} />
    <pointLight position={[0, 8, -8]} intensity={30} color="#c4b5fd" />
    <TheatreMesh
      seats={seats}
      selectedSeat={selectedSeat}
      onSeatSelect={onSeatSelect}
      trailerUrl={trailerUrl}
      onMetricsChange={onMetricsChange}
    />
    <OrbitControls maxDistance={42} minDistance={4} target={[0, 3, 15]} />
  </Canvas>
);

export default TheatreScene;
