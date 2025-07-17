"use client"

import { Canvas } from "@react-three/fiber"
import { Mesh } from "three"
import { Decal, OrbitControls, useTexture } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"

type SkillSphereProps = {
  logoSrc: string
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) 
    }
    handleResize() 
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}

function SphereWithDecal({ logoSrc, scale }: { logoSrc: string; scale: number }) {
  const [decalTexture] = useTexture([logoSrc])
  const meshRef = useRef<Mesh>(null!)

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial color="#fe019a" metalness={0.2} roughness={0.3} />
      <Decal
        map={decalTexture}
        position={[0, 0, scale]} 
        rotation={[0, 0, 0]}
        scale={scale * 0.8} 
      />
    </mesh>
  )
}

export function SkillSphere({ logoSrc }: SkillSphereProps) {
  const isMobile = useIsMobile()
  const sphereScale = isMobile ? 1.2 : 1.75

  return (
    <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} />
        <SphereWithDecal logoSrc={logoSrc} scale={sphereScale} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
