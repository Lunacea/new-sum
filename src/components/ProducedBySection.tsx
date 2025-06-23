// src/components/ProducedBySection.tsx

import React from 'react';

const ProducedBySection = () => {
  return (
    <section className="page-section">
      <h2>ProducedBy</h2>
      <div className="content-box">
        <p>技術スタックのアイコン集</p>
        <div className="icons">
          {/* ここではテキストですが、将来的にはアイコンコンポーネントに置き換えます */}
          <span>Icon1</span>
          <span>Icon2</span>
          <span>Icon3</span>
        </div>
      </div>
    </section>
  );
};

export default ProducedBySection;