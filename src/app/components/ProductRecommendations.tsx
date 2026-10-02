import React, { useState } from 'react';
import { ArrowLeft, Star, X, ShoppingCart, Check } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductRecommendationsProps {
  onNavigate: (screen: Screen) => void;
  routineIngredients: string[];
}

type ProductCategory = 'Cleansing' | 'Treatment' | 'Moisturize' | 'Protect';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  keyIngredients: string[];
  benefits: string[];
  texture: string;
  size: string;
  category: ProductCategory;
}

// Naturium product catalog
const allProducts: Product[] = [
  // Cleansers
  {
    id: 'p1',
    name: 'Niacinamide Cleansing Gelée 3%',
    price: '$18',
    rating: 4.5,
    reviews: 542,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
    keyIngredients: ['Niacinamide'],
    benefits: ['Gentle cleansing', 'Balances skin', 'Soothes'],
    texture: 'Gel cleanser',
    size: '200ml',
    category: 'Cleansing'
  },
  {
    id: 'p2',
    name: 'Salicylic Acid Cleanser 2%',
    price: '$16',
    rating: 4.6,
    reviews: 387,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
    keyIngredients: ['Salicylic Acid'],
    benefits: ['Deep cleanses', 'Unclogs pores', 'Exfoliates'],
    texture: 'Gel cleanser',
    size: '200ml',
    category: 'Cleansing'
  },
  {
    id: 'p3',
    name: 'Vitamin C Cleansing Gel',
    price: '$17',
    rating: 4.4,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
    keyIngredients: ['Vitamin C'],
    benefits: ['Brightening cleanse', 'Antioxidant boost', 'Refreshing'],
    texture: 'Gel cleanser',
    size: '200ml',
    category: 'Cleansing'
  },
  
  // Treatments
  {
    id: 'p4',
    name: 'Niacinamide Serum 12% Plus Zinc 2%',
    price: '$17',
    rating: 4.5,
    reviews: 542,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    keyIngredients: ['Niacinamide'],
    benefits: ['Balances oil production', 'Minimizes pores', 'Reduces redness'],
    texture: 'Lightweight serum',
    size: '30ml',
    category: 'Treatment'
  },
  {
    id: 'p5',
    name: 'Vitamin C Complex Serum 22%',
    price: '$24',
    rating: 4.7,
    reviews: 381,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400',
    keyIngredients: ['Vitamin C'],
    benefits: ['Brightens skin tone', 'Reduces dark spots', 'Antioxidant protection'],
    texture: 'Silky serum',
    size: '30ml',
    category: 'Treatment'
  },
  {
    id: 'p6',
    name: 'Vitamin C Super Serum Plus',
    price: '$20',
    rating: 4.6,
    reviews: 295,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400',
    keyIngredients: ['Vitamin C', 'Hyaluronic Acid'],
    benefits: ['Brightens', 'Hydrates', 'Evens tone'],
    texture: 'Water-light serum',
    size: '30ml',
    category: 'Treatment'
  },
  {
    id: 'p7',
    name: 'Retinol Complex Serum 0.5%',
    price: '$28',
    rating: 4.6,
    reviews: 453,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400',
    keyIngredients: ['Retinol'],
    benefits: ['Reduces fine lines', 'Improves texture', 'Fades dark spots'],
    texture: 'Creamy serum',
    size: '30ml',
    category: 'Treatment'
  },
  {
    id: 'p8',
    name: 'Multi-Molecular Hyaluronic Acid Serum',
    price: '$16',
    rating: 4.8,
    reviews: 627,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400',
    keyIngredients: ['Hyaluronic Acid'],
    benefits: ['Deep hydration', 'Plumps skin', 'Reduces fine lines'],
    texture: 'Hydrating serum',
    size: '30ml',
    category: 'Treatment'
  },
  {
    id: 'p9',
    name: 'AHA/BHA Exfoliating Toner',
    price: '$18',
    rating: 4.5,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
    keyIngredients: ['Niacinamide', 'Vitamin C'],
    benefits: ['Gently exfoliates', 'Brightens', 'Refines pores'],
    texture: 'Liquid toner',
    size: '120ml',
    category: 'Treatment'
  },
  {
    id: 'p10',
    name: 'Azelaic Acid Emulsion 10%',
    price: '$19',
    rating: 4.5,
    reviews: 376,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    keyIngredients: ['Azelaic Acid', 'Niacinamide'],
    benefits: ['Evens tone', 'Reduces redness', 'Refines texture'],
    texture: 'Lightweight emulsion',
    size: '30ml',
    category: 'Treatment'
  },
  
  // Moisturizers
  {
    id: 'p11',
    name: 'Hyaluronic Acid Gel Cream',
    price: '$19',
    rating: 4.6,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    keyIngredients: ['Hyaluronic Acid'],
    benefits: ['Locks in moisture', 'Strengthens barrier', 'Soothes'],
    texture: 'Gel-cream',
    size: '50ml',
    category: 'Moisturize'
  },
  {
    id: 'p12',
    name: 'Niacinamide Peptide Cream',
    price: '$22',
    rating: 4.7,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    keyIngredients: ['Niacinamide'],
    benefits: ['Rich moisture', 'Firms skin', 'Repairs barrier'],
    texture: 'Rich cream',
    size: '50ml',
    category: 'Moisturize'
  },
  {
    id: 'p13',
    name: 'Ceramide + Peptide Moisturizer',
    price: '$20',
    rating: 4.5,
    reviews: 321,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    keyIngredients: ['Peptides'],
    benefits: ['Barrier repair', 'Deep nourishment', 'Anti-aging'],
    texture: 'Rich cream',
    size: '50ml',
    category: 'Moisturize'
  },
  {
    id: 'p14',
    name: 'Squalane + Vitamin C Moisturizer',
    price: '$21',
    rating: 4.6,
    reviews: 287,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    keyIngredients: ['Vitamin C'],
    benefits: ['Deep nourishment', 'Brightens', 'Locks in moisture'],
    texture: 'Rich cream',
    size: '50ml',
    category: 'Moisturize'
  },
  
  // SPF
  {
    id: 'p15',
    name: 'Mineral Sunscreen SPF 50',
    price: '$22',
    rating: 4.4,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400',
    keyIngredients: ['Niacinamide', 'Vitamin C'],
    benefits: ['Broad spectrum protection', 'No white cast', 'Lightweight'],
    texture: 'Mineral sunscreen',
    size: '50ml',
    category: 'Protect'
  },
  {
    id: 'p16',
    name: 'Vitamin C Sunscreen SPF 30',
    price: '$20',
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400',
    keyIngredients: ['Vitamin C'],
    benefits: ['Brightening protection', 'Antioxidant boost', 'Lightweight'],
    texture: 'Chemical sunscreen',
    size: '50ml',
    category: 'Protect'
  },
];

export function ProductRecommendations({ onNavigate, routineIngredients }: ProductRecommendationsProps) {
  const [removedProducts, setRemovedProducts] = useState<string[]>([]);
  const [addedToCart, setAddedToCart] = useState<string[]>([]);

  // Filter products that contain at least one of the routine ingredients
  const getRelevantProducts = (category: ProductCategory) => {
    return allProducts.filter(product => {
      // Filter out removed products
      if (removedProducts.includes(product.id)) return false;
      
      // Filter by category
      if (product.category !== category) return false;
      
      // If no routine ingredients specified, show all products in category
      if (routineIngredients.length === 0) return true;
      
      // Check if product contains any of the routine ingredients
      return product.keyIngredients.some(ingredient => 
        routineIngredients.some(routineIng => 
          ingredient.toLowerCase().includes(routineIng.toLowerCase())
        )
      );
    });
  };

  const cleansingProducts = getRelevantProducts('Cleansing');
  const treatmentProducts = getRelevantProducts('Treatment');
  const moisturizeProducts = getRelevantProducts('Moisturize');
  const protectProducts = getRelevantProducts('Protect');

  const handleRemoveProduct = (productId: string) => {
    setRemovedProducts([...removedProducts, productId]);
  };

  const handleAddToCart = (productId: string) => {
    if (!addedToCart.includes(productId)) {
      setAddedToCart([...addedToCart, productId]);
      // Remove from cart after 2 seconds
      setTimeout(() => {
        setAddedToCart(prev => prev.filter(id => id !== productId));
      }, 2000);
    }
  };

  const renderProductCard = (product: Product) => {
    const isAddedToCart = addedToCart.includes(product.id);

    return (
      <div
        key={product.id}
        className="bg-white border border-[#C8C7C5] rounded-[0px] p-4"
      >
        {/* Remove button - always visible */}
        <div className="flex justify-end -mt-2 -mr-2 mb-1">
          <button
            onClick={() => handleRemoveProduct(product.id)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Remove from recommendations"
          >
            <X className="w-4 h-4 text-gray-500 hover:text-black" />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="w-24 h-24 bg-[#EBEAE8] rounded-lg overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-black uppercase tracking-wide">
              {product.name}
            </h3>
            <p className="text-lg font-medium text-black mt-1">{product.price}</p>
            <div className="flex items-center gap-1 mt-2 mb-2">
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
              <span className="text-xs text-gray-600">
                {product.rating} ({product.reviews})
              </span>
            </div>
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                {product.keyIngredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-[#FFF8F6] text-[#FE8F7F] border border-[#FE8F7F]/20 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-0.5 mb-3">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <p key={idx} className="text-xs text-gray-600">
                  • {benefit}
                </p>
              ))}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product.id)}
              disabled={isAddedToCart}
              className={`w-full text-xs py-2 px-3 rounded-[0px] transition-colors flex items-center justify-center gap-1 ${
                isAddedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {isAddedToCart ? (
                <>
                  <Check className="w-3 h-3" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3 h-3" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCategorySection = (
    title: string,
    products: Product[]
  ) => {
    if (products.length === 0) return null;

    return (
      <div>
        <h4 style={{ fontFamily: 'Canela, serif' }} className="mb-3">
          {title}
        </h4>
        <div className="space-y-3">
          {products.map(product => renderProductCard(product))}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Title Section */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <button
          onClick={() => onNavigate('routine-builder')}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Routine</span>
        </button>
        <h4 style={{ fontFamily: 'Canela, serif' }}>
          Your Personalized Routine
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Naturium products featuring your selected ingredients
        </p>
      </div>

      {/* Routine Ingredients Display */}
      {routineIngredients.length > 0 && (
        <div className="px-6 py-3 bg-[#FFF8F6] border-b border-[#FE8F7F]/20">
          <p className="text-xs text-gray-600 mb-2">Featuring:</p>
          <div className="flex flex-wrap gap-2">
            {routineIngredients.map((ingredient) => (
              <span
                key={ingredient}
                className="px-2 py-1 bg-white border border-[#FE8F7F] text-xs text-black rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Content Area - Products organized by category */}
      <div className="flex-1 overflow-y-auto bg-[#EBEAE8] px-6 py-6 space-y-6">
        {cleansingProducts.length === 0 && 
         treatmentProducts.length === 0 && 
         moisturizeProducts.length === 0 && 
         protectProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-gray-600 mb-2">No products found</p>
            <p className="text-sm text-gray-500">
              {routineIngredients.length > 0 
                ? "Add more ingredients to your routine to see personalized recommendations."
                : "Build your routine to see personalized product recommendations."
              }
            </p>
          </div>
        ) : (
          <>
            {renderCategorySection('Cleansing', cleansingProducts)}
            {renderCategorySection('Treatment', treatmentProducts)}
            {renderCategorySection('Moisturize', moisturizeProducts)}
            {renderCategorySection('Protect', protectProducts)}
          </>
        )}
      </div>
    </div>
  );
}