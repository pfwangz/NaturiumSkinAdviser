import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload } from 'lucide-react';
import { Screen } from '../App';

interface AddPhotoEntryProps {
  onNavigate: (screen: Screen) => void;
}

const tags = ['Irritated', 'Dry', 'Breaking Out', 'Glowy', 'Sensitive', 'Clear'];

export function AddPhotoEntry({ onNavigate }: AddPhotoEntryProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
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
          Log Skin Update
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Upload Area */}
        <section>
          <h2 className="text-sm font-medium text-gray-700 mb-3">Photo</h2>
          
          {!hasPhoto ? (
            <button 
              onClick={() => setHasPhoto(true)}
              className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">Take Photo / Upload</p>
                <p className="text-xs text-gray-500 mt-1">Add a photo to track your progress</p>
              </div>
            </button>
          ) : (
            <div className="relative">
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />
              <button 
                onClick={() => setHasPhoto(false)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
              >
                <Upload className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          )}
        </section>

        {/* Tags */}
        <section>
          <h2 className="text-sm font-medium text-gray-700 mb-3">How is your skin today?</h2>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Comments */}
        <section>
          <h2 className="text-sm font-medium text-gray-700 mb-3">Comments (optional)</h2>
          
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add any notes about your skin today..."
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </section>

        {/* Tips */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">📸 Photo Tips</h4>
          <ul className="space-y-1 text-xs text-blue-800">
            <li>• Use natural lighting</li>
            <li>• Take photos at the same time of day</li>
            <li>• Keep the same angle and distance</li>
            <li>• Remove makeup for accurate tracking</li>
          </ul>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button 
          onClick={() => onNavigate('journal')}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-[0px] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!hasPhoto && selectedTags.length === 0}
        >
          Save to Journal
        </button>
      </div>
    </div>
  );
}