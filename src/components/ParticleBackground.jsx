import React from 'react';
import Particles from 'react-tsparticles'
import particlesConfig from '../particle.config';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        />
    );
};