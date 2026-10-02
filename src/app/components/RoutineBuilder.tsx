import React, { useState } from 'react';
import { Droplets, Plus, Search, AlertTriangle, Sparkles, RotateCcw, X, ArrowLeft } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';

interface RoutineBuilderProps {
  onNavigate: (screen: Screen) => void;
  setRoutineIngredients: (ingredients: string[]) => void;
}

type RoutineTime = 'AM' | 'PM' | 'Weekly';
type ProductCategory = 'Cleansing' | 'Treatment' | 'Moisturize' | 'Protect';

interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  color: string;
}

// Available products library
const productLibrary: Product[] = [
  // Cleansers
  { id: 'c1', name: 'Niacinamide Cleansing Gelée 3%', description: 'Balances & cleanses gently', category: 'Cleansing', color: 'blue' },
  { id: 'c2', name: 'Salicylic Acid Cleanser 2%', description: 'Deep cleanses & exfoliates', category: 'Cleansing', color: 'blue' },
  { id: 'c3', name: 'Vitamin C Cleansing Gel', description: 'Brightening cleanse', category: 'Cleansing', color: 'blue' },
  { id: 'c4', name: 'PHA Gentle Cleanser', description: 'Sensitive skin cleansing', category: 'Cleansing', color: 'blue' },
  
  // Treatments
  { id: 't1', name: 'Niacinamide Serum 12% Plus Zinc 2%', description: 'Balances & refines pores', category: 'Treatment', color: 'blue' },
  { id: 't2', name: 'Vitamin C Complex Serum 22%', description: 'Brightens & protects', category: 'Treatment', color: 'amber' },
  { id: 't3', name: 'Retinol Complex Serum 0.5%', description: 'Anti-aging treatment', category: 'Treatment', color: 'pink' },
  { id: 't4', name: 'Multi-Molecular Hyaluronic Acid Serum', description: 'Intense hydration', category: 'Treatment', color: 'blue' },
  { id: 't5', name: 'AHA/BHA Exfoliating Toner', description: 'Refines & resurfaces', category: 'Treatment', color: 'purple' },
  { id: 't6', name: 'Peptide Complex Serum', description: 'Firming & repair', category: 'Treatment', color: 'indigo' },
  { id: 't7', name: 'Azelaic Acid Emulsion 10%', description: 'Evens tone & texture', category: 'Treatment', color: 'purple' },
  { id: 't8', name: 'Tranexamic Acid Serum 5%', description: 'Reduces dark spots', category: 'Treatment', color: 'amber' },
  
  // Moisturizers
  { id: 'm1', name: 'Hyaluronic Acid Gel Cream', description: 'Lightweight hydration', category: 'Moisturize', color: 'green' },
  { id: 'm2', name: 'Niacinamide Peptide Cream', description: 'Rich moisture & repair', category: 'Moisturize', color: 'green' },
  { id: 'm3', name: 'Ceramide + Peptide Moisturizer', description: 'Barrier repair', category: 'Moisturize', color: 'green' },
  { id: 'm4', name: 'Squalane Oil Moisturizer', description: 'Deep nourishment', category: 'Moisturize', color: 'green' },
  
  // SPF
  { id: 's1', name: 'Mineral Sunscreen SPF 50', description: 'Broad spectrum + Niacinamide', category: 'Protect', color: 'amber' },
  { id: 's2', name: 'Vitamin C Sunscreen SPF 30', description: 'Brightening protection', category: 'Protect', color: 'amber' },
];

export function RoutineBuilder({ onNavigate, setRoutineIngredients }: RoutineBuilderProps) {
  const [selectedTime, setSelectedTime] = useState<RoutineTime>('AM');
  const [hasWarning, setHasWarning] = useState(true);
  const [showAIModal, setShowAIModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Treatment');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiPrompt, setAIPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSelectingProducts, setIsSelectingProducts] = useState(false);
  const [tempSelectedProducts, setTempSelectedProducts] = useState<string[]>([]);
  
  // Routine state - stores product IDs for each category
  const [routine, setRoutine] = useState<Record<ProductCategory, string[]>>({
    'Cleansing': [],
    'Treatment': ['t1', 't2'],
    'Moisturize': ['m1'],
    'Protect': ['s1']
  });

  const handleStartSelection = (category: ProductCategory) => {
    setSelectedCategory(category);
    setTempSelectedProducts([]); // Start fresh
    setIsSelectingProducts(true);
    setSearchQuery('');
  };

  const handleCancelSelection = () => {
    setIsSelectingProducts(false);
    setTempSelectedProducts([]);
    setSearchQuery('');
  };

  const handleSaveSelection = () => {
    // Add all temp selected products to the category
    setRoutine(prev => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], ...tempSelectedProducts]
    }));
    setIsSelectingProducts(false);
    setTempSelectedProducts([]);
    setSearchQuery('');
  };

  const toggleProductSelection = (productId: string) => {
    setTempSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const removeProduct = (category: ProductCategory, productId: string) => {
    setRoutine(prev => ({
      ...prev,
      [category]: prev[category].filter(id => id !== productId)
    }));
  };

  const handleAIGenerate = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      // Generate a sample routine based on prompt
      setRoutine({
        'Cleansing': ['c1'],
        'Treatment': ['t1', 't4'],
        'Moisturize': ['m1'],
        'Protect': selectedTime === 'AM' ? ['s1'] : []
      });
      setIsGenerating(false);
      setShowAIModal(false);
      setAIPrompt('');
    }, 2000);
  };

  const resetRoutine = () => {
    setRoutine({
      'Cleansing': [],
      'Treatment': [],
      'Moisturize': [],
      'Protect': []
    });
  };

  const filteredProducts = productLibrary
    .filter(p => p.category === selectedCategory)
    .filter(p => 
      searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getProductById = (id: string) => productLibrary.find(p => p.id === id);

  const getCategoryLabel = (category: ProductCategory) => {
    switch (category) {
      case 'Protect': return 'SPF';
      case 'Cleansing': return 'Cleanser';
      case 'Moisturize': return 'Moisturizer';
      default: return category;
    }
  };

  const renderProductCard = (productId: string, category: ProductCategory, hasWarning?: boolean) => {
    const product = getProductById(productId);
    if (!product) return null;

    return (
      <div 
        key={productId}
        className="bg-white border border-[#C8C7C5] rounded-[0px] p-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 flex-1">
          {hasWarning && (
            <AlertTriangle className="w-4 h-4 text-[#FE8F7F] flex-shrink-0" />
          )}
          <div>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-xs text-gray-600 mt-0.5">{product.description}</p>
          </div>
        </div>
        <button 
          onClick={() => removeProduct(category, productId)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Sub-header */}
      <div className="px-6 py-5 flex items-center justify-between pt-[20px] pr-[24px] pb-[10px] pl-[24px]">
        <div className="flex items-center gap-3">
          {isSelectingProducts && (
            <button 
              onClick={handleCancelSelection}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
          )}
          <h4 style={{ fontFamily: 'Canela, serif' }}>
            {isSelectingProducts ? `Add ${getCategoryLabel(selectedCategory)}` : 'Build Your Routine'}
          </h4>
          {!isSelectingProducts && <Droplets className="w-5 h-5 text-[#FE8F7F]" />}
        </div>
        {!isSelectingProducts && (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowAIModal(true)}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-1 text-sm text-[#FE8F7F] hidden"
            >
              <Sparkles className="w-4 h-4" />
              AI Generate
            </button>
            <button 
              onClick={resetRoutine}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-1 text-sm text-gray-600 hidden"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Toggle Tabs - Only show when not selecting */}
      {!isSelectingProducts && (
        <div className="px-6 py-4 border-b border-gray-100 pt-[8px] pr-[24px] pb-[16px] pl-[24px]">
          <div className="flex gap-2">
            {(['AM', 'PM', 'Weekly'] as RoutineTime[]).map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`flex-1 py-2 rounded-[0px] text-sm transition-colors ${
                  selectedTime === time 
                    ? 'border border-[#C8C7C5] font-medium' 
                    : 'border border-gray-300 text-gray-600 hover:border-gray-400'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 bg-[rgb(235,234,232)]">
        
        {/* Product Selection View */}
        {isSelectingProducts ? (
          <>
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#C8C7C5] rounded-[0px] focus:outline-none focus:ring-1 focus:ring-black bg-white"
              />
            </div>

            {/* Product List with Checkboxes */}
            <div className="space-y-2">
              {filteredProducts.map((product) => {
                const isSelected = tempSelectedProducts.includes(product.id);
                const isAlreadyInRoutine = routine[selectedCategory].includes(product.id);
                
                return (
                  <label
                    key={product.id}
                    className={`bg-white border rounded-[0px] p-4 flex items-start gap-3 cursor-pointer transition-colors ${
                      isAlreadyInRoutine
                        ? 'border-gray-200 opacity-50 cursor-not-allowed'
                        : isSelected
                        ? 'border-black'
                        : 'border-[#C8C7C5] hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => !isAlreadyInRoutine && toggleProductSelection(product.id)}
                      disabled={isAlreadyInRoutine}
                      className="w-5 h-5 rounded border-2 border-[#C8C7C5] text-black focus:ring-0 focus:ring-offset-0 cursor-pointer mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{product.description}</p>
                      {isAlreadyInRoutine && (
                        <p className="text-xs text-gray-500 mt-1">Already added</p>
                      )}
                    </div>
                  </label>
                );
              })}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-sm">No products found</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Routine Categories View */}
            
            {/* Cleansing */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 style={{ fontFamily: 'Canela, serif', color: '#000000' }}>Cleansing</h4>
                <button 
                  onClick={() => handleStartSelection('Cleansing')}
                  className="text-xs text-black hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
              {routine['Cleansing'].length > 0 ? (
                <div className="space-y-2">
                  {routine['Cleansing'].map(id => renderProductCard(id, 'Cleansing'))}
                </div>
              ) : (
                <div className="bg-[rgb(255,255,255)] border border-[#C8C7C5] rounded-[0px] p-4 text-center text-sm text-[rgb(0,0,0)]">
                  No products added
                </div>
              )}
            </div>

            {/* Treatment */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 style={{ fontFamily: 'Canela, serif', color: '#000000' }}>Treatment</h4>
                <button 
                  onClick={() => handleStartSelection('Treatment')}
                  className="text-xs text-black hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
              {routine['Treatment'].length > 0 ? (
                <div className="space-y-2">
                  {routine['Treatment'].map(id => renderProductCard(id, 'Treatment'))}
                </div>
              ) : (
                <div className="bg-[rgb(255,255,255)] border border-[#C8C7C5] rounded-[0px] p-4 text-center text-sm text-[rgb(0,0,0)]">
                  No products added
                </div>
              )}
            </div>

            {/* Moisturize */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 style={{ fontFamily: 'Canela, serif', color: '#000000' }}>Moisturize</h4>
                <button 
                  onClick={() => handleStartSelection('Moisturize')}
                  className="text-xs text-black hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
              {routine['Moisturize'].length > 0 ? (
                <div className="space-y-2">
                  {routine['Moisturize'].map(id => renderProductCard(id, 'Moisturize'))}
                </div>
              ) : (
                <div className="bg-[rgb(255,255,255)] border border-[#C8C7C5] rounded-[0px] p-4 text-center text-sm text-[rgb(0,0,0)]">
                  No products added
                </div>
              )}
            </div>

            {/* Protect (AM only) */}
            {selectedTime === 'AM' && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 style={{ fontFamily: 'Canela, serif', color: '#000000' }}>Protect</h4>
                  <button 
                    onClick={() => handleStartSelection('Protect')}
                    className="text-xs text-[rgb(0,0,0)] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    Add
                  </button>
                </div>
                {routine['Protect'].length > 0 ? (
                  <div className="space-y-2">
                    {routine['Protect'].map(id => renderProductCard(id, 'Protect'))}
                  </div>
                ) : (
                  <div className="bg-[rgb(255,255,255)] border border-[#C8C7C5] rounded-[0px] p-4 text-center text-sm text-[rgb(0,0,0)]">
                    No products added
                  </div>
                )}
              </div>
            )}

            {/* Smart Warning */}
            {hasWarning && routine['Treatment'].includes('t2') && (
              <div className="bg-amber-50 border border-[#D1BF8D] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[rgb(0,0,0)]">Potential Interaction</p>
                    <p className="text-xs text-[rgb(71,71,71)] mt-1">
                      Vitamin C + PHA may cause irritation when used together. Consider alternating or buffering with moisturizer.
                    </p>
                  </div>
                  <button 
                    onClick={() => setHasWarning(false)}
                    className="text-[rgb(0,0,0)] hover:text-amber-700"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-[#EBEAE8]">
        {isSelectingProducts ? (
          <button 
            onClick={handleSaveSelection}
            disabled={tempSelectedProducts.length === 0}
            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {tempSelectedProducts.length === 0 
              ? 'Select Products' 
              : `Add ${tempSelectedProducts.length} Product${tempSelectedProducts.length > 1 ? 's' : ''}`
            }
          </button>
        ) : (
          <button 
            onClick={() => {
              // Extract ingredient names from the routine products
              const allProductIds = [
                ...routine['Cleansing'],
                ...routine['Treatment'],
                ...routine['Moisturize'],
                ...routine['Protect']
              ];
              const productNames = allProductIds
                .map(id => getProductById(id)?.name)
                .filter((name): name is string => !!name);
              
              // Extract key ingredients from product names
              const ingredients: string[] = [];
              productNames.forEach(name => {
                if (name.includes('Niacinamide')) ingredients.push('Niacinamide');
                if (name.includes('Vitamin C')) ingredients.push('Vitamin C');
                if (name.includes('Hyaluronic Acid')) ingredients.push('Hyaluronic Acid');
                if (name.includes('Retinol')) ingredients.push('Retinol');
              });
              
              // Remove duplicates
              const uniqueIngredients = Array.from(new Set(ingredients));
              setRoutineIngredients(uniqueIngredients);
              onNavigate('product-recommendations');
            }}
            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors"
          >
            Explore Products
          </button>
        )}
      </div>

      {/* AI Generate Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50" onClick={() => setShowAIModal(false)}>
          <div className="bg-white rounded-lg w-full max-w-md m-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h2 style={{ fontFamily: 'Canela, serif' }} className="text-lg">
                  AI Generate Routine
                </h2>
              </div>
              <button onClick={() => setShowAIModal(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking for?
              </label>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAIPrompt(e.target.value)}
                placeholder="E.g., I want a gentle routine for sensitive skin with anti-aging benefits..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={4}
              />
              <p className="text-xs text-gray-500 mt-2">
                Describe your skin concerns, goals, or preferences and AI will create a personalized routine for you.
              </p>
            </div>
            
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <button
                onClick={() => setShowAIModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAIGenerate}
                disabled={!aiPrompt.trim() || isGenerating}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}