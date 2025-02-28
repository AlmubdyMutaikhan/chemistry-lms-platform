import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDAnimation = () => {
    const mount = useRef(null);

    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);

        // Enhanced lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // Bright white ambient light
        const pointLight = new THREE.PointLight(0xffffff, 2, 100);
        pointLight.position.set(5, 3, 5);
        scene.add(ambientLight);
        scene.add(pointLight);

        // Nucleus: Protons and Neutrons (Helium has 2 protons and 2 neutrons)
        const particleMaterial = {
            proton: new THREE.MeshPhongMaterial({ color: 0xff3333 }), // Red for protons
            neutron: new THREE.MeshPhongMaterial({ color: 0x3333ff }) // Blue for neutrons
        };
        const particleGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const nucleusRadius = 0.2;
        for (let i = 0; i < 4; i++) {
            const particle = new THREE.Mesh(particleGeometry, i < 2 ? particleMaterial.proton : particleMaterial.neutron);
            const angle = i * Math.PI / 2; // Arrange particles in a simple, understandable pattern
            particle.position.x = nucleusRadius * Math.cos(angle);
            particle.position.y = nucleusRadius * Math.sin(angle);
            scene.add(particle);
        }

        // Electrons (Helium has 2 electrons)
        const electronMaterial = new THREE.MeshPhongMaterial({ color: 0x33ccff });
        const electronGeometry = new THREE.SphereGeometry(0.05, 32, 32);
        const electrons = [];
        const radius = 1;
        for (let i = 0; i < 2; i++) {
            const electron = new THREE.Mesh(electronGeometry, electronMaterial);
            electron.angle = i * Math.PI; // Opposite sides of the nucleus
            electrons.push(electron);
            scene.add(electron);
        }

        // Camera positioning and controls
        camera.position.z = 3;
        const controls = new OrbitControls(camera, renderer.domElement);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            electrons.forEach((electron) => {
                electron.angle += 0.05;
                electron.position.x = radius * Math.cos(electron.angle);
                electron.position.y = radius * Math.sin(electron.angle);
            });
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animate);
            mount.current.removeChild(renderer.domElement);
            scene.clear();
            renderer.dispose();
        };
    }, [
       
    ]);

    return <div ref={mount} style={{ width: '100%', height: '400px' }} />;
};

export default ThreeDAnimation;
