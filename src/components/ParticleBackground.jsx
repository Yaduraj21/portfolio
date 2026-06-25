import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="canvas-bg"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ['#64c8ff', '#3cdcfe', '#a0c8ff', '#8caafe', '#3ce6f0'],
          },
          move: {
            direction: 'bottom',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: { min: 0.2, max: 0.65 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: 'circle', // Using circles to approximate glowing petals/motes for high performance
          },
          size: {
            value: { min: 2, max: 6 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          shadow: {
            enable: true,
            color: '#3cdcfe',
            blur: 15,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
