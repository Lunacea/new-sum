// src/components/DemoSection.tsx

import React from 'react';
import Image from 'next/image'; // 画像表示用のNext.jsのコンポーネント

const DemoSection = () => {
  return (
    <section className="page-section">
      <h2>Demo</h2>
      <div className="content-box">
        <h3>機能紹介</h3>
        {/* Next.jsのImageコンポーネントを使うと自動で画像を最適化してくれます */}
        <Image
          src="https://placehold.jp/400x250.gif?text=デモ用GIF"
          alt="アプリの動作デモGIF"
          width={400}
          height={250}
          style={{ maxWidth: '100%', height: 'auto', marginTop: '16px', border: '1px solid #ccc' }}
        />
      </div>
    </section>
  );
};

export default DemoSection;