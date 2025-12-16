import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  lat: number;
  lng: number;
  color?: string;
}

interface Connection {
  from: string;
  to: string;
  color: string;
  animated?: boolean;
}

interface WorldMapProps {
  cities?: City[];
  connections?: Connection[];
  className?: string;
}

const defaultCities: City[] = [
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Mumbai', lat: 19.076, lng: 72.8777 },
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
];

const defaultConnections: Connection[] = [
  { from: 'San Francisco', to: 'Tokyo', color: 'rgba(37, 99, 235, 0.8)', animated: true },
  { from: 'New York', to: 'London', color: 'rgba(79, 70, 229, 0.8)', animated: true },
  { from: 'London', to: 'Dubai', color: 'rgba(147, 51, 234, 0.8)', animated: true },
  { from: 'Tokyo', to: 'Singapore', color: 'rgba(37, 99, 235, 0.8)', animated: true },
  { from: 'Singapore', to: 'Sydney', color: 'rgba(79, 70, 229, 0.8)', animated: true },
  { from: 'Dubai', to: 'Mumbai', color: 'rgba(147, 51, 234, 0.8)', animated: true },
  { from: 'São Paulo', to: 'New York', color: 'rgba(37, 99, 235, 0.8)', animated: true },
];

export const WorldMap = ({
  cities = defaultCities,
  connections = defaultConnections,
  className = '',
}: WorldMapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1400;
    const height = 700;
    canvas.width = width;
    canvas.height = height;

    const cityPositions = new Map<string, { x: number; y: number }>();
    cities.forEach((city) => {
      const x = ((city.lng + 180) / 360) * width;
      const y = ((90 - city.lat) / 180) * height;
      cityPositions.set(city.name, { x, y });
    });

    const continents = [
      {
        name: 'North America',
        points: [
          [150, 150], [200, 120], [280, 100], [350, 110], [380, 140],
          [400, 180], [380, 220], [340, 260], [300, 280], [250, 300],
          [200, 310], [150, 280], [120, 240], [110, 200], [120, 170]
        ]
      },
      {
        name: 'South America',
        points: [
          [280, 330], [320, 320], [340, 350], [350, 400], [340, 450],
          [320, 480], [300, 500], [280, 510], [260, 500], [250, 470],
          [255, 430], [265, 380], [275, 350]
        ]
      },
      {
        name: 'Europe',
        points: [
          [580, 140], [620, 130], [660, 140], [680, 160], [670, 190],
          [640, 200], [600, 205], [570, 195], [560, 170], [565, 150]
        ]
      },
      {
        name: 'Africa',
        points: [
          [590, 240], [640, 230], [680, 250], [700, 290], [710, 340],
          [700, 390], [680, 430], [650, 460], [610, 470], [580, 460],
          [560, 430], [550, 380], [555, 330], [570, 280], [580, 250]
        ]
      },
      {
        name: 'Asia',
        points: [
          [700, 150], [780, 140], [860, 150], [940, 160], [1000, 180],
          [1050, 200], [1080, 230], [1090, 270], [1070, 310], [1030, 330],
          [980, 340], [920, 340], [860, 330], [800, 310], [750, 280],
          [720, 250], [700, 210], [695, 180]
        ]
      },
      {
        name: 'Australia',
        points: [
          [1000, 450], [1060, 440], [1110, 455], [1140, 480], [1145, 510],
          [1130, 535], [1100, 545], [1050, 540], [1010, 525], [990, 500],
          [985, 470]
        ]
      }
    ];

    const drawMap = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(248, 250, 252, 0.9)';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(203, 213, 225, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 70) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 70) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      continents.forEach((continent) => {
        ctx.save();
        ctx.fillStyle = 'rgba(148, 163, 184, 0.25)';
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.5)';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(100, 116, 139, 0.3)';
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ctx.moveTo(continent.points[0][0], continent.points[0][1]);
        for (let i = 1; i < continent.points.length; i++) {
          ctx.lineTo(continent.points[i][0], continent.points[i][1]);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 1.2 + 0.4;
        const alpha = Math.random() * 0.3 + 0.2;

        ctx.save();
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.4)';
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      connections.forEach((conn) => {
        const from = cityPositions.get(conn.from);
        const to = cityPositions.get(conn.to);
        if (!from || !to) return;

        ctx.save();
        ctx.strokeStyle = conn.color;
        ctx.lineWidth = 3;
        ctx.shadowColor = conn.color;
        ctx.shadowBlur = 12;

        if (conn.animated) {
          const progress = (time / 2000) % 1;
          const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          gradient.addColorStop(0, conn.color);
          gradient.addColorStop(progress - 0.1 < 0 ? 0 : progress - 0.1, conn.color);
          gradient.addColorStop(progress, 'rgba(255, 255, 255, 0.9)');
          gradient.addColorStop(progress + 0.1 > 1 ? 1 : progress + 0.1, conn.color);
          gradient.addColorStop(1, conn.color);
          ctx.strokeStyle = gradient;
        }

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
        const controlY = midY - distance * 0.2;

        ctx.quadraticCurveTo(midX, controlY, to.x, to.y);
        ctx.stroke();
        ctx.restore();
      });

      cities.forEach((city) => {
        const pos = cityPositions.get(city.name);
        if (!pos) return;

        const pulse = Math.sin(time / 500) * 0.3 + 1;

        ctx.save();
        ctx.fillStyle = city.color || 'rgba(37, 99, 235, 1)';
        ctx.shadowColor = city.color || 'rgba(37, 99, 235, 0.8)';
        ctx.shadowBlur = 15 * pulse;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = 'rgba(30, 64, 175, 0.9)';
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 3;
        ctx.fillText(city.name, pos.x, pos.y - 12);
        ctx.restore();
      });
    };

    const animate = (time: number) => {
      drawMap(time);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cities, connections]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
        style={{ maxWidth: '1400px', maxHeight: '700px' }}
      />
    </div>
  );
};

export { defaultCities, defaultConnections };
