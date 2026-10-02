import React from 'react';
import { ArrowLeft, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Screen } from '../App';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RoutineSimulationProps {
  onNavigate: (screen: Screen) => void;
}

const data = [
  { week: 'Week 1', score: 65 },
  { week: 'Week 2', score: 72 },
  { week: 'Week 3', score: 78 },
  { week: 'Week 4', score: 85 },
];

export function RoutineSimulation({ onNavigate }: RoutineSimulationProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <button 
          onClick={() => onNavigate('routine-builder')}
          className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 style={{ fontFamily: 'Canela, serif' }} className="text-xl tracking-tight">
          Routine Simulation
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Result Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg">
            Expected Results
          </h2>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Irritation Risk</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <span className="text-sm font-medium text-amber-700">Medium</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Glow Improvement</span>
              <span className="text-sm font-medium">2-3 weeks</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Breakout Risk</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <span className="text-sm font-medium text-green-700">Low</span>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-4">Projected Skin Response Over 4 Weeks</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="week" 
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
                domain={[60, 90]}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 text-center mt-2">Skin Health Score</p>
        </div>

        {/* Suggestion Cards */}
        <div>
          <h4 className="text-sm font-medium mb-3">Recommendations</h4>
          <div className="space-y-3">
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">Buffer retinol with moisturizer</p>
                <p className="text-xs text-blue-700 mt-1">
                  Apply moisturizer before retinol to reduce irritation risk
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-900">Use PHA max twice a week</p>
                <p className="text-xs text-amber-700 mt-1">
                  Start slow to build tolerance and avoid over-exfoliation
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-900">Increase hydration on low-humidity days</p>
                <p className="text-xs text-purple-700 mt-1">
                  Layer a hydrating serum before moisturizer when needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTAs */}
      <div className="p-6 border-t border-gray-100 bg-white space-y-3">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors"
        >
          Apply This Routine
        </button>
        <button 
          onClick={() => onNavigate('routine-builder')}
          className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 py-3 rounded-lg transition-colors"
        >
          Make Adjustments
        </button>
      </div>
    </div>
  );
}