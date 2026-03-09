import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 양식 제출 처리
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // 3초 후 성공 메시지 숨김
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <p className="section-subtitle">저와 함께 협업할 준비가 되었습니다</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>직접 연락하기</h3>
            
            <div className="info-item">
              <FiMail size={24} />
              <div>
                <h4>이메일</h4>
                <a href="mailto:changhee.kim@example.com">changhee.kim@example.com</a>
              </div>
            </div>

            <div className="info-item">
              <FiPhone size={24} />
              <div>
                <h4>전화</h4>
                <a href="tel:+82-10-xxxx-xxxx">+82-10-XXXX-XXXX</a>
              </div>
            </div>

            <div className="info-item">
              <FiMapPin size={24} />
              <div>
                <h4>위치</h4>
                <p>Seoul, South Korea</p>
              </div>
            </div>

            <div className="social-links">
              <h4>소셜 미디어</h4>
              <div className="social-icons">
                <a href="https://github.com/dev-hee99" target="_blank" rel="noopener noreferrer" className="social-btn">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>메시지 보내기</h3>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="주제"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="메시지"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FiSend size={18} />
              메시지 보내기
            </button>

            {submitted && (
              <div className="success-message">
                ✓ 메시지가 성공적으로 전송되었습니다!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
