import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, GripVertical, Star, Image, Video, Droplets, X, Calendar, ChevronDown } from 'lucide-react';
import { Screen } from '../App';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CalendarPicker } from './CalendarPicker';
import { Header } from './Header';

interface SkinJournalProps {
  onNavigate: (screen: Screen) => void;
}

type ModuleType = 'text' | 'skin-rating' | 'image' | 'video' | 'routine';

interface JournalBlock {
  id: string;
  type: ModuleType;
  content?: string;
  rating?: number;
  oiliness?: number;
  dryness?: number;
  poreSize?: 'small' | 'medium' | 'large';
  redness?: number;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  completedRoutineItems?: string[];
}

interface DraggableBlockProps {
  block: JournalBlock;
  index: number;
  moveBlock: (dragIndex: number, hoverIndex: number) => void;
  updateBlock: (id: string, content: string) => void;
  updateRating: (id: string, rating: number) => void;
  updateOiliness: (id: string, oiliness: number) => void;
  updateDryness: (id: string, dryness: number) => void;
  updatePoreSize: (id: string, poreSize: 'small' | 'medium' | 'large') => void;
  updateRedness: (id: string, redness: number) => void;
  updateImage: (id: string, imageUrl: string, imageWidth: number, imageHeight: number) => void;
  updateRoutineCompletion: (id: string, itemId: string, completed: boolean) => void;
  deleteBlock: (id: string) => void;
}

function DraggableBlock({ block, index, moveBlock, updateBlock, updateRating, updateOiliness, updateDryness, updatePoreSize, updateRedness, updateImage, updateRoutineCompletion, deleteBlock }: DraggableBlockProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(block.content || '');

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'BLOCK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'BLOCK',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveBlock(item.index, index);
        item.index = index;
      }
    },
  });

  const handleSave = () => {
    updateBlock(block.id, editContent);
    setIsEditing(false);
  };

  const renderModule = () => {
    switch (block.type) {
      case 'text':
        if (isEditing) {
          return (
            <div className="space-y-2">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full min-h-[80px] px-3 py-2 text-sm border-0 focus:outline-none resize-none"
                placeholder="Type here..."
                autoFocus
                onBlur={handleSave}
              />
            </div>
          );
        }
        return (
          <p
            className="text-sm px-3 py-2 cursor-text hover:bg-gray-50 rounded"
            onClick={() => setIsEditing(true)}
          >
            {block.content || 'Start your journal entry here...'}
          </p>
        );

      case 'skin-rating':
        return (
          <div className="bg-white border border-[#C8C7C5] rounded-[0px] p-4 space-y-4">
            {/* Overall Rating */}
            <div>
              <p className="text-sm font-medium mb-3">How is your skin today?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateRating(block.id, rating)}
                    className={`w-12 h-12 rounded-full transition-colors flex items-center justify-center ${
                      block.rating === rating
                        ? 'bg-black text-white'
                        : 'bg-white border border-[#C8C7C5] text-black hover:bg-gray-100'
                    }`}
                  >
                    <Star className={`w-5 h-5 ${(block.rating || 0) >= rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Oiliness */}
            <div>
              <p className="text-sm font-medium mb-3">Oiliness</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateOiliness(block.id, rating)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      (block.oiliness || 0) >= rating
                        ? 'bg-black text-white'
                        : 'bg-white border border-[#C8C7C5] text-black hover:bg-gray-100'
                    }`}
                  >
                    <Star className={`w-5 h-5 ${(block.oiliness || 0) >= rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Dryness */}
            <div>
              <p className="text-sm font-medium mb-3">Dryness</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateDryness(block.id, rating)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      (block.dryness || 0) >= rating
                        ? 'bg-black text-white'
                        : 'bg-white border border-[#C8C7C5] text-black hover:bg-gray-100'
                    }`}
                  >
                    <Star className={`w-5 h-5 ${(block.dryness || 0) >= rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Pore Size */}
            <div>
              <p className="text-sm font-medium mb-3">Pore Size</p>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => updatePoreSize(block.id, size)}
                    className={`px-4 py-2 rounded-[0px] text-sm capitalize transition-colors ${
                      block.poreSize === size
                        ? 'bg-black text-white'
                        : 'bg-white border border-[#C8C7C5] text-black hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Redness/Sensitivity */}
            <div>
              <p className="text-sm font-medium mb-3">Redness/Sensitivity</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateRedness(block.id, rating)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      (block.redness || 0) >= rating
                        ? 'bg-black text-white'
                        : 'bg-white border border-[#C8C7C5] text-black hover:bg-gray-100'
                    }`}
                  >
                    <Star className={`w-5 h-5 ${(block.redness || 0) >= rating ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'image':
        const [isResizing, setIsResizing] = useState(false);
        const [currentWidth, setCurrentWidth] = useState(block.imageWidth || 0);
        const [currentHeight, setCurrentHeight] = useState(block.imageHeight || 0);
        const imageRef = React.useRef<HTMLDivElement>(null);

        const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const img = new window.Image();
              img.src = reader.result as string;
              img.onload = () => {
                // Max width accounting for slide-over menu width and padding
                // Slide-over is ~1/4 screen, minus 24px left padding, 24px right padding,
                // and space for drag/delete buttons (~48px total)
                const maxWidth = 380; 
                let width = img.width;
                let height = img.height;
                
                // Scale down if image is too large
                if (width > maxWidth) {
                  const ratio = maxWidth / width;
                  width = maxWidth;
                  height = height * ratio;
                }
                
                updateImage(block.id, reader.result as string, width, height);
                setCurrentWidth(width);
                setCurrentHeight(height);
              };
            };
            reader.readAsDataURL(file);
          }
        };

        const handleResizeStart = (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setIsResizing(true);
          
          const startX = e.clientX;
          const startY = e.clientY;
          const startWidth = currentWidth;
          const startHeight = currentHeight;
          const aspectRatio = startWidth / startHeight;

          const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            const newWidth = Math.max(100, startWidth + deltaX);
            const newHeight = newWidth / aspectRatio;
            
            setCurrentWidth(newWidth);
            setCurrentHeight(newHeight);
          };

          const handleMouseUp = () => {
            setIsResizing(false);
            updateImage(block.id, block.imageUrl!, currentWidth, currentHeight);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };

          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        };

        React.useEffect(() => {
          if (block.imageUrl && !currentWidth) {
            setCurrentWidth(block.imageWidth || 0);
            setCurrentHeight(block.imageHeight || 0);
          }
        }, [block.imageUrl, block.imageWidth, block.imageHeight]);

        return (
          <div className={block.imageUrl ? "" : "bg-white border border-[#C8C7C5] rounded-[0px] p-4"}>
            {block.imageUrl ? (
              <div>
                <div 
                  ref={imageRef}
                  className="relative inline-block group/image"
                  style={{ 
                    width: currentWidth || 'auto',
                    maxWidth: '100%'
                  }}
                >
                  <img 
                    src={block.imageUrl} 
                    alt="Uploaded skin photo" 
                    className="w-full rounded-lg"
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      pointerEvents: isResizing ? 'none' : 'auto'
                    }}
                  />
                  <div
                    onMouseDown={handleResizeStart}
                    className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize opacity-0 group-hover/image:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.5) 50%)',
                      borderBottomRightRadius: '0.5rem'
                    }}
                  >
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-white" />
                  </div>
                  <label className="absolute bottom-4 left-4 opacity-0 group-hover/image:opacity-100 transition-opacity">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <span className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white text-xs rounded-[0px] transition-colors cursor-pointer inline-block">
                      Change Image
                    </span>
                  </label>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Image className="w-5 h-5 text-black" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-black">Add Image</p>
                  <p className="text-xs text-gray-600">Upload a photo of your skin</p>
                </div>
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white text-xs rounded-[0px] transition-colors cursor-pointer inline-block">
                    Upload
                  </span>
                </label>
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="bg-white border border-[#C8C7C5] rounded-[0px] p-4">
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-black" />
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Add Video</p>
                <p className="text-xs text-gray-600">Record or upload a video</p>
              </div>
              <button className="px-3 py-1.5 bg-black hover:bg-gray-800 text-white text-xs rounded-[0px] transition-colors">
                Upload
              </button>
            </div>
          </div>
        );

      case 'routine':
        const [activeRoutineTab, setActiveRoutineTab] = useState<'am' | 'pm' | 'weekly'>('am');
        
        // Mock routine data - in a real app, this would come from user's saved routines
        const routineData = {
          am: [
            { id: 'am-1', name: 'Gentle Cleanser', category: 'Cleanse' },
            { id: 'am-2', name: 'Vitamin C Serum', category: 'Treat' },
            { id: 'am-3', name: 'Niacinamide Serum', category: 'Treat' },
            { id: 'am-4', name: 'Hydrating Moisturizer', category: 'Moisturize' },
            { id: 'am-5', name: 'SPF 50 Sunscreen', category: 'Protect' },
          ],
          pm: [
            { id: 'pm-1', name: 'Oil Cleanser', category: 'Cleanse' },
            { id: 'pm-2', name: 'Gentle Cleanser', category: 'Cleanse' },
            { id: 'pm-3', name: 'BHA Toner', category: 'Exfoliate' },
            { id: 'pm-4', name: 'Retinol Serum', category: 'Treat' },
            { id: 'pm-5', name: 'Peptide Cream', category: 'Moisturize' },
            { id: 'pm-6', name: 'Facial Oil', category: 'Moisturize' },
          ],
          weekly: [
            { id: 'wk-1', name: 'Clay Mask', category: 'Treat', frequency: '2x per week' },
            { id: 'wk-2', name: 'AHA Peel', category: 'Exfoliate', frequency: '1x per week' },
            { id: 'wk-3', name: 'Hydrating Sheet Mask', category: 'Treat', frequency: '2x per week' },
          ]
        };

        const currentRoutine = routineData[activeRoutineTab];
        const completedItems = block.completedRoutineItems || [];

        return (
          <div className="bg-white border border-[#C8C7C5] rounded-[0px] p-4">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-5 h-5 text-black" />
              <p className="text-sm font-medium text-black">Routine Tracker</p>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveRoutineTab('am')}
                className={`px-3 py-1.5 text-xs rounded-[0px] transition-colors ${
                  activeRoutineTab === 'am'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                AM Routine
              </button>
              <button
                onClick={() => setActiveRoutineTab('pm')}
                className={`px-3 py-1.5 text-xs rounded-[0px] transition-colors ${
                  activeRoutineTab === 'pm'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                PM Routine
              </button>
              <button
                onClick={() => setActiveRoutineTab('weekly')}
                className={`px-3 py-1.5 text-xs rounded-[0px] transition-colors ${
                  activeRoutineTab === 'weekly'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                Weekly
              </button>
            </div>

            {/* Routine Items Checklist */}
            <div className="space-y-2">
              {currentRoutine.map((item) => {
                const isCompleted = completedItems.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={(e) => updateRoutineCompletion(block.id, item.id, e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-[#C8C7C5] text-black focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className={`text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-black'}`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.category}
                        {item.frequency && ` • ${item.frequency}`}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Completion Summary */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                {completedItems.filter(id => currentRoutine.some(item => item.id === id)).length} of {currentRoutine.length} completed
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      ref={(node) => preview(drop(node))}
      className={`group relative ${isDragging ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start gap-2">
        <button
          ref={drag}
          className="mt-1 p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing transition-opacity"
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
        </button>
        <div className="flex-1">{renderModule()}</div>
        <button
          onClick={() => deleteBlock(block.id)}
          className="mt-1 p-1 opacity-0 group-hover:opacity-100 hover:bg-red-50 rounded transition-opacity"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export function SkinJournal({ onNavigate }: SkinJournalProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [title, setTitle] = useState('');
  const [blocks, setBlocks] = useState<JournalBlock[]>([
    { id: '1', type: 'text', content: 'Add details about your skin' }
  ]);
  const [showModuleMenu, setShowModuleMenu] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Store all journal entries by date
  const [journalEntries, setJournalEntries] = useState<Record<string, { title: string; blocks: JournalBlock[] }>>(() => {
    // Load from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('naturium-journal-entries');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved journal entries:', e);
        }
      }
    }
    // Default mock data
    return {
      '2024-12-09': {
        title: 'Skin Feeling Better Today',
        blocks: [
          { id: '1', type: 'text', content: 'My skin is looking much clearer after reducing retinol usage.' },
          { id: '2', type: 'skin-rating', rating: 4 },
        ]
      },
      '2024-12-06': {
        title: 'Irritation After New Serum',
        blocks: [
          { id: '1', type: 'text', content: 'Noticed redness on my cheeks after using the new PHA serum.' },
          { id: '2', type: 'skin-rating', rating: 2 },
        ]
      },
      '2024-12-05': {
        title: 'Morning Routine Check',
        blocks: [
          { id: '1', type: 'text', content: 'Testing out the new vitamin C serum in my morning routine.' },
          { id: '2', type: 'routine' },
        ]
      },
    };
  });
  
  // Mock data for dates with journal entries
  const datesWithEntries = Object.keys(journalEntries);

  // Save to localStorage whenever journalEntries changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('naturium-journal-entries', JSON.stringify(journalEntries));
    }
  }, [journalEntries]);

  // Auto-save current entry when title or blocks change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (title.trim() || blocks.some(block => block.content?.trim() || block.rating || block.oiliness || block.dryness || block.poreSize || block.redness || block.imageUrl || block.completedRoutineItems?.length)) {
        setJournalEntries(prev => ({
          ...prev,
          [selectedDate]: { title, blocks }
        }));
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [title, blocks, selectedDate]);

  // Handle date change
  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
    loadEntry(newDate);
  };

  const addModule = (type: ModuleType) => {
    const newBlock: JournalBlock = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? '' : undefined,
    };
    setBlocks([...blocks, newBlock]);
    setShowModuleMenu(false);
  };

  const moveBlock = (dragIndex: number, hoverIndex: number) => {
    const newBlocks = [...blocks];
    const [removed] = newBlocks.splice(dragIndex, 1);
    newBlocks.splice(hoverIndex, 0, removed);
    setBlocks(newBlocks);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const updateRating = (id: string, rating: number) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, rating } : block
    ));
  };

  const updateOiliness = (id: string, oiliness: number) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, oiliness } : block
    ));
  };

  const updateDryness = (id: string, dryness: number) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, dryness } : block
    ));
  };

  const updatePoreSize = (id: string, poreSize: 'small' | 'medium' | 'large') => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, poreSize } : block
    ));
  };

  const updateRedness = (id: string, redness: number) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, redness } : block
    ));
  };

  const updateImage = (id: string, imageUrl: string, imageWidth: number, imageHeight: number) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, imageUrl, imageWidth, imageHeight } : block
    ));
  };

  const updateRoutineCompletion = (id: string, itemId: string, completed: boolean) => {
    setBlocks(blocks.map(block => {
      if (block.id === id) {
        const currentCompleted = block.completedRoutineItems || [];
        let newCompleted: string[];
        
        if (completed) {
          // Add item if not already in list
          newCompleted = currentCompleted.includes(itemId) 
            ? currentCompleted 
            : [...currentCompleted, itemId];
        } else {
          // Remove item from list
          newCompleted = currentCompleted.filter(item => item !== itemId);
        }
        
        return { ...block, completedRoutineItems: newCompleted };
      }
      return block;
    }));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get week dates starting from Sunday
  const getWeekDates = (dateStr: string) => {
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const weekDates = [];
    
    // Calculate the start of the week (Sunday)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);
    
    // Generate 7 days starting from Sunday
    for (let i = 0; i < 7; i++) {
      const weekDate = new Date(startOfWeek);
      weekDate.setDate(startOfWeek.getDate() + i);
      weekDates.push(weekDate);
    }
    
    return weekDates;
  };

  const formatMonthYear = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long' });
  };

  const weekDates = getWeekDates(selectedDate);

  useEffect(() => {
    // Load the entry for the current date when the component mounts
    loadEntry(selectedDate);
  }, []);

  const loadEntry = (date: string) => {
    const entry = journalEntries[date];
    if (entry) {
      setTitle(entry.title);
      setBlocks(entry.blocks);
    } else {
      // Start fresh for new date
      setTitle('');
      setBlocks([{ id: Date.now().toString(), type: 'text', content: '' }]);
    }
  };

  const clearCurrentDay = () => {
    // Clear the current day's content
    setTitle('');
    setBlocks([{ id: Date.now().toString(), type: 'text', content: '' }]);
    
    // Remove from journal entries
    setJournalEntries(prev => {
      const updated = { ...prev };
      delete updated[selectedDate];
      return updated;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-full flex flex-col bg-white">
        {/* Header */}
        <Header />
        
        {/* Sub-header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <h4 style={{ fontFamily: 'Canela, serif' }} className="tracking-tight">
              Skin Journal
            </h4>
            <Calendar className="w-5 h-5 text-[#FE8F7F]" />
          </div>

          {/* Date Selector */}
          <div className="relative mb-4">
            {/* Month Dropdown */}
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Calendar className="w-4 h-4 text-gray-600" />
                <span>{formatMonthYear(selectedDate)}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Week View */}
            <div className="grid grid-cols-7 gap-2">
              {weekDates.map((date, index) => {
                const dateStr = date.toISOString().split('T')[0];
                const isSelected = dateStr === selectedDate;
                const hasEntry = datesWithEntries.includes(dateStr);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNumber = date.getDate().toString().padStart(2, '0');
                
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-600">{dayName}</span>
                    <button
                      onClick={() => handleDateChange(dateStr)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm transition-colors relative ${
                        isSelected
                          ? 'bg-black text-white'
                          : hasEntry
                          ? 'bg-white border border-[#FE8F7F] hover:border-[#FE8F7F]'
                          : 'bg-white border border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {dayNumber}
                      {hasEntry && (
                        <div className={`absolute bottom-2 w-1 h-1 rounded-full ${
                          isSelected ? 'bg-white' : 'bg-[#FE8F7F]'
                        }`} />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            
            {showCalendar && (
              <CalendarPicker
                selectedDate={selectedDate}
                onSelectDate={(newDate) => {
                  handleDateChange(newDate);
                  setShowCalendar(false);
                }}
                datesWithEntries={datesWithEntries}
                onClose={() => setShowCalendar(false)}
              />
            )}
          </div>

          {/* Title Input */}
          <div className="relative mb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entry title..."
              style={{ fontFamily: 'Canela, serif' }}
              className="w-full text-2xl border-0 focus:outline-none placeholder-gray-300 pr-10"
            />
            {title && (
              <button
                onClick={() => setTitle('')}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Clear title"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Clear Day Button */}
          {(title || blocks.some(block => block.content || block.rating || block.imageUrl)) && (
            <button
              onClick={clearCurrentDay}
              className="text-xs text-red-600 hover:text-red-700 hover:underline transition-colors"
            >
              Clear Day
            </button>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-[rgb(235,234,232)]">
          <div className="space-y-3 max-w-2xl">
            {blocks.map((block, index) => (
              <DraggableBlock
                key={block.id}
                block={block}
                index={index}
                moveBlock={moveBlock}
                updateBlock={updateBlock}
                updateRating={updateRating}
                updateOiliness={updateOiliness}
                updateDryness={updateDryness}
                updatePoreSize={updatePoreSize}
                updateRedness={updateRedness}
                updateImage={updateImage}
                updateRoutineCompletion={updateRoutineCompletion}
                deleteBlock={deleteBlock}
              />
            ))}

            {/* Add Module Button */}
            <div className="relative pl-6">
              <button
                onClick={() => setShowModuleMenu(!showModuleMenu)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Module
              </button>

              {/* Module Dropdown */}
              {showModuleMenu && (
                <div className="absolute top-full left-6 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10 min-w-[200px]">
                  <button
                    onClick={() => addModule('skin-rating')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left"
                  >
                    <Star className="w-4 h-4 text-blue-600" />
                    Skin Rating
                  </button>
                  <button
                    onClick={() => addModule('image')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left"
                  >
                    <Image className="w-4 h-4 text-purple-600" />
                    Add Image
                  </button>
                  <button
                    onClick={() => addModule('video')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left"
                  >
                    <Video className="w-4 h-4 text-pink-600" />
                    Add Video
                  </button>
                  <button
                    onClick={() => addModule('routine')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left"
                  >
                    <Droplets className="w-4 h-4 text-green-600" />
                    Add Routine
                  </button>
                  <button
                    onClick={() => addModule('text')}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-left border-t border-gray-100"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                    Text Block
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}