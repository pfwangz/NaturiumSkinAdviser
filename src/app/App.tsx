import React, { useState } from 'react';
import { HomeDashboard } from './components/HomeDashboard';
import { SkinJournal } from './components/SkinJournal';
import { SkinCoach } from './components/SkinCoach';
import { AIInsightExpanded } from './components/AIInsightExpanded';
import { RoutineBuilder } from './components/RoutineBuilder';
import { RoutineSimulation } from './components/RoutineSimulation';
import { IngredientExplorer } from './components/IngredientExplorer';
import { IngredientDetail } from './components/IngredientDetail';
import { ProgressTimeline } from './components/ProgressTimeline';
import { AddPhotoEntry } from './components/AddPhotoEntry';
import { ProgramOverview } from './components/ProgramOverview';
import { ProductRecommendations } from './components/ProductRecommendations';
import { BottomNavigation } from './components/BottomNavigation';
import backgroundImage from 'figma:asset/987ad887b011e4dc537c527d827b0c513a163b1c.png';

export type Screen = 
  | 'home' 
  | 'journal'
  | 'skin-coach' 
  | 'ai-insight' 
  | 'routine-builder' 
  | 'routine-simulation' 
  | 'ingredient-explorer' 
  | 'ingredient-detail' 
  | 'progress-timeline' 
  | 'add-photo' 
  | 'program-overview'
  | 'product-recommendations';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('skin-coach');
  const [selectedIngredient, setSelectedIngredient] = useState<string>('');
  const [initialQuestion, setInitialQuestion] = useState<string>('');
  const [conversationId, setConversationId] = useState<string>('');
  const [routineIngredients, setRoutineIngredients] = useState<string[]>([]);

  const handleNavigateWithQuestion = (question: string) => {
    setInitialQuestion(question);
    setCurrentScreen('skin-coach');
  };

  const handleNavigateWithConversation = (convId: string) => {
    setConversationId(convId);
    setCurrentScreen('skin-coach');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeDashboard onNavigate={setCurrentScreen} onAskQuestion={handleNavigateWithQuestion} onOpenConversation={handleNavigateWithConversation} />;
      case 'journal':
        return <SkinJournal onNavigate={setCurrentScreen} />;
      case 'skin-coach':
        return <SkinCoach onNavigate={setCurrentScreen} initialQuestion={initialQuestion} onQuestionHandled={() => setInitialQuestion('')} conversationId={conversationId} onConversationHandled={() => setConversationId('')} />;
      case 'ai-insight':
        return <AIInsightExpanded onNavigate={setCurrentScreen} />;
      case 'routine-builder':
        return <RoutineBuilder onNavigate={setCurrentScreen} setRoutineIngredients={setRoutineIngredients} />;
      case 'routine-simulation':
        return <RoutineSimulation onNavigate={setCurrentScreen} />;
      case 'ingredient-explorer':
        return <IngredientExplorer onNavigate={setCurrentScreen} setIngredient={setSelectedIngredient} />;
      case 'ingredient-detail':
        return <IngredientDetail onNavigate={setCurrentScreen} ingredient={selectedIngredient} />;
      case 'progress-timeline':
        return <ProgressTimeline onNavigate={setCurrentScreen} />;
      case 'add-photo':
        return <AddPhotoEntry onNavigate={setCurrentScreen} />;
      case 'program-overview':
        return <ProgramOverview onNavigate={setCurrentScreen} />;
      case 'product-recommendations':
        return <ProductRecommendations onNavigate={setCurrentScreen} routineIngredients={routineIngredients} />;
      default:
        return <HomeDashboard onNavigate={setCurrentScreen} onAskQuestion={handleNavigateWithQuestion} onOpenConversation={handleNavigateWithConversation} />;
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(249,250,251)] flex items-center justify-center p-4 md:p-8">
      {/* Background image with overlay */}
      <div className="fixed inset-0 -z-10">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      
      {/* Mock Naturium brand header in background */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 -z-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded" />
            <span style={{ fontFamily: 'Canela, serif' }} className="text-lg">NATURIUM</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <span className="text-gray-600">Shop</span>
            <span className="text-gray-600">Ingredients</span>
            <span className="text-gray-600">About</span>
          </div>
        </div>
      </div>
      
      {/* Slide-over panel - appears from right side, takes 1/4 of screen width on desktop */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[600px] md:w-[560px] lg:w-[25vw] bg-white shadow-2xl border-l border-gray-200 animate-slide-in flex flex-col z-50">
        <div className="flex-1 overflow-hidden">
          {renderScreen()}
        </div>
        <BottomNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      </div>
    </div>
  );
}