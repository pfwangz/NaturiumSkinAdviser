import React from 'react';
import { ArrowLeft, CheckCircle, XCircle, Star } from 'lucide-react';
import { Screen } from '../App';
import productImage from 'figma:asset/26ffc0a28efa6dbae86fd7b53fd4ea202771f122.png';

interface IngredientDetailProps {
  onNavigate: (screen: Screen) => void;
  ingredient: string;
}

const ingredientData: Record<string, any> = {
  'Niacinamide': {
    fullName: 'Niacinamide (Vitamin B3)',
    benefits: [
      'Balances oil production',
      'Reduces redness and inflammation',
      'Strengthens skin barrier',
      'Minimizes pore appearance',
    ],
    concentration: '5-10% recommended for most skin types',
    compatible: ['Hyaluronic Acid', 'Peptides', 'Ceramides'],
    incompatible: ['Vitamin C (can cause flushing)'],
  },
  'PHA 3%': {
    fullName: 'PHA (Polyhydroxy Acid)',
    benefits: [
      'Gentle exfoliation',
      'Hydrates while smoothing texture',
      'Suitable for sensitive skin',
      'Antioxidant properties',
    ],
    concentration: '2-6% recommended for beginners',
    compatible: ['Niacinamide', 'Hyaluronic Acid'],
    incompatible: ['Retinol (conflict)', 'Strong AHAs (over-exfoliation)'],
  },
  default: {
    fullName: 'Active Ingredient',
    benefits: [
      'Improves skin health',
      'Addresses specific concerns',
      'Science-backed results',
    ],
    concentration: 'Varies by product',
    compatible: ['Hyaluronic Acid'],
    incompatible: ['Consult your dermatologist'],
  },
};

export function IngredientDetail({ onNavigate, ingredient }: IngredientDetailProps) {
  const data = ingredientData[ingredient] || ingredientData.default;

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <button 
          onClick={() => onNavigate('ingredient-explorer')}
          className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 style={{ fontFamily: 'Canela, serif' }} className="text-xl tracking-tight">
          {data.fullName}
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Benefits */}
        <section>
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg mb-3">
            Benefits
          </h2>
          <div className="space-y-2">
            {data.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Concentration Guidance */}
        <section className="bg-blue-50 border border-blue-200 rounded-[0px] p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Concentration Guidance</h4>
          <p className="text-sm text-blue-800">{data.concentration}</p>
        </section>

        {/* Compatibility */}
        <section>
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg mb-3">
            Compatibility
          </h2>
          
          {/* Compatible */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Works Well With
            </h4>
            <div className="space-y-2">
              {data.compatible.map((item: string, index: number) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-[0px] p-3 flex items-center justify-between">
                  <span className="text-sm text-green-900">{item}</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Incompatible */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              Avoid Combining With
            </h4>
            <div className="space-y-2">
              {data.incompatible.map((item: string, index: number) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-[0px] p-3 flex items-center justify-between">
                  <span className="text-sm text-red-900">{item}</span>
                  <XCircle className="w-4 h-4 text-red-600" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Note */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">💡 Science Note</h4>
          <p className="text-sm text-gray-700">
            This ingredient has been clinically studied and is recognized for its efficacy in skincare formulations. 
            Always patch test new ingredients and introduce them gradually into your routine.
          </p>
        </section>

        {/* Products that contain this ingredient */}
        <section>
          <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg mb-4">
            Products that contain this ingredient
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                <img 
                  src={productImage} 
                  alt="Multi-Peptide Moisturizer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1">
                  JUMBO & SAVE
                </div>
              </div>
              <h3 className="text-xs tracking-wide mb-1.5">
                MULTI-PEPTIDE MOISTURIZER - JUMBO
              </h3>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm text-red-600">$36</span>
                <span className="text-sm text-gray-400 line-through">$40</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                  <Star className="w-3 h-3 fill-black text-black" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
                <span className="text-[10px] text-gray-600">4.5 (542)</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                <img 
                  src={productImage} 
                  alt="Multi-Peptide Moisturizer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs tracking-wide mb-1.5">
                MULTI-PEPTIDE MOISTURIZER
              </h3>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm">$24</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                  <Star className="w-3 h-3 fill-black text-black" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
                <span className="text-[10px] text-gray-600">4.5 (542)</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                <img 
                  src={productImage} 
                  alt="Multi-Peptide Serum" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs tracking-wide mb-1.5">
                MULTI-PEPTIDE SERUM
              </h3>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm text-red-600">$18</span>
                <span className="text-sm text-gray-400 line-through">$22</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-600">5.0 (328)</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                <img 
                  src={productImage} 
                  alt="Peptide Night Cream" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs tracking-wide mb-1.5">
                PEPTIDE NIGHT CREAM
              </h3>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm">$28</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                  <Star className="w-3 h-3 text-black" />
                </div>
                <span className="text-[10px] text-gray-600">4.2 (215)</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <div className="space-y-2 mb-3">
          <p className="text-xs text-gray-500 text-center">Add to routine</p>
          <div className="flex gap-2">
            <button 
              onClick={() => onNavigate('routine-builder')}
              className="flex-1 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 py-3 rounded-lg transition-colors"
            >
              AM
            </button>
            <button 
              onClick={() => onNavigate('routine-builder')}
              className="flex-1 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 py-3 rounded-lg transition-colors"
            >
              PM
            </button>
            <button 
              onClick={() => onNavigate('routine-builder')}
              className="flex-1 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 py-3 rounded-lg transition-colors"
            >
              Weekly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}