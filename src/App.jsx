import { useState, useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>IVF KOREA</h1>
        <p>세상의 캠퍼스, 캠퍼스의 세상속으로</p>
        <a href="#join" className="btn-primary">함께하기</a>
      </header>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">소개</h2>
        <div className="card">
          <p>
            한국기독학생회(IVF)는 '세상의 캠퍼스, 캠퍼스의 세상속으로'라는 슬로건 아래
            캠퍼스와 세상 속에서 하나님의 통치를 실현하고자 하는 복음주의 학생운동 단체입니다.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision">
        <h2 className="section-title">비전 & 핵심가치</h2>
        <div className="grid">
          <div className="card">
            <h3>성경적인 삶</h3>
            <p>말씀을 통해 삶의 방향을 찾고 실천합니다.</p>
          </div>
          <div className="card">
            <h3>공동체 정신</h3>
            <p>서로 사랑하며 함께 성장하는 공동체를 이룹니다.</p>
          </div>
          <div className="card">
            <h3>복음 전파</h3>
            <p>캠퍼스와 세상에 기쁜 소식을 전합니다.</p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <h2 className="section-title">활동내용</h2>
        <div className="grid">
          <div className="card">
            <h3>LGM (Large Group Meeting)</h3>
            <p>매주 함께 모여 예배하고 교제하는 정기 모임입니다.</p>
          </div>
          <div className="card">
            <h3>소그룹 모임</h3>
            <p>삶의 나눔과 말씀 공부를 진행하는 친밀한 모임입니다.</p>
          </div>
          <div className="card">
            <h3>수련회 & 아카데미</h3>
            <p>방학 중 성경 연구와 제자 도를 배우는 집중 훈련입니다.</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join">
        <h2 className="section-title">함께하는 방법</h2>
        <div className="card" style={{ textAlign: 'center' }}>
          <p>새내기, 재학생 누구나 환영합니다!</p>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://www.instagram.com/ivfkorea/" target="_blank" rel="noopener noreferrer" className="btn-primary">Instagram</a>
            <a href="mailto:contact@ivf.or.kr" className="btn-primary" style={{ backgroundColor: '#1e293b' }}>문의하기</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-soft)', borderTop: '1px solid #e2e8f0' }}>
        <p>© 2026 IVF KOREA. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
