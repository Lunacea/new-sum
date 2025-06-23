// TODO: トピックデータのサンプルデータを定義する

import { Topic, NewsSummary, Reference } from '@/types/index';

// トピックのサンプルデータ
export const sampleTopics: Topic[] = [
  { id: '1', name: '政治', category: '政治' },
  { id: '2', name: '経済', category: '経済' },
  { id: '3', name: 'スポーツ', category: 'スポーツ' },
  { id: '4', name: 'テクノロジー', category: 'テクノロジー' },
];

// ニュース要約のサンプルデータ
export const sampleSummaries: NewsSummary[] = [
  {
    id: '1',
    title: '新しい政治改革法案が提出される',
    content: '政府は新しい政治改革法案を国会に提出しました。この法案は透明性の向上と民主的プロセスの強化を目的としており、今後数ヶ月で審議される予定です。',
    createdAt: '2024-01-15',
    topicId: '1'
  },
  {
    id: '2',
    title: '経済成長率が予想を上回る',
    content: '第4四半期の経済成長率が予想を上回り、多くの専門家が驚きを示しています。この成長は主に技術セクターの好調と消費者支出の増加によるものです。',
    createdAt: '2024-01-14',
    topicId: '2'
  },
  {
    id: '3',
    title: 'AI技術の最新動向',
    content: '人工知能技術の進歩が加速しており、特に自然言語処理と機械学習の分野で革新的な進展が見られています。この技術は様々な産業に影響を与えると予想されます。',
    createdAt: '2024-01-13',
    topicId: '4'
  }
];

// 参考文献のサンプルデータ
export const sampleReferences: Reference[] = [
  {
    id: '1',
    title: '政治改革に関する専門家の見解',
    link: 'https://example.com/politics/reform-analysis',
    referencedAt: '2024-01-15'
  },
  {
    id: '2',
    title: '経済成長データと分析レポート',
    link: 'https://example.com/economy/growth-report',
    referencedAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'AI技術の最新研究論文',
    link: 'https://example.com/tech/ai-research',
    referencedAt: '2024-01-13'
  },
  {
    id: '4',
    title: '産業界でのAI活用事例',
    link: 'https://example.com/tech/ai-industry-cases',
    referencedAt: '2024-01-12'
  }
];

