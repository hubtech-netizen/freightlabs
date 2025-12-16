import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Arc {
  from: { x: number; y: number; city: string };
  to: { x: number; y: number; city: string };
  color: string;
}

const usaRoutes: Arc[] = [
  // West Coast to East Coast
  { from: { x: 120, y: 280, city: 'Los Angeles' }, to: { x: 650, y: 220, city: 'New York' }, color: 'rgba(59, 130, 246, 0.8)' },
  { from: { x: 90, y: 200, city: 'Seattle' }, to: { x: 600, y: 300, city: 'Miami' }, color: 'rgba(16, 185, 129, 0.8)' },

  // Central routes
  { from: { x: 280, y: 340, city: 'Houston' }, to: { x: 480, y: 260, city: 'Chicago' }, color: 'rgba(245, 158, 11, 0.8)' },
  { from: { x: 480, y: 260, city: 'Chicago' }, to: { x: 650, y: 220, city: 'New York' }, color: 'rgba(139, 92, 246, 0.8)' },

  // Southwest to Southeast
  { from: { x: 180, y: 320, city: 'Phoenix' }, to: { x: 520, y: 320, city: 'Atlanta' }, color: 'rgba(236, 72, 153, 0.8)' },
  { from: { x: 520, y: 320, city: 'Atlanta' }, to: { x: 600, y: 300, city: 'Miami' }, color: 'rgba(14, 165, 233, 0.8)' },

  // Northern routes
  { from: { x: 90, y: 200, city: 'Seattle' }, to: { x: 480, y: 260, city: 'Chicago' }, color: 'rgba(168, 85, 247, 0.8)' },

  // Midwest connections
  { from: { x: 380, y: 300, city: 'Dallas' }, to: { x: 520, y: 320, city: 'Atlanta' }, color: 'rgba(34, 197, 94, 0.8)' },
];

const cities = [
  { x: 120, y: 280, name: 'Los Angeles', size: 8 },
  { x: 90, y: 200, name: 'Seattle', size: 6 },
  { x: 180, y: 320, name: 'Phoenix', size: 5 },
  { x: 280, y: 340, name: 'Houston', size: 6 },
  { x: 380, y: 300, name: 'Dallas', size: 5 },
  { x: 480, y: 260, name: 'Chicago', size: 7 },
  { x: 520, y: 320, name: 'Atlanta', size: 6 },
  { x: 600, y: 300, name: 'Miami', size: 6 },
  { x: 650, y: 220, name: 'New York', size: 8 },
];

export const USAMap = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeRoutes, setActiveRoutes] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 800;
    const height = 500;
    canvas.width = width;
    canvas.height = height;

    let animationFrame: number;
    let arcProgress: number[] = usaRoutes.map(() => Math.random());
    let activeCount = 0;

    const drawArc = (from: { x: number; y: number }, to: { x: number; y: number }, progress: number, color: string) => {
      if (progress <= 0) return;

      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const controlHeight = distance * 0.3;

      ctx.save();

      // Draw the arc path with gradient
      const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, color.replace('0.8', '1'));
      gradient.addColorStop(1, color.replace('0.8', '0.3'));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);

      // Draw bezier curve up to progress point
      for (let t = 0; t <= progress; t += 0.02) {
        const x = from.x + dx * t;
        const y = from.y + dy * t - Math.sin(t * Math.PI) * controlHeight;
        if (t === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      ctx.restore();

      // Draw moving dot
      if (progress < 1 && progress > 0.05) {
        const dotX = from.x + dx * progress;
        const dotY = from.y + dy * progress - Math.sin(progress * Math.PI) * controlHeight;

        ctx.save();
        ctx.fillStyle = color.replace('0.8', '1');
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Glowing trail
        ctx.save();
        const trailGradient = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 20);
        trailGradient.addColorStop(0, color.replace('0.8', '0.4'));
        trailGradient.addColorStop(1, color.replace('0.8', '0'));
        ctx.fillStyle = trailGradient;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.3)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw USA map outline (simplified)
      ctx.save();
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.3)';
      ctx.fillStyle = 'rgba(241, 245, 249, 0.5)';
      ctx.lineWidth = 2;

      // Simplified USA shape
      ctx.beginPath();
      ctx.moveTo(90, 200); // Seattle area
      ctx.lineTo(150, 180); // Northern border
      ctx.lineTo(250, 170);
      ctx.lineTo(400, 190);
      ctx.lineTo(500, 180);
      ctx.lineTo(600, 200);
      ctx.lineTo(680, 210); // Northeast
      ctx.lineTo(690, 240);
      ctx.lineTo(650, 280); // East coast
      ctx.lineTo(620, 320);
      ctx.lineTo(600, 350); // Florida
      ctx.lineTo(580, 340);
      ctx.lineTo(520, 350); // Gulf
      ctx.lineTo(400, 360);
      ctx.lineTo(300, 370);
      ctx.lineTo(200, 360); // Texas
      ctx.lineTo(150, 340);
      ctx.lineTo(120, 320); // Southwest
      ctx.lineTo(90, 280);
      ctx.lineTo(80, 240); // West coast
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw arcs
      activeCount = 0;
      usaRoutes.forEach((route, index) => {
        drawArc(route.from, route.to, arcProgress[index], route.color);

        if (arcProgress[index] > 0 && arcProgress[index] < 1) {
          activeCount++;
        }

        // Update progress
        if (arcProgress[index] >= 1) {
          if (Math.random() < 0.02) {
            arcProgress[index] = 0;
          }
        } else if (arcProgress[index] > 0) {
          arcProgress[index] += 0.005;
        } else if (Math.random() < 0.03) {
          arcProgress[index] = 0.01;
        }
      });

      // Draw cities
      cities.forEach(city => {
        // City glow
        ctx.save();
        const gradient = ctx.createRadialGradient(city.x, city.y, 0, city.x, city.y, city.size * 2);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(city.x, city.y, city.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // City dot
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'rgba(59, 130, 246, 1)';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(city.x, city.y, city.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // City label
        if (city.size >= 6) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
          ctx.font = 'bold 11px system-ui';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(city.name, city.x, city.y + city.size + 4);
          ctx.restore();
        }
      });

      setActiveRoutes(activeCount);
    };

    const animate = () => {
      draw();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">Active Routes</span>
            <span className="text-sm font-bold text-slate-900">{activeRoutes}</span>
          </div>
        </motion.div>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
      />
    </div>
  );
};
