'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 180
const MAX_DIST = 3.8
const MAX_LINES = 250

/* ── Nodes (voxels) ── */
function Voxels({ mouseRef }: { mouseRef: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  const { positions, dummy } = useMemo(() => {
    const pos = Array.from({ length: NODE_COUNT }, () => new THREE.Vector3(
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 8,
    ))
    return { positions: pos, dummy: new THREE.Object3D() }
  }, [])

  // Line geometry between nearby nodes
  const lineGeometry = useMemo(() => {
    const pts: number[] = []
    let count = 0
    for (let i = 0; i < NODE_COUNT && count < MAX_LINES; i++) {
      for (let j = i + 1; j < NODE_COUNT && count < MAX_LINES; j++) {
        if (positions[i].distanceTo(positions[j]) < MAX_DIST) {
          pts.push(positions[i].x, positions[i].y, positions[i].z)
          pts.push(positions[j].x, positions[j].y, positions[j].z)
          count++
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    return geo
  }, [positions])

  // Set initial instance transforms
  useMemo(() => {
    if (!meshRef.current) return
    positions.forEach((p, i) => {
      dummy.position.copy(p)
      dummy.scale.setScalar(0.06 + Math.random() * 0.08)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [positions, dummy])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    const [mx, my] = mouseRef.current
    // Gentle auto-rotation + mouse influence
    groupRef.current.rotation.y = t * 0.04 + mx * 0.15
    groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.1 + my * 0.1
  })

  return (
    <group ref={groupRef}>
      {/* Voxel nodes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#00FF41" />
      </instancedMesh>

      {/* Connection lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00FF41" transparent opacity={0.12} />
      </lineSegments>
    </group>
  )
}

/* ── Scene wrapper ── */
function Scene() {
  const mouseRef = useRef<[number, number]>([0, 0])
  const { size } = useThree()

  useMemo(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = [
        (e.clientX / size.width - 0.5) * 2,
        -(e.clientY / size.height - 0.5) * 2,
      ]
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [size])

  return (
    <>
      <fog attach="fog" args={['#050505', 12, 30]} />
      <Voxels mouseRef={mouseRef} />
    </>
  )
}

/* ── Export ── */
export default function NetworkBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60 }}
        gl={{ antialias: false, alpha: false }}
        style={{ background: '#050505' }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
