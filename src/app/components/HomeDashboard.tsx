import React from "react";
import {
  Settings,
  Sun,
  Droplets,
  User,
  BookOpen,
  Sparkles,
  MessageCircle,
  Beaker,
  Send,
} from "lucide-react";
import { Screen } from "../App";
import naturiumLogo from "figma:asset/0de4e7d939c801856973b5afdce10426809fa9b9.png";
import { Header } from "./Header";

interface HomeDashboardProps {
  onNavigate: (screen: Screen) => void;
  onAskQuestion: (question: string) => void;
  onOpenConversation: (conversationId: string) => void;
}

export function HomeDashboard({
  onNavigate,
  onAskQuestion,
  onOpenConversation,
}: HomeDashboardProps) {
  const [coachInput, setCoachInput] = React.useState('');

  const handleAskQuestion = () => {
    if (!coachInput.trim()) return;
    onAskQuestion(coachInput);
    setCoachInput('');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Scrollable Content */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6 space-y-8 bg-[rgb(235,234,232)]"
      >
        {/* Quick Actions */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate("ingredient-explorer")}
              className="bg-[rgb(255,255,255)] hover:bg-gray-50 rounded-[0px] p-4 transition-colors text-left border border-[#C8C7C5]"
            >
              <Beaker className="w-6 h-6 text-black mb-2" />
              <p className="text-sm font-medium text-black">
                Ingredient Guide
              </p>
            </button>

            <button
              onClick={() => onNavigate("journal")}
              className="bg-white hover:bg-gray-50 rounded-[0px] p-4 transition-colors text-left border border-[#C8C7C5]"
            >
              <BookOpen className="w-6 h-6 text-black mb-2" />
              <p className="text-sm font-medium text-black">
                Skin Journal
              </p>
            </button>
          </div>
        </section>

        {/* Today's Snapshot */}
        <section>
          <h4
            style={{ fontFamily: "Canela, serif" }}
            className="mb-4 hidden"
          >
            Today's Snapshot
          </h4>

          <div className="space-y-4">
            {/* Skin Metrics */}
            <div className="space-y-3 hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Hydration Score
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i <= 3 ? "bg-blue-500" : "bg-gray-200"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Sensitivity Score
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i <= 2 ? "bg-amber-500" : "bg-gray-200"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Barrier Health
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i <= 4 ? "bg-green-500" : "bg-gray-200"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Weather Alert */}
            <div className="bg-[rgb(0,0,0)] rounded-[0px] p-4 mt-4">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-white mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">
                    UV High Today
                  </p>
                  <p className="text-xs text-white mt-1">
                    Remember SPF. Low humidity expected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Routines */}
        <section>
          <h4
            style={{ fontFamily: "Canela, serif" }}
            className="mb-4"
          >
            Your Routines
          </h4>

          <div className="space-y-3">
            {/* AM Routine */}
            <button
              onClick={() => onNavigate("routine-builder")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">
                  AM Routine
                </span>
                <Sun className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FFD9D3' }}>
                    C
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Vitamin C Serum
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FEC1B7' }}>
                    N
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Niacinamide
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FEA89B' }}>
                    M
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Moisturizer
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FE8F7F' }}>
                    S
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    SPF/Sunscreen
                  </div>
                </div>
              </div>
            </button>

            {/* PM Routine */}
            <button
              onClick={() => onNavigate("routine-builder")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">
                  PM Routine
                </span>
                <Droplets className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FEB5A9' }}>
                    R
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Retinol
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FEC1B7' }}>
                    H
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Hyaluronic Acid
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FFD9D3' }}>
                    M
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Moisturizer
                  </div>
                </div>
              </div>
            </button>

            {/* Weekly Treatment */}
            <button
              onClick={() => onNavigate("routine-builder")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">
                  Weekly Treatment
                </span>
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FE8F7F' }}>
                    P
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Peel
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#FEA89B' }}>
                    E
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Exfoliant
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>

        {/* Skin Coach */}
        <section className="relative m-[0px]">
          <h4
            style={{ fontFamily: "Canela, serif" }}
            className="mb-2"
          >
            Skin Coach
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Get personalized skincare advice, ingredient recommendations, and routine guidance powered by science.
          </p>

          <div className="relative mb-6 m-[0px]">
            <textarea
              value={coachInput}
              onChange={(e) => setCoachInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleAskQuestion();
                }
              }}
              placeholder="Ask about your skin, routines, ingredients..."
              className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-[0px] text-sm focus:outline-none focus:border-[#C8C7C5] resize-none min-h-[48px] max-h-[120px]"
              rows={1}
              style={{
                height: 'auto',
                overflowY: coachInput.split('\n').length > 2 ? 'auto' : 'hidden'
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 120) + 'px';
              }}
            />
            <button
              onClick={handleAskQuestion}
              disabled={!coachInput.trim()}
              className="absolute bottom-3 right-3 text-black hover:text-gray-600 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed pt-[0px] pr-[0px] pb-[6px] pl-[0px]"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Skin Coach History */}
        <section className="-mt-2">
          <h6
            style={{ fontFamily: "Averta, sans-serif" }}
            className="mb-4"
          >
            Recent Conversations
          </h6>

          <div className="space-y-3">
            {/* Chat - Rough Skin & Barrier Damage */}
            <button
              onClick={() => onOpenConversation("rough-skin")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium">
                  Rough Skin & Barrier Damage
                </span>
                <p className="text-xs text-gray-400">
                  Dec 11, 2025
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Glycolic acid peel recommendations for texture
              </p>
            </button>

            {/* Recent Chat - Retinol Questions */}
            <button
              onClick={() => onOpenConversation("retinol-questions")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium">
                  Retinol Questions
                </span>
                <p className="text-xs text-gray-400">
                  Dec 8, 2025
                </p>
              </div>
              <p className="text-xs text-gray-500">
                How to layer retinol with niacinamide
              </p>
            </button>

            {/* Chat - Acne Concerns */}
            <button
              onClick={() => onOpenConversation("acne-concerns")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium">
                  Acne Concerns
                </span>
                <p className="text-xs text-gray-400">
                  Dec 5, 2025
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Best ingredients for hormonal breakouts
              </p>
            </button>

            {/* Chat - Sensitive Skin */}
            <button
              onClick={() => onOpenConversation("sensitive-skin")}
              className="w-full bg-white hover:bg-gray-50 border border-[#C8C7C5] rounded-[0px] p-4 transition-colors text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium">
                  Sensitive Skin Care
                </span>
                <p className="text-xs text-gray-400">
                  Dec 1, 2025
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Gentle exfoliation recommendations
              </p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}