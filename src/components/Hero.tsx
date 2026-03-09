import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            안녕하세요! 👋
            <br />
            <span className="highlight">김창희</span>입니다
          </h1>
          <p className="hero-subtitle">
            4년+ 경력 풀스택 개발자 (대리)
          </p>
          <p className="hero-description">
            SpringBoot, Java, Oracle을 활용한 엔터프라이즈 웹 애플리케이션 개발 전문입니다.
            <br />
            금융, 항공, 검색 등 다양한 분야의 실무 프로젝트를 수행했으며,
            <br />
            최근에는 프리랜서로 현대적인 풀스택 솔루션을 구축하고 있습니다.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => onNavigate('projects')}
            >
              프로젝트 보기
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => onNavigate('contact')}
            >
              연락하기
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/dev-hee99" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/%EC%B0%BD%ED%9D%AC-%EA%B9%80-62bbb52a8/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:kch0348@gmail.com" className="social-link">
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <img 
                  src="/profile.jpg" 
                  alt="김창희" 
                  className="profile-image"
                  onError={(e) => {
                    console.error('프로필 이미지 로드 실패:', e);
                    const img = e.target as HTMLImageElement;
                    img.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23e0e7ff%22 width=%22200%22 height=%22200%22/%3E%3Ccircle cx=%22100%22 cy=%2270%22 r=%2235%22 fill=%22%23cbd5e1%22/%3E%3Cellipse cx=%22100%22 cy=%22140%22 rx=%2250%22 ry=%2240%22 fill=%22%23cbd5e1%22/%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
            <div className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-var">me</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-key">name</span>: <span className="code-string">'김창희'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-key">experience</span>: <span className="code-number">4</span>+ <span className="code-string">'years'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-key">skills</span>: [<span className="code-string">'Java'</span>, <span className="code-string">'Spring'</span>, <span className="code-string">'Oracle'</span>]
              </div>
              <div className="code-line indent">
                <span className="code-key">status</span>: <span className="code-string">'Freelancer'</span>
              </div>
              <div className="code-line">{'}'};</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
