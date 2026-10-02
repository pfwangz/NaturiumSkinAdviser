import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, ArrowLeft, MessageSquarePlus, Clock, X, Mic, MicOff } from 'lucide-react';
import { Screen } from '../App';
import { Header } from './Header';
import imgEllipse2 from "figma:asset/c65ef2234afb6f261eec0889d2ccf9c8075f9d33.png";

interface SkinCoachProps {
  onNavigate: (screen: Screen) => void;
  initialQuestion?: string;
  onQuestionHandled?: () => void;
  conversationId?: string;
  onConversationHandled?: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  quickReplies?: string[];
}

interface SavedConversation {
  id: string;
  title: string;
  preview: string;
  date: string;
  messages: Message[];
}

export function SkinCoach({ onNavigate, initialQuestion, onQuestionHandled, conversationId, onConversationHandled }: SkinCoachProps) {
  // Function to get conversation based on ID
  const getConversation = (convId: string): Message[] => {
    if (convId === 'rough-skin') {
      return [
        {
          role: 'user',
          content: "My skin feels so rough and textured lately. I feel like my pores are clogged. Which of your glycolic acid peels is the strongest? I need to scrub this off."
        },
        {
          role: 'assistant',
          content: "🔬 Science Check: Texture vs. Barrier Damage\n\nBefore we look at peels, I need to flag something important. While rough skin can mean clogged pores, it is often a sign of a compromised moisture barrier—especially if it feels \"tight\" or looks red.\n\nIf we apply a strong acid to a damaged barrier, we will induce inflammation (which leads to aging) rather than a glow.\n\nQuick Diagnostic: Does your skin sting when you apply basic moisturizer, or does it feel like sandpaper even after washing?"
        },
        {
          role: 'user',
          content: "Actually, yeah. It stings a little when I put on lotion. And it feels tight."
        },
        {
          role: 'assistant',
          content: "🛑 Recommendation: The \"Skin Fast\"\n\nBased on that stinging sensation, I cannot recommend a glycolic peel right now. Your acid mantle is disrupted. Exfoliating now would be like using sandpaper on a sunburn.\n\nYour Prescription (No Purchase Necessary):\n• Stop all actives: No Retinol, no AHA/BHA, no Vitamin C for 5–7 days.\n• Gentle Cleanse: Wash with cool water and a non-foaming cleanser.\n• Hydrate: Use the thickest, blandest moisturizer you currently own (even if it's not ours).\n\nCome back to me in a week when the stinging stops. Then, we can talk about a gentle Lactic Acid to tackle that texture safely. Deal?",
          quickReplies: ['What moisturizer should I use?', 'Why not exfoliate now?', 'How long will this take?']
        }
      ];
    }
    
    // Default welcome message for new conversations
    return [
      {
        role: 'assistant',
        content: "Hi! I'm your Skin Coach. I'm here to answer questions about your skin, recommend products, and help you build the perfect routine. What would you like to know?",
        quickReplies: [
          "What's the best routine for dry skin?",
          "How do I start using retinol?",
          "What ingredients help with acne?",
          "Build me a morning routine"
        ]
      }
    ];
  };

  const [messages, setMessages] = useState<Message[]>(
    conversationId ? getConversation(conversationId) : getConversation('')
  );
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasHandledInitialQuestion = useRef(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [savedConversations, setSavedConversations] = useState<SavedConversation[]>([
    {
      id: 'rough-skin',
      title: 'Rough Skin & Barrier Damage',
      preview: 'Glycolic acid peel recommendations for texture',
      date: 'Dec 11, 2025',
      messages: getConversation('rough-skin')
    },
    {
      id: 'retinol-questions',
      title: 'Retinol Questions',
      preview: 'How to layer retinol with niacinamide',
      date: 'Dec 8, 2025',
      messages: [
        {
          role: 'user',
          content: 'Can I use retinol and niacinamide together?'
        },
        {
          role: 'assistant',
          content: 'Yes! Retinol and niacinamide work beautifully together. Niacinamide can actually help reduce potential irritation from retinol. Apply niacinamide first, let it absorb, then follow with retinol.'
        }
      ]
    },
    {
      id: 'acne-concerns',
      title: 'Acne Concerns',
      preview: 'Best ingredients for hormonal breakouts',
      date: 'Dec 5, 2025',
      messages: [
        {
          role: 'user',
          content: 'What helps with hormonal acne?'
        },
        {
          role: 'assistant',
          content: 'For hormonal acne, I recommend salicylic acid to keep pores clear and niacinamide to reduce inflammation. Consistency is key—stick with a gentle routine for at least 6-8 weeks.'
        }
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle initial question from home page
  useEffect(() => {
    if (initialQuestion && !hasHandledInitialQuestion.current) {
      hasHandledInitialQuestion.current = true;
      
      const userMessage: Message = {
        role: 'user',
        content: initialQuestion,
      };

      setMessages(prev => [...prev, userMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = getAIResponse(initialQuestion);
        setMessages(prev => [...prev, aiResponse]);
      }, 800);

      // Clear the initial question
      if (onQuestionHandled) {
        onQuestionHandled();
      }
    }
  }, [initialQuestion, onQuestionHandled]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      role: 'user',
      content: reply,
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(reply);
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const getAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    if (input.includes('retinol') || input.includes('anti-aging')) {
      return {
        role: 'assistant',
        content: "Retinol is excellent for anti-aging! I'd recommend starting with our 0.25% Retinol formulation 2-3 times per week. Always buffer with moisturizer first if you're new to retinol. Would you like me to create a beginner retinol routine for you?",
        quickReplies: ['Yes, create a routine', 'What products do I need?', 'How do I avoid irritation?']
      };
    }
    
    if (input.includes('routine') || input.includes('build')) {
      return {
        role: 'assistant',
        content: "I can help you build a personalized routine! To get started, tell me: What are your main skin concerns?",
        quickReplies: ['Acne & breakouts', 'Dryness & dehydration', 'Fine lines & aging', 'Dark spots & uneven tone']
      };
    }
    
    if (input.includes('dry') || input.includes('hydrat')) {
      return {
        role: 'assistant',
        content: "For dry skin, focus on hydrating ingredients like hyaluronic acid, glycerin, and ceramides. I'd recommend layering a hyaluronic acid serum under a rich moisturizer. Want specific product recommendations?",
        quickReplies: ['Yes, recommend products', 'What about oils?', 'Morning or evening routine?']
      };
    }
    
    if (input.includes('acne') || input.includes('breakout')) {
      return {
        role: 'assistant',
        content: "For acne-prone skin, look for ingredients like salicylic acid, niacinamide, and azelaic acid. These help unclog pores and reduce inflammation. Avoid over-exfoliating—gentle is key! Should I suggest a routine?",
        quickReplies: ['Build me a routine', 'Best ingredients for acne?', 'How often to exfoliate?']
      };
    }
    
    if (input.includes('sensitive')) {
      return {
        role: 'assistant',
        content: "Sensitive skin needs gentle, fragrance-free products with soothing ingredients like centella asiatica, niacinamide, and ceramides. Avoid harsh actives until your barrier is strong. Let me know if you'd like product suggestions!",
        quickReplies: ['Suggest products', 'What to avoid?', 'How to repair skin barrier?']
      };
    }

    if (input.includes('vitamin c') || input.includes('brightening')) {
      return {
        role: 'assistant',
        content: "Vitamin C is great for brightening and evening skin tone! Use it in the morning before SPF for antioxidant protection. Start with 10% concentration if you're new to it. I can help you incorporate it into your AM routine.",
        quickReplies: ['Create morning routine', 'Best Vitamin C products?', 'Can I use with other actives?']
      };
    }

    if (input.includes('spf') || input.includes('sunscreen')) {
      return {
        role: 'assistant',
        content: "SPF is non-negotiable! Apply SPF 30 or higher every morning as the last step of your routine. Reapply every 2 hours if you're outdoors. Mineral or chemical—both work well, just choose what feels best on your skin.",
        quickReplies: ['Mineral vs chemical?', 'Best SPF for oily skin?', 'How much to apply?']
      };
    }
    
    return {
      role: 'assistant',
      content: "That's a great question! Based on your skin profile and goals, I recommend focusing on gentle, science-backed ingredients. Would you like me to suggest a routine or explore specific ingredients?",
      quickReplies: ['Suggest a routine', 'Explain ingredients', 'Product recommendations']
    };
  };

  const handleNewChat = () => {
    // Save current conversation if it has more than just the welcome message
    if (messages.length > 1) {
      const firstUserMessage = messages.find(m => m.role === 'user');
      const title = firstUserMessage 
        ? firstUserMessage.content.slice(0, 50) + (firstUserMessage.content.length > 50 ? '...' : '')
        : 'New Conversation';
      
      const preview = firstUserMessage?.content.slice(0, 60) || 'Chat conversation';
      
      const newConversation: SavedConversation = {
        id: `conv-${Date.now()}`,
        title,
        preview,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        messages: [...messages]
      };
      
      setSavedConversations(prev => [newConversation, ...prev]);
    }
    
    // Start fresh conversation
    setMessages(getConversation(''));
    setInput('');
  };

  const handleLoadConversation = (conversation: SavedConversation) => {
    setMessages(conversation.messages);
    setShowHistory(false);
  };

  return (
    <div className="h-full flex flex-col bg-white relative">
      {/* Header */}
      <Header />
      
      {/* Sub-header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <h4 style={{ fontFamily: 'Canela, serif' }}>
            Skin Coach
          </h4>
          <Sparkles className="w-5 h-5 text-[#FE8F7F]" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleNewChat}
            className="p-2 hover:bg-gray-100 rounded-[0px] transition-colors"
            aria-label="New Chat"
          >
            <MessageSquarePlus className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="p-2 hover:bg-gray-100 rounded-[0px] transition-colors"
            aria-label="History"
          >
            <Clock className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* History Slide-out Panel - positioned fixed to extend outside main menu */}
      {showHistory && (
        <>
          {/* Backdrop - only covers area left of the main menu */}
          <div 
            className="fixed top-0 bottom-0 left-0 bg-black/20 z-[35] right-full sm:right-[600px] md:right-[560px] lg:right-[25vw] animate-fade-in"
            onClick={() => setShowHistory(false)}
          />
          
          {/* Panel - slides left from under the main menu */}
          <div 
            className="fixed top-0 bottom-0 w-[320px] bg-white border-l border-gray-200 z-[40] flex flex-col right-full sm:right-[600px] md:right-[560px] lg:right-[25vw] animate-slide-in-from-right"
          >
            {/* Panel Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h4 style={{ fontFamily: 'Canela, serif' }}>
                Conversation History
              </h4>
              <button
                onClick={() => setShowHistory(false)}
                className="p-1 hover:bg-gray-100 rounded-[0px] transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>
            
            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
              {savedConversations.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No saved conversations yet
                </div>
              ) : (
                savedConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => handleLoadConversation(conversation)}
                    className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-medium line-clamp-1">
                        {conversation.title}
                      </span>
                      <p className="text-xs text-gray-400 whitespace-nowrap ml-2">
                        {conversation.date}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {conversation.preview}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}

      {/* Messages */}
      <div className={`flex-1 overflow-y-auto space-y-4 bg-[rgb(235,234,232)] ${messages.length > 1 ? 'p-6' : 'p-[0px]'} relative`}>
        {/* Voice Mode */}
        {isVoiceMode ? (
          <div className="flex items-center justify-center h-full absolute inset-0">
            <div className="flex flex-col items-center gap-8">
              {/* Avatar with pulse animation */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#FE8F7F]/20 animate-ping" />
                <div className="relative size-[200px] rounded-full overflow-hidden border-4 border-[#FE8F7F]">
                  <img 
                    alt="Skin Advisor" 
                    className="block w-full h-full object-cover" 
                    src={imgEllipse2} 
                  />
                </div>
              </div>
              
              {/* Status text */}
              <p className="text-sm text-gray-600">
                {isMuted ? 'Microphone muted' : 'Listening...'}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Centered Welcome Element - only show if just the welcome message */}
            {messages.length === 1 && (
              <div className="flex items-center justify-center h-full absolute inset-0 pointer-events-none">
                <div className="content-stretch flex flex-col gap-[24px] items-center">
                  <div className="relative shrink-0 size-[100px]">
                    <img alt="" className="block max-w-none size-full rounded-full" height="100" src={imgEllipse2} width="100" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-neutral-950 w-full">
                    <p className="font-['Canela:Regular',sans-serif] leading-[48px] relative shrink-0 text-[32px] text-center w-full">Naturium Skin Advisor</p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] tracking-[-0.1504px] w-full text-center">Ask any questions about your skin concerns. I'm here to help!</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Conversation Messages - only show if there's an actual conversation */}
            {messages.length > 1 && messages.map((message, index) => (
              <div key={index}>
                <div 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-black text-white px-4 py-3' 
                        : 'text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
                
                {/* Quick Reply Buttons - show only for the last assistant message */}
                {message.role === 'assistant' && message.quickReplies && index === messages.length - 1 && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-0">
                    {message.quickReplies.map((reply, replyIndex) => (
                      <button
                        key={replyIndex}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-2 bg-white border border-[#C8C7C5] text-black text-xs rounded-[0px] hover:bg-black hover:text-white transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-0 border-t border-gray-100 bg-white">
        {isVoiceMode ? (
          /* Voice Mode Controls */
          <div className="px-6 py-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setIsVoiceMode(false)}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-[#C8C7C5] text-black rounded-[0px] hover:bg-gray-50 transition-colors"
            >
              <X className="w-5 h-5" />
              Exit
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`flex items-center gap-2 px-6 py-3 rounded-[0px] transition-colors ${
                isMuted 
                  ? 'bg-gray-200 text-gray-600 hover:bg-gray-300' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        ) : (
          /* Text Input */
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask about your skin, routines, ingredients..."
              className="w-full px-6 py-5 pr-28 border-0 rounded-[0px] text-sm focus:outline-none resize-none min-h-[64px] max-h-[120px]"
              rows={1}
              style={{
                height: 'auto',
                overflowY: input.split('\n').length > 2 ? 'auto' : 'hidden'
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 120) + 'px';
              }}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-6 flex items-center gap-2">
              <button
                onClick={() => setIsVoiceMode(true)}
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="Voice mode"
              >
                <Mic className="w-5 h-5" />
              </button>
              <div className="w-px h-5 bg-[#E5E7EB]" />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="text-black hover:text-gray-600 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}