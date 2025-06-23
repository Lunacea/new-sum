// src/components/HeroSection.tsx

import React from 'react';
import Link from 'next/link'; // ページ間リンク用のNext.jsのコンポーネント

const HeroSection = () => {
  return (
    <section className="page-section">
      <h2>HeroSection</h2>
      <div className="content-box">
        <h3>キーバリューの説明文</h3>
        <p className="hero-animation-note">Coolな背景・アニメーション（ワクワクさせる）</p>
        <Link href="/signup" className="cta-button">
          今すぐ始める
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;