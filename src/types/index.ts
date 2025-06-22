// 開発初心者向け：基本的な型定義
// トピックの型
export interface Topic {
  id: string;
  name: string;
  category: string;
}

// ニュース要約の型
export interface NewsSummary {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  topicId: string;
}

// 参考文献の型
export interface Reference {
  id: string;
  title: string;
  link: string;
  referencedAt: string;
} 