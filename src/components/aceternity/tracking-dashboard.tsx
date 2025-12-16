import { motion } from 'framer-motion';
import { Package, MapPin, Clock, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Shipment {
  id: string;
  status: 'in-transit' | 'delivered';
  from: string;
  to: string;
  progress: number;
  eta: string;
}

const mockShipments: Shipment[] = [
  { id: 'SH-2847', status: 'in-transit', from: 'Los Angeles', to: 'New York', progress: 67, eta: '36h 15m' },
  { id: 'SH-2848', status: 'in-transit', from: 'Seattle', to: 'Miami', progress: 45, eta: '48h 42m' },
  { id: 'SH-2849', status: 'delivered', from: 'Houston', to: 'Chicago', progress: 100, eta: 'Delivered' },
  { id: 'SH-2850', status: 'in-transit', from: 'Phoenix', to: 'Atlanta', progress: 89, eta: '24h 05m' },
];

export const TrackingDashboard = ({ className = '' }: { className?: string }) => {
  const [shipments, setShipments] = useState(mockShipments);
  const [metrics] = useState({
    totalShipments: 1247,
    onTime: 98.4,
    avgSpeed: 24.7,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShipments(prev =>
        prev.map(shipment => {
          if (shipment.status === 'delivered') return shipment;

          const newProgress = Math.min(shipment.progress + Math.random() * 2, 100);
          return {
            ...shipment,
            progress: newProgress,
            status: newProgress >= 100 ? 'delivered' : 'in-transit',
            eta: newProgress >= 100 ? 'Delivered' : shipment.eta,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Live Tracking</h3>
              <p className="text-xs text-slate-400">Real-time shipment monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-400">Live</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 p-6 border-b border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Package className="w-4 h-4 text-blue-600" />
            <p className="text-xs font-semibold text-slate-600">Total</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.totalShipments}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <p className="text-xs font-semibold text-slate-600">On-Time</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.onTime}%</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-amber-600" />
            <p className="text-xs font-semibold text-slate-600">Avg Speed</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{metrics.avgSpeed}h</p>
        </motion.div>
      </div>

      {/* Shipments List */}
      <div className="p-6 space-y-3 max-h-80 overflow-y-auto">
        {shipments.map((shipment, index) => (
          <motion.div
            key={shipment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  shipment.status === 'delivered'
                    ? 'bg-green-100'
                    : 'bg-blue-100'
                }`}>
                  {shipment.status === 'delivered' ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  ) : (
                    <Package className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{shipment.id}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <MapPin className="w-3 h-3" />
                    <span>{shipment.from} → {shipment.to}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Clock className="w-3 h-3" />
                  <span className="font-medium">{shipment.eta}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${shipment.progress}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full rounded-full ${
                    shipment.status === 'delivered'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                  }`}
                />
              </div>
              <span className="absolute -top-5 right-0 text-xs font-bold text-slate-700">
                {Math.round(shipment.progress)}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
