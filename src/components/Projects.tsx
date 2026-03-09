import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  period: string
  link?: string
  github?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: '대우조선해양 지능형 통합검색 구축',
      description: '대우조선해양(현 한화오션)의 대규모 데이터를 대상으로 한 지능형 통합검색 시스템 구축. MS Cloud Graph API 연동 및 SSO 연동으로 보안 강화.',
      image: '🔍',
      period: '2021.09 ~ 2022.03 (6개월)',
      tags: ['SpringBoot', 'Java', 'Oracle', 'Mssql', 'Elasticsearch'],
    },
    {
      id: 2,
      title: '호텔신라 검색엔진 도입',
      description: '호텔신라 및 신라스테이의 내부 규정 검색 시스템 도입. 고급 검색 API 개발 및 최적화. 신규 검색 인프라 구축.',
      image: '🏨',
      period: '2022.04 ~ 2022.06 (3개월)',
      tags: ['Java', 'Oracle', 'Elasticsearch', 'API'],
    },
    {
      id: 3,
      title: '신한은행 AI 챗봇 오로라 고도화',
      description: '신한은행 AI 챗봇 오로라의 기능 고도화 SI 개발. 챗봇 인터페이스 셀프클로징 공통로직, 이체, 한도 변경, 거래내역 조회 및 이메일/팩스 발송 기능 개발.',
      image: '🤖',
      period: '2022.06 ~ 2022.12 (7개월)',
      tags: ['Spring', 'Java', 'Oracle', 'Chatbot'],
    },
    {
      id: 4,
      title: '플랫폼플레이스 검색엔진 도입',
      description: '플랫폼 쇼핑몰에 검색엔진 도입. 고성능 검색 API 개발 및 인덱싱 최적화.',
      image: '🛒',
      period: '2023.01 ~ 2023.03 (3개월)',
      tags: ['SpringBoot', 'Java', 'MariaDB', 'Elasticsearch'],
    },
    {
      id: 5,
      title: '와이즈넛 챗봇 솔루션 R&D',
      description: '챗봇 솔루션 제품 개발 및 연구. 문장 의도 분류 모델(XGboost) 추가 개발, 지식 DB를 SQLite에서 MongoDB로 전환, Redis 캐싱 적용.',
      image: '💬',
      period: '2023.03 ~ 2023.12 (10개월)',
      tags: ['RxJava', 'MongoDB', 'Redis', 'Docker', 'RabbitMQ'],
    },
    {
      id: 6,
      title: 'NH농협은행 디지털금융 플랫폼',
      description: '농협의 디지털금융 플랫폼 전환 구축. 외환, 카드 등 다양한 뱅킹업무 채널계 개발. 프리랜서로 1년 2개월 동안 참여하여 핵심 모듈 담당.',
      image: '🏦',
      period: '2024.01 ~ 2025.03 (1년 2개월)',
      tags: ['SpringBoot', 'Java', 'JavaScript', 'jQuery', 'Oracle'],
    },
    {
      id: 7,
      title: '토파스 IBE NDC 기능 개선 프로젝트',
      description: '토파스 여행정보 플랫폼의 NDC 항공 예약 기능 개선. 항공권 예약 기능 개선 및 항공권 재발행 신규 기능 개발. Vue.js 기반 프론트엔드 구현.',
      image: '✈️',
      period: '2025.05 ~ 2025.12 (7개월)',
      tags: ['Spring', 'Java', 'Vue.js', 'Oracle', 'NDC'],
    }
  ]

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">주요 프로젝트</h2>
        <p className="section-subtitle">완료한 프로젝트들을 통해 제 기술을 확인해보세요</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub size={18} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
