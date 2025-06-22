import { NewsSummary } from '@/types/index';

// 初心者向け：サンプルデータ
const sampleSummaries: NewsSummary[] = [
  {
    id: '1',
    title: '政治ニュース要約',
    content: '今日の政治に関するニュースをまとめました...',
    createdAt: '2024-01-15',
    topicId: '1'
  },
  {
    id: '2', 
    title: '経済ニュース要約',
    content: '経済市場の動向について...',
    createdAt: '2024-01-14',
    topicId: '2'
  }
];

export default function PickedSummaryList() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">PickedSummaryList</h2>
      </div>
      
      {/* 整理サマリ群 */}
      <div className="mb-8">
        <h3 className="font-semibold text-slate-700 mb-4">整理サマリ群</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-700 font-medium">
              選択済みの要約: {sampleSummaries.length}件
            </span>
          </div>
        </div>
      </div>

      {/* NewsSummary表示 */}
      <div>
        <h3 className="font-semibold text-slate-700 mb-4">NewsSummary</h3>
        <div className="space-y-4">
          {sampleSummaries.map(summary => (
            <div key={summary.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-slate-800 mb-2">{summary.title}</h4>
              <p className="text-slate-600 text-sm mb-3">{summary.content}</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                <span className="text-xs text-slate-500">{summary.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 