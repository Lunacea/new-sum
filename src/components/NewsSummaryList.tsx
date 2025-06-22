'use client';

import { useState } from 'react';
import { NewsSummary, Reference } from '@/types/index';

// 初心者向け：サンプルデータ
const sampleReferences: Reference[] = [
  {
    id: '1',
    title: 'NHKニュース',
    link: 'https://www.nhk.or.jp',
    referencedAt: '2024-01-15'
  },
  {
    id: '2',
    title: '朝日新聞',
    link: 'https://www.asahi.com',
    referencedAt: '2024-01-15'
  }
];

const sampleSummaries: NewsSummary[] = [
  {
    id: '1',
    title: 'テクノロジー業界の最新動向',
    content: 'AI技術の進歩により、様々な業界で変革が起きています。表示文字列に制限をつけて...',
    createdAt: '2024-01-15',
    topicId: '4'
  }
];

export default function NewsSummaryList() {
  // 折り畳み状態を管理
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  // お気に入り状態を管理
  const [isFavorite, setIsFavorite] = useState(false);
  // フィルター状態を管理
  const [filterTopic, setFilterTopic] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">NewsSummaryList</h2>
      </div>
      
      {/* Topics フィルター */}
      <div className="mb-8">
        <h3 className="font-semibold text-slate-700 mb-3">Topics</h3>
        <p className="text-slate-600 text-sm mb-3">Topicsでフィルタリング可能にする</p>
        <select 
          value={filterTopic}
          onChange={(e) => setFilterTopic(e.target.value)}
          className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
        >
          <option value="">すべてのトピック</option>
          <option value="politics">政治</option>
          <option value="economy">経済</option>
          <option value="tech">テクノロジー</option>
        </select>
      </div>

      {/* NewsSummary */}
      <div className="mb-8">
        <h3 className="font-semibold text-slate-700 mb-4">NewsSummary</h3>
        {sampleSummaries.map(summary => (
          <div key={summary.id} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            {/* Title */}
            <h4 className="font-semibold text-slate-800 text-lg mb-3">{summary.title}</h4>
            
            {/* CreatedAt - 日付降順に表示 */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-xs text-slate-500">
                作成日: {summary.createdAt}
              </span>
            </div>
            
            {/* ArticleSummary - 表示文字列に制限をつける */}
            <p className="text-slate-600 mb-4 leading-relaxed">
              {summary.content.length > 50 
                ? `${summary.content.substring(0, 50)}...` 
                : summary.content
              }
            </p>
            
            {/* PickToggleButton - お気に入り登録/解除 */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isFavorite 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200' 
                  : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              {isFavorite ? '★ お気に入り解除' : '☆ お気に入り登録'}
            </button>
          </div>
        ))}
      </div>

      {/* References */}
      <div>
        <h3 className="font-semibold text-slate-700 mb-4">References</h3>
        
        {/* DropdownButton - 折り畳み可能にする */}
        <button
          onClick={() => setIsReferencesOpen(!isReferencesOpen)}
          className="w-full p-4 bg-orange-50 border border-orange-200 text-left rounded-lg hover:bg-orange-100 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-orange-800 font-medium">
              {isReferencesOpen ? '参考文献を隠す' : '参考文献を表示'}
            </span>
            <span className={`text-orange-600 transition-transform duration-200 ${isReferencesOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </button>
        
        {/* 折り畳み可能な参考文献リスト */}
        {isReferencesOpen && (
          <div className="mt-4 space-y-3">
            {sampleReferences.map(ref => (
              <div key={ref.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">{ref.title}</div>
                <a href={ref.link} className="text-blue-600 hover:text-blue-800 hover:underline text-sm block mb-2">
                  {ref.link}
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span className="text-xs text-slate-500">
                    参照日: {ref.referencedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 