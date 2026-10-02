import image_6f85f5a0f0b9864e138b8d7be540158644c848b0 from 'figma:asset/6f85f5a0f0b9864e138b8d7be540158644c848b0.png';
import image_49acd9e9230abefcfe5a5cbf93ab5c208a922435 from 'figma:asset/49acd9e9230abefcfe5a5cbf93ab5c208a922435.png';
import image_4ea151c4cc370a56af6f4e93881a95740a21f270 from 'figma:asset/4ea151c4cc370a56af6f4e93881a95740a21f270.png';
import image_8af0976a30b9a1224a2b438c1fbd4304e6eadce3 from 'figma:asset/8af0976a30b9a1224a2b438c1fbd4304e6eadce3.png';
import React, { useState } from 'react';
import { Search, Beaker, Star } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface IngredientExplorerProps {
  onNavigate: (screen: Screen) => void;
  setIngredient: (ingredient: string) => void;
}

const ingredientCategories = [
  'Brightening',
  'Hydration',
  'Barrier Support',
  'Acne Care',
  'Exfoliation',
];

const productCategories = [
  'Trending',
  'Hydration',
  'Barrier Support',
  'Acne Care',
  'Exfoliation',
];

const ingredients = [
  {
    name: 'Niacinamide',
    benefits: ['Balances oil', 'Reduces redness'],
    category: 'Barrier Support',
  },
  {
    name: 'PHA 3%',
    benefits: ['Gentle exfoliant', 'Boosts glow'],
    category: 'Exfoliation',
  },
  {
    name: 'Vitamin C',
    benefits: ['Brightens skin', 'Antioxidant protection'],
    category: 'Brightening',
  },
  {
    name: 'Hyaluronic Acid',
    benefits: ['Deep hydration', 'Plumps skin'],
    category: 'Hydration',
  },
  {
    name: 'Retinol',
    benefits: ['Anti-aging', 'Smooths texture'],
    category: 'Exfoliation',
  },
  {
    name: 'Salicylic Acid',
    benefits: ['Clears pores', 'Fights breakouts'],
    category: 'Acne Care',
  },
];

const products = [
  {
    name: 'Niacinamide Serum 12% Plus Zinc 2%',
    price: '$17',
    rating: 4.5,
    reviews: 542,
    image: image_8af0976a30b9a1224a2b438c1fbd4304e6eadce3,
  },
  {
    name: 'Niacinamide Cleansing Gelée 3%',
    price: '$18',
    rating: 4.5,
    reviews: 542,
    image: image_4ea151c4cc370a56af6f4e93881a95740a21f270,
  },
  {
    name: 'Niacinamide Serum 12% Plus Zinc 2% - Jumbo',
    price: '$31',
    rating: 4.5,
    reviews: 542,
    image: image_49acd9e9230abefcfe5a5cbf93ab5c208a922435,
  },
  {
    name: 'The Purifier Niacinamide Serum Body Wash',
    price: '$17',
    rating: 4.5,
    reviews: 542,
    image: image_6f85f5a0f0b9864e138b8d7be540158644c848b0,
  },
];

export function IngredientExplorer({ onNavigate, setIngredient }: IngredientExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'products'>('ingredients');

  const handleIngredientClick = (ingredientName: string) => {
    setIngredient(ingredientName);
    onNavigate('ingredient-detail');
  };

  const currentCategories = activeTab === 'ingredients' ? ingredientCategories : productCategories;
  const searchPlaceholder = activeTab === 'ingredients' ? 'Search ingredients...' : 'Search products...';

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Title Section */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <h4 style={{ fontFamily: 'Canela, serif' }}>
            Ingredient Explorer
          </h4>
          <Beaker className="w-5 h-5 text-[#FE8F7F]" />
        </div>
        
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => {
              setActiveTab('ingredients');
              setSelectedCategory(null);
            }}
            className={`flex-1 py-2.5 text-sm text-center border transition-colors rounded-[0px] ${
              activeTab === 'ingredients'
                ? 'border-[#AEADAC] text-black font-medium'
                : 'border-[#E4E7EC] text-[#4A5565]'
            }`}
          >
            Ingredients
          </button>
          <button
            onClick={() => {
              setActiveTab('products');
              setSelectedCategory(null);
            }}
            className={`flex-1 py-2.5 text-sm text-center border transition-colors rounded-[0px] ${
              activeTab === 'products'
                ? 'border-[#AEADAC] text-black font-medium'
                : 'border-[#E4E7EC] text-[#4A5565]'
            }`}
          >
            Products
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99A1AF]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[0px] pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#C8C7C5]"
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-[#EBEAE8] px-6 py-6 space-y-6">
        
        {/* Categories */}
        <div>
          <h2 className="text-sm font-medium text-[#6A7282] mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {currentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-3 py-1.5 text-xs transition-colors rounded-[0px] border border-[#C8C7C5] ${
                  selectedCategory === category
                    ? 'bg-[#FE8F7F] text-white'
                    : 'bg-white text-[#364153] hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredients View */}
        {activeTab === 'ingredients' && (
          <div>
            <h2 className="text-sm font-medium text-[#6A7282] mb-3">Ingredients</h2>
            <div className="grid grid-cols-1 gap-3">
              {ingredients
                .filter((ingredient) => 
                  (!selectedCategory || ingredient.category === selectedCategory) &&
                  (!searchQuery || ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map((ingredient) => (
                  <button
                    key={ingredient.name}
                    onClick={() => handleIngredientClick(ingredient.name)}
                    className="bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 text-left transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xs uppercase tracking-wide text-black">{ingredient.name}</h3>
                      <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                        {ingredient.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {ingredient.benefits.map((benefit, index) => (
                        <p key={index} className="text-xs text-gray-600">
                          • {benefit}
                        </p>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-blue-600">
                      View Details →
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Products View */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-sm font-medium text-[#6A7282] mb-3">Products</h2>
            <div className="grid grid-cols-2 gap-4">
              {products
                .filter((product) => 
                  !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2"
                  >
                    <div className="bg-white rounded-lg overflow-hidden h-[250px]">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain bg-[#EBEAE8]"
                      />
                    </div>
                    <h3 className="text-xs uppercase tracking-wide text-black leading-4">{product.name}</h3>
                    <p className="text-sm text-black">{product.price}</p>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'fill-black stroke-black'
                                : i < product.rating
                                ? 'fill-black stroke-black opacity-50'
                                : 'stroke-black fill-none'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#4A5565] tracking-wide">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}