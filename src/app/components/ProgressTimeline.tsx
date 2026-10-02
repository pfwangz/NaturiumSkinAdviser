import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Screen } from '../App';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProgressTimelineProps {
  onNavigate: (screen: Screen) => void;
}

const metricsData = [
  { day: 'Day 1', hydration: 65, redness: 45, texture: 60 },
  { day: 'Day 7', hydration: 68, redness: 42, texture: 62 },
  { day: 'Day 14', hydration: 72, redness: 40, texture: 65 },
  { day: 'Day 21', hydration: 76, redness: 38, texture: 68 },
  { day: 'Day 30', hydration: 79, redness: 36, texture: 71 },
];

export function ProgressTimeline({ onNavigate }: ProgressTimelineProps) {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <button 
          onClick={() => onNavigate('home')}
          className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 style={{ fontFamily: 'Canela, serif' }} className="text-xl tracking-tight">
          Progress Timeline
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Date Range Selector */}
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-sm font-medium">Last 30 Days</span>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Photo Carousel with Before/After Slider */}
        <section>
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg mb-3">
            Photo Comparison
          </h2>
          
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
            {/* Before/After overlay effect */}
            <div className="absolute inset-0 flex">
              <div 
                className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 h-full"
                style={{ width: `${sliderValue}%` }}
              >
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                  Before
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                  After
                </div>
              </div>
            </div>
            
            {/* Slider control */}
            <div className="absolute inset-x-0 bottom-4 px-4">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-white/50 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
            <span>Nov 6, 2024</span>
            <span>Dec 6, 2024</span>
          </div>
        </section>

        {/* Skin Metrics Graph */}
        <section>
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg mb-3">
            Skin Metrics
          </h2>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-xs text-blue-700 mb-1">Hydration</div>
              <div className="text-lg font-medium text-blue-900">↑ 14%</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-xs text-green-700 mb-1">Redness</div>
              <div className="text-lg font-medium text-green-900">↓ 9%</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
              <div className="text-xs text-purple-700 mb-1">Texture</div>
              <div className="text-lg font-medium text-purple-900">↑ 11%</div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={metricsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 10 }}
                  stroke="#9ca3af"
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  stroke="#9ca3af"
                  domain={[30, 85]}
                />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="hydration" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Hydration"
                />
                <Line 
                  type="monotone" 
                  dataKey="redness" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Redness"
                />
                <Line 
                  type="monotone" 
                  dataKey="texture" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Texture"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-0.5 bg-blue-500" />
                <span className="text-gray-600">Hydration</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-0.5 bg-red-500" />
                <span className="text-gray-600">Redness</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-0.5 bg-purple-500" />
                <span className="text-gray-600">Texture</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Notes */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs flex-shrink-0">
              AI
            </div>
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Analysis</h4>
              <p className="text-sm text-blue-800">
                Your cheeks show reduced redness and improved barrier function. 
                Hydration levels have consistently improved over the past 2 weeks.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button 
          onClick={() => onNavigate('add-photo')}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors"
        >
          Add New Photo
        </button>
      </div>
    </div>
  );
}