// ニュース要約紹介アプリ - メイン画面（ヘッダーとフッターはlayout.tsxで管理）
import SetSummarize from '@/components/SetSummarize';
import PickedSummaryList from '@/components/PickedSummaryList';
import NewsSummaryList from '@/components/NewsSummaryList';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* アプリ概要セクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">App</h1>
          <p className="text-blue-100">
            <strong>GOAL:</strong> ニュース要約紹介アプリを構築する
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        
        {/* SetSummarize セクション */}
        <section>
          <SetSummarize />
        </section>

        {/* PickedSummaryList セクション */}
        <section>
          <PickedSummaryList />
        </section>

        {/* NewsSummaryList セクション */}
        <section>
          <NewsSummaryList />
        </section>

      </main>
    </div>
  );
}
