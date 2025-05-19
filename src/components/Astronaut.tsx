
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Suspense, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

export function Model() {
  const group = React.useRef(null)
  const { scene, animations } = useGLTF('/Astronaut.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group);
  const textures = useTexture('/texture.png');
  const textures1 = useTexture('/texture.png');
  const textures2 = useTexture('/texture_5.png');

  const currentAnimate = "moon_walk";

  useEffect(() => {
    if (currentAnimate && actions[currentAnimate]) {
      actions[currentAnimate].reset().fadeIn(.5).play();
    }
    return () => {
      if (currentAnimate && actions[currentAnimate]) {
        actions[currentAnimate].fadeOut(0.5);
      }
    };
  }, [currentAnimate]);



  return (
    <group ref={group} {...animations} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.04}>
          <group name="geo1">
            <group name="astronaut2">
              <skinnedMesh name="mesh_0" geometry={(nodes.mesh_0 as any).geometry} material={(nodes.mesh_0 as any).material} skeleton={(nodes.mesh_0 as any).skeleton} >
                <meshStandardMaterial map={textures} map-flipY={false}/>  
              </skinnedMesh>
              <skinnedMesh name="mesh_1" geometry={(nodes.mesh_1 as any).geometry} material={(nodes.mesh_1 as any).material} skeleton={(nodes.mesh_1 as any).skeleton} >
                <meshStandardMaterial map={textures1} map-flipY={false}/>  
              </skinnedMesh>
              <skinnedMesh name="mesh_2" geometry={(nodes.mesh_2 as any).geometry} material={(nodes.mesh_2 as any).material} skeleton={(nodes.mesh_2 as any).skeleton} >
                <meshStandardMaterial map={textures2} map-flipY={false}/>  
              </skinnedMesh>
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
