'use client';

import { useState } from 'react';
import { Topic } from '@/types/index';

// 初心者向け：サンプルデータ（実際のAPIの代わり）
const sampleTopics: Topic[] = [
  { id: '1', name: '政治', category: '政治' },
  { id: '2', name: '経済', category: '経済' },
  { id: '3', name: 'スポーツ', category: 'スポーツ' },
  { id: '4', name: 'テクノロジー', category: 'テクノロジー' },
];

export default function SetSummarize() {
  // 選択されたトピックを管理する状態
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  // トピック選択時の処理
  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  // 要約取得ボタンクリック時の処理
  const handleGetSummary = () => {
    if (selectedTopic) {
      alert(`${selectedTopic}の要約を取得します`); // 初心者向け：簡単な確認
    } else {
      alert('トピックを選択してください');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">SetSummarize</h2>
      </div>
      
      {/* トピック選択エリア */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-700 mb-3">SelectTopics</h3>
        <select 
          value={selectedTopic} 
          onChange={(e) => handleTopicSelect(e.target.value)}
          className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
        >
          <option value="">トピックを選択してください</option>
          {sampleTopics.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>

      {/* 要約取得ボタン */}
      <button 
        onClick={handleGetSummary}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        GetSummaryButton
      </button>
    </div>
  );
} 