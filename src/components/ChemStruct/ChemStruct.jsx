import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ChemicalStructure = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(ambientLight);
        scene.add(pointLight);

        // Oxygen atom
        const oxygenGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const oxygenMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        const oxygen = new THREE.Mesh(oxygenGeometry, oxygenMaterial);
        scene.add(oxygen);

        // Hydrogen atoms
        const hydrogenGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const hydrogenMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const hydrogen1 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
        hydrogen1.position.set(0.7, 0.7, 0);
        scene.add(hydrogen1);

        const hydrogen2 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
        hydrogen2.position.set(-0.7, 0.7, 0);
        scene.add(hydrogen2);

        // Bonds
        const bondMaterial = new THREE.LineBasicMaterial({ color: 0x999999 });
        const bondGeometry1 = new THREE.BufferGeometry().setFromPoints([oxygen.position, hydrogen1.position]);
        const bond1 = new THREE.Line(bondGeometry1, bondMaterial);
        scene.add(bond1);

        const bondGeometry2 = new THREE.BufferGeometry().setFromPoints([oxygen.position, hydrogen2.position]);
        const bond2 = new THREE.Line(bondGeometry2, bondMaterial);
        scene.add(bond2);

        // Camera positioning and controls
        camera.position.z = 3;
        const controls = new OrbitControls(camera, renderer.domElement);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            oxygen.rotation.x += 0.01;
            oxygen.rotation.y += 0.01;
            hydrogen1.rotation.x += 0.01;
            hydrogen1.rotation.y += 0.01;
            hydrogen2.rotation.x += 0.01;
            hydrogen2.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '400px', height: '400px' }} />;
};

export default ChemicalStructure;
