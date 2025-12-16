import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, Plane, Ship, MapPin, Zap } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  type: 'warehouse' | 'port' | 'airport' | 'hub';
  label: string;
}

interface Package {
  id: number;
  fromNode: string;
  toNode: string;
  progress: number;
  type: 'air' | 'sea' | 'ground';
}

const nodes: Node[] = [
  { id: 'n1', x: 100, y: 100, type: 'warehouse', label: 'Los Angeles' },
  { id: 'n2', x: 300, y: 80, type: 'airport', label: 'Chicago' },
  { id: 'n3', x: 500, y: 120, type: 'hub', label: 'New York' },
  { id: 'n4', x: 200, y: 280, type: 'port', label: 'Houston' },
  { id: 'n5', x: 400, y: 300, type: 'warehouse', label: 'Atlanta' },
  { id: 'n6', x: 600, y: 260, type: 'airport', label: 'Miami' },
];

const connections = [
  { from: 'n1', to: 'n2' },
  { from: 'n2', to: 'n3' },
  { from: 'n1', to: 'n4' },
  { from: 'n4', to: 'n5' },
  { from: 'n5', to: 'n6' },
  { from: 'n2', to: 'n5' },
  { from: 'n3', to: 'n6' },
];

export const LogisticsNetwork = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePackages, setActivePackages] = useState<Package[]>([]);
  const [stats, setStats] = useState({ active: 0, completed: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 700;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    let animationFrame: number;
    let packages: Package[] = [];
    let packageIdCounter = 0;
    let completedCount = 0;

    const addPackage = () => {
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const types: ('air' | 'sea' | 'ground')[] = ['air', 'sea', 'ground'];
      packages.push({
        id: packageIdCounter++,
        fromNode: connection.from,
        toNode: connection.to,
        progress: 0,
        type: types[Math.floor(Math.random() * types.length)],
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach(conn => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return;

        ctx.save();
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 4]);
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
        ctx.restore();
      });

      // Draw packages in transit
      packages.forEach((pkg, index) => {
        const from = nodeMap.get(pkg.fromNode);
        const to = nodeMap.get(pkg.toNode);
        if (!from || !to) return;

        const x = from.x + (to.x - from.x) * pkg.progress;
        const y = from.y + (to.y - from.y) * pkg.progress;

        // Draw trail
        ctx.save();
        const gradient = ctx.createLinearGradient(
          from.x + (to.x - from.x) * Math.max(0, pkg.progress - 0.15),
          from.y + (to.y - from.y) * Math.max(0, pkg.progress - 0.15),
          x,
          y
        );

        const colors = {
          air: 'rgba(59, 130, 246, 0.6)',
          sea: 'rgba(16, 185, 129, 0.6)',
          ground: 'rgba(245, 158, 11, 0.6)',
        };

        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, colors[pkg.type]);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(
          from.x + (to.x - from.x) * Math.max(0, pkg.progress - 0.15),
          from.y + (to.y - from.y) * Math.max(0, pkg.progress - 0.15)
        );
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.restore();

        // Draw package dot
        ctx.save();
        ctx.fillStyle = colors[pkg.type].replace('0.6', '1');
        ctx.shadowColor = colors[pkg.type];
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Update progress
        pkg.progress += 0.008;
        if (pkg.progress >= 1) {
          packages.splice(index, 1);
          completedCount++;
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const colors = {
          warehouse: { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 1)' },
          port: { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 1)' },
          airport: { bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 1)' },
          hub: { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 1)' },
        };

        const color = colors[node.type];

        // Node background
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Node colored background
        ctx.save();
        ctx.fillStyle = color.bg;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Node border with pulse
        ctx.save();
        ctx.strokeStyle = color.border;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Node label
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(node.label, node.x, node.y + 26);
        ctx.restore();
      });

      setStats({ active: packages.length, completed: completedCount });
    };

    const animate = () => {
      draw();

      // Randomly add packages
      if (Math.random() < 0.05 && packages.length < 12) {
        addPackage();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    // Start with some initial packages
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addPackage(), i * 300);
    }

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold text-slate-600">Active</span>
            <span className="text-sm font-bold text-slate-900">{stats.active}</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-green-500" />
            <span className="text-xs font-semibold text-slate-600">Delivered</span>
            <span className="text-sm font-bold text-slate-900">{stats.completed}</span>
          </div>
        </motion.div>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30"
      />

      <div className="absolute bottom-4 right-4 flex gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-blue-200 shadow-md"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-slate-700">Air</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-green-200 shadow-md"
        >
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-slate-700">Sea</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-amber-200 shadow-md"
        >
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-medium text-slate-700">Ground</span>
        </motion.div>
      </div>
    </div>
  );
};
