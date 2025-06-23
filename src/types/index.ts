// TODO: ニュース要約に関する型を定義する
// TODO: データベース設計を行い、型を定義する

// トピックの型
export interface Topic {
  id: string;
  name: string;
  category: string;
}

// TODO: topicIdをTopic型から取得するようにする
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
