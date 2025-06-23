// src/app/page.tsx

import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection';
import ProducedBySection from '@/components/ProducedBySection';

export default function Home() {
  return (
    <main>
      <section className="page-section">
        <h2>GOAL</h2>
        <p className="content-box">ニュース要約紹介アプリの説明</p>
      </section>
      
      <HeroSection />
      <DemoSection />
      <ProducedBySection />
    </main>
  );
}