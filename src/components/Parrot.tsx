import { Suspense, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, useTexture } from '@react-three/drei';
import React from 'react';
import { useGraph } from '@react-three/fiber';
import { SkeletonUtils } from 'three-stdlib';

interface ModelProps {
  [key: string]: any;
  animate?: string;
}

const Model: React.FC<ModelProps> = ({...props}) => {
  const group = React.useRef(null)
  const { scene, animations } = useGLTF('/Parrot.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  const currentAnimate = props.animate;
  const textures = useTexture('/texture_parrot.png');

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



  // useFrame(({ clock }) => {
  //   if (group.current) {
  //     group.current.rotation.z = clock.getElapsedTime();
  //   }
  // });

  // Define bee colors
  // const coloredMaterial = new MeshStandardMaterial({ color: 'orange' });

  return (
    <group ref={group} {...props} dispose={null}>
    <group>
      <group name="RootNode0" scale={1}>
        <group name="geo1">
          <skinnedMesh name="pirate_parrot2" geometry={(nodes.pirate_parrot2 as any).geometry} material={(nodes.pirate_parrot2 as any).material} skeleton={(nodes.pirate_parrot2 as any).skeleton}>
            <meshStandardMaterial map={textures} map-flipY={false}/>
          </skinnedMesh>
        </group>
        <group name="skeletal3">
          <primitive object={nodes.Root_Jnt4} />
        </group>
      </group>
    </group>
  </group>
  );
};

interface TryingInterface {
  animate?: string;
}

export const Trying: React.FC<TryingInterface> = ({...props}) => {
  return (
    <div className="wrapper h-[800px] w-full">
      <Canvas camera={{ fov: 5, position: [0, 0, 200]}}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={3} position={[0, 0, 50]} />
          <Model animate={props.animate} />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};
 
useGLTF.preload('/Parrot.glb')