import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>김창희</h4>
            <p>Java 풀스택 개발자</p>
            <p style={{ fontSize: '0.9em', opacity: 0.7 }}>SpringBoot, Oracle 전문</p>
          </div>

          <div className="footer-section">
            <h4>빠른 링크</h4>
            <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#about">소개</a></li>
              <li><a href="#skills">기술</a></li>
              <li><a href="#projects">프로젝트</a></li>
              <li><a href="#contact">연락처</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>소셜 미디어</h4>
            <div className="footer-socials">
              <a href="https://github.com/dev-hee99" target="_blank" rel="noopener noreferrer">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter size={20} />
              </a>
              <a href="mailto:your-email@example.com">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} dev-hee99. All rights reserved.</p>
          <p>Designed & Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
