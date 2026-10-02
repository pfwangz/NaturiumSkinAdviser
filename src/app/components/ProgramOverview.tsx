import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Screen } from '../App';

interface ProgramOverviewProps {
  onNavigate: (screen: Screen) => void;
}

export function ProgramOverview({ onNavigate }: ProgramOverviewProps) {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const toggleWeek = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

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
          Program
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Program Header */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-2xl mb-2">
            Retinol Beginner Reset
          </h2>
          <p className="text-sm text-gray-700 mb-3">4 weeks</p>
          <p className="text-sm text-gray-600">
            A gentle, controlled program to introduce retinol safely and build tolerance without irritation.
          </p>
        </section>

        {/* Week Timeline */}
        <section>
          <h4 className="text-sm font-medium text-gray-500 mb-4">Weekly Plan</h4>
          
          <div className="space-y-3">
            
            {/* Week 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleWeek(1)}
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                    1
                  </div>
                  <span className="font-medium">Week 1: Buffering Routine</span>
                </div>
                {expandedWeek === 1 ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {expandedWeek === 1 && (
                <div className="p-4 space-y-3 text-sm border-t border-gray-200">
                  <p className="text-gray-700">
                    Start slow to allow your skin to acclimate to retinol.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-medium text-blue-900">Frequency</p>
                      <p className="text-blue-700 text-xs mt-1">2x per week (Mon & Thu)</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-medium text-blue-900">Method</p>
                      <p className="text-blue-700 text-xs mt-1">Apply moisturizer first, then retinol (buffering technique)</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="font-medium text-blue-900">Concentration</p>
                      <p className="text-blue-700 text-xs mt-1">0.25% Retinol</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleWeek(2)}
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm">
                    2
                  </div>
                  <span className="font-medium">Week 2: Increase Consistency</span>
                </div>
                {expandedWeek === 2 ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {expandedWeek === 2 && (
                <div className="p-4 space-y-3 text-sm border-t border-gray-200">
                  <p className="text-gray-700">
                    If no irritation occurs, increase application frequency.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-medium text-purple-900">Frequency</p>
                      <p className="text-purple-700 text-xs mt-1">3x per week (Mon, Wed, Fri)</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-medium text-purple-900">Method</p>
                      <p className="text-purple-700 text-xs mt-1">Continue buffering if needed</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleWeek(3)}
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm">
                    3
                  </div>
                  <span className="font-medium">Week 3: Boost Hydration</span>
                </div>
                {expandedWeek === 3 ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {expandedWeek === 3 && (
                <div className="p-4 space-y-3 text-sm border-t border-gray-200">
                  <p className="text-gray-700">
                    Support your skin barrier with enhanced hydration.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-medium text-green-900">Add</p>
                      <p className="text-green-700 text-xs mt-1">Hyaluronic acid serum before moisturizer</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="font-medium text-green-900">Frequency</p>
                      <p className="text-green-700 text-xs mt-1">Every other night</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Week 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleWeek(4)}
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm">
                    4
                  </div>
                  <span className="font-medium">Week 4: Assess & Optimize</span>
                </div>
                {expandedWeek === 4 ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {expandedWeek === 4 && (
                <div className="p-4 space-y-3 text-sm border-t border-gray-200">
                  <p className="text-gray-700">
                    Review your progress and adjust for continued improvement.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="font-medium text-amber-900">Check-in</p>
                      <p className="text-amber-700 text-xs mt-1">Review photos and skin metrics</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <p className="font-medium text-amber-900">Next Steps</p>
                      <p className="text-amber-700 text-xs mt-1">Consider increasing to 0.5% or nightly use</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">What to Expect</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Minimal to no irritation with proper buffering</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Gradual improvement in skin texture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Reduced fine lines over 4-6 weeks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Built tolerance for stronger formulations</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button 
          onClick={() => {
            onNavigate('routine-builder');
          }}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors"
        >
          Start This Program
        </button>
      </div>
    </div>
  );
}