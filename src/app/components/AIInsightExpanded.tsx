import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Screen } from '../App';

interface AIInsightExpandedProps {
  onNavigate: (screen: Screen) => void;
}

export function AIInsightExpanded({ onNavigate }: AIInsightExpandedProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('why');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <button 
          onClick={() => onNavigate('journal')}
          className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 style={{ fontFamily: 'Canela, serif' }} className="text-xl tracking-tight">
          AI Insight
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        
        {/* Headline Card */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-2xl mb-2 text-amber-900">
            Irritation Detected
          </h2>
          <p className="text-sm text-amber-700">Caused by ingredient interaction</p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-3">
          
          {/* Why It Happened */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('why')}
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium">Why It Happened</span>
              {expandedSection === 'why' ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSection === 'why' && (
              <div className="p-4 space-y-3 text-sm">
                <p>
                  <strong>PHA (Polyhydroxy Acid)</strong> and <strong>Retinol</strong> are both active ingredients that accelerate cell turnover.
                </p>
                <p>
                  When used together without proper buffering, they can compromise your skin barrier, leading to:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>• Increased sensitivity</li>
                  <li>• Redness and irritation</li>
                  <li>• Dryness and flaking</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                  <p className="text-xs text-blue-900">
                    💡 <strong>Pro tip:</strong> Alternate these actives on different nights, or use PHA in the morning and Retinol at night.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* What To Do Tonight */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('tonight')}
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium">What To Do Tonight</span>
              {expandedSection === 'tonight' ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSection === 'tonight' && (
              <div className="p-4 space-y-4 text-sm">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Gentle Cleanser</p>
                      <p className="text-gray-600 text-xs mt-1">Use a hydrating, non-foaming cleanser</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Skip Actives</p>
                      <p className="text-gray-600 text-xs mt-1">No retinol, acids, or vitamin C tonight</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Barrier Repair Moisturizer</p>
                      <p className="text-gray-600 text-xs mt-1">Look for ceramides, niacinamide, or centella</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* What To Avoid */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('avoid')}
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium">What To Avoid</span>
              {expandedSection === 'avoid' ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSection === 'avoid' && (
              <div className="p-4 space-y-2 text-sm">
                <p className="mb-3">For the next 48-72 hours, avoid:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong>Retinol</strong> - Give your skin time to recover</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong>AHAs/BHAs</strong> - No glycolic, lactic, or salicylic acid</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong>Vitamin C</strong> - Can be sensitizing when barrier is compromised</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong>Fragrance</strong> - May cause additional irritation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span><strong>Hot water</strong> - Use lukewarm water for cleansing</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button 
          onClick={() => onNavigate('skin-coach')}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors"
        >
          Ask Skin Coach
        </button>
      </div>
    </div>
  );
}