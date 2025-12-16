import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Arc {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface GlobeProps {
  className?: string;
  arcs?: Arc[];
  showGlobe?: boolean;
}

export const Globe = ({ className = '', arcs = [], showGlobe = true }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 600;
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2.5;

    let animationFrame: number;

    const drawGlobe = (rotationAngle: number) => {
      ctx.clearRect(0, 0, size, size);

      if (showGlobe) {
        ctx.save();
        ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
        ctx.shadowBlur = 20;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.shadowColor = 'rgba(59, 130, 246, 0.2)';
        ctx.shadowBlur = 10;

        ctx.strokeStyle = 'rgba(37, 99, 235, 0.5)';
        ctx.lineWidth = 1.5;

        for (let lat = -90; lat <= 90; lat += 15) {
          ctx.beginPath();
          for (let lng = -180; lng <= 180; lng += 2) {
            const adjustedLng = lng + rotationAngle;
            const x = centerX + radius * Math.cos((lat * Math.PI) / 180) * Math.sin((adjustedLng * Math.PI) / 180);
            const y = centerY + radius * Math.sin((lat * Math.PI) / 180);
            const z = radius * Math.cos((lat * Math.PI) / 180) * Math.cos((adjustedLng * Math.PI) / 180);

            if (z > 0) {
              if (lng === -180) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
          }
          ctx.stroke();
        }

        for (let lng = -180; lng <= 180; lng += 15) {
          ctx.beginPath();
          for (let lat = -90; lat <= 90; lat += 2) {
            const adjustedLng = lng + rotationAngle;
            const x = centerX + radius * Math.cos((lat * Math.PI) / 180) * Math.sin((adjustedLng * Math.PI) / 180);
            const y = centerY + radius * Math.sin((lat * Math.PI) / 180);
            const z = radius * Math.cos((lat * Math.PI) / 180) * Math.cos((adjustedLng * Math.PI) / 180);

            if (z > 0) {
              if (lat === -90) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
          }
          ctx.stroke();
        }
        ctx.restore();

        for (let i = 0; i < 300; i++) {
          const lat = (Math.random() - 0.5) * 180;
          const lng = (Math.random() - 0.5) * 360 + rotationAngle;
          const x = centerX + radius * Math.cos((lat * Math.PI) / 180) * Math.sin((lng * Math.PI) / 180);
          const y = centerY + radius * Math.sin((lat * Math.PI) / 180);
          const z = radius * Math.cos((lat * Math.PI) / 180) * Math.cos((lng * Math.PI) / 180);

          if (z > 0) {
            const alpha = 0.5 + Math.random() * 0.5;
            ctx.fillStyle = `rgba(29, 78, 216, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
            ctx.shadowBlur = 3;
            ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      arcs.forEach((arc) => {
        const startLng = arc.startLng + rotationAngle;
        const endLng = arc.endLng + rotationAngle;

        const startX = centerX + radius * Math.cos((arc.startLat * Math.PI) / 180) * Math.sin((startLng * Math.PI) / 180);
        const startY = centerY + radius * Math.sin((arc.startLat * Math.PI) / 180);
        const startZ = radius * Math.cos((arc.startLat * Math.PI) / 180) * Math.cos((startLng * Math.PI) / 180);

        const endX = centerX + radius * Math.cos((arc.endLat * Math.PI) / 180) * Math.sin((endLng * Math.PI) / 180);
        const endY = centerY + radius * Math.sin((arc.endLat * Math.PI) / 180);
        const endZ = radius * Math.cos((arc.endLat * Math.PI) / 180) * Math.cos((endLng * Math.PI) / 180);

        if (startZ > 0 || endZ > 0) {
          ctx.save();
          ctx.shadowColor = arc.color;
          ctx.shadowBlur = 8;
          ctx.strokeStyle = arc.color;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(startX, startY);

          const midLat = (arc.startLat + arc.endLat) / 2;
          const midLng = (startLng + endLng) / 2;
          const controlX = centerX + (radius + arc.arcAlt) * Math.cos((midLat * Math.PI) / 180) * Math.sin((midLng * Math.PI) / 180);
          const controlY = centerY + (radius + arc.arcAlt) * Math.sin((midLat * Math.PI) / 180);

          ctx.quadraticCurveTo(controlX, controlY, endX, endY);
          ctx.stroke();
          ctx.restore();

          if (startZ > 0) {
            ctx.save();
            ctx.shadowColor = arc.color;
            ctx.shadowBlur = 10;
            ctx.fillStyle = arc.color;
            ctx.beginPath();
            ctx.arc(startX, startY, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }

          if (endZ > 0) {
            ctx.save();
            ctx.shadowColor = arc.color;
            ctx.shadowBlur = 10;
            ctx.fillStyle = arc.color;
            ctx.beginPath();
            ctx.arc(endX, endY, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      });
    };

    const animate = () => {
      setRotation((prev) => {
        const newRotation = prev + 0.2;
        drawGlobe(newRotation);
        return newRotation;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [arcs, showGlobe]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: '600px', maxHeight: '600px' }}
      />
    </div>
  );
};

export const sampleArcs: Arc[] = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: 'rgba(37, 99, 235, 1)',
  },
  {
    order: 2,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: 'rgba(79, 70, 229, 1)',
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.25,
    color: 'rgba(147, 51, 234, 1)',
  },
  {
    order: 4,
    startLat: 55.7558,
    startLng: 37.6173,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.2,
    color: 'rgba(37, 99, 235, 1)',
  },
  {
    order: 5,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.35,
    color: 'rgba(79, 70, 229, 1)',
  },
];
