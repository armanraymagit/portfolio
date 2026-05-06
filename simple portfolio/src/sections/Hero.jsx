import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Text, Float, PerspectiveCamera } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LaptopModel = () => {
  const group = useRef();
  const textGroup = useRef();
  const { scene } = useGLTF("/models/laptop4.glb");
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));

  // Track theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Animate the laptop lid opening
  useGSAP(() => {
    const lid = scene.getObjectByName("Screen");
    if (lid) {
      gsap.fromTo(
        lid.rotation,
        { x: -1.65 },
        { x: -3.3, duration: 3, ease: "power2.inOut" }
      );
    }
  }, [scene]);

  useEffect(() => {
    const screen = scene.getObjectByName("Screen");
    if (screen) {
      if (textGroup.current) {
        screen.add(textGroup.current);
        textGroup.current.position.set(0, 0.08, 0); 
      }
      // Change screen mesh color based on theme
      if (screen.material) {
        screen.material.color.set(isDark ? "#000000" : "#ffffff");
      }
    }
  }, [scene, isDark]);

  return (
    <group ref={group} scale={0.11} position={[0, -1, 0]}>
      <primitive object={scene} />

      {/* Laptop screen text */}
      <group ref={textGroup}>
        <Text
          fontSize={0.012}
          color={isDark ? "#00eaff" : "#2563eb"}
          anchorX="center"
          anchorY="middle"
          rotation-y={Math.PI}
          maxWidth={0.18}
          textAlign="center"
          font="https://unpkg.com/@fontsource/press-start-2p/files/press-start-2p-latin-400-normal.woff"
        >
          Welcome to My Portfolio!
        </Text>
      </group>
    </group>
  );
};

const Hero = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text-content > *",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-white dark:bg-black flex flex-col md:flex-row items-center overflow-hidden transition-colors duration-500"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]" />
      </div>

      {/* ⭐ HERO TEXT */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start justify-center px-8 md:pl-20 z-10 hero-text-content">
        <h2 className="text-xl md:text-2xl font-medium text-blue-500 mb-4 tracking-widest">
          WELCOME TO MY WORLD
        </h2>
        <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 leading-tight text-center md:text-left">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arman</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg text-center md:text-left mb-10 leading-relaxed">
          A passionate Full-Stack Developer & AI Specialist building the future with intelligent applications.
        </p>
        
        <div className="flex gap-6">
          <a href="#Projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 text-gray-900 dark:text-white font-bold rounded-2xl transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </div>

      {/* 🖥️ 3D Laptop */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <LaptopModel />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 scroll-indicator">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
