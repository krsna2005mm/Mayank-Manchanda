
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Suspense, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/Astronaut.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions);
  }
  , [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={1}>
          <group name="geo1">
            <group name="astronaut2">
              <skinnedMesh name="mesh_0" geometry={(nodes.mesh_0 as any).geometry} material={(nodes.mesh_0 as any).material} skeleton={(nodes.mesh_0 as any).skeleton} />
              <skinnedMesh name="mesh_1" geometry={(nodes.mesh_1 as any).geometry} material={(nodes.mesh_1 as any).material} skeleton={(nodes.mesh_1 as any).skeleton} />
              <skinnedMesh name="mesh_2" geometry={(nodes.mesh_2 as any).geometry} material={(nodes.mesh_2 as any).material} skeleton={(nodes.mesh_2 as any).skeleton} />
            </group>
          </group>
          <group name="skeletal3">
            <primitive object={nodes.Root4} />
          </group>
        </group>
      </group>
    </group>
  )
};


export const Astronaut = () => {
  return (
    <div className="wrapper h-[800px] w-full">
      <Canvas camera={{ fov: 5, position: [0, 0, 200] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={3} position={[0, 0, 50]} />
          <Model />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};




useGLTF.preload('/Astronaut.glb')
