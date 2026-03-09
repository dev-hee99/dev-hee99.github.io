import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Backend',
      skills: ['SpringBoot', 'Java', 'Oracle', 'PostgreSQL', 'MariaDB', 'Mssql']
    },
    {
      icon: FiDatabase,
      title: 'Frontend',
      skills: ['JavaScript', 'jQuery', 'Vue.js', 'Html', 'CSS', 'Jsp']
    },
    {
      icon: FiTool,
      title: 'Tools & Others',
      skills: ['Docker', 'MongoDB', 'Redis', 'RabbitMQ', 'Elasticsearch', 'Git']
    }
  ]

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <p className="section-subtitle">4년+ 경력동안 다양한 기술을 활용한 프로젝트를 수행했습니다</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="skill-category">
                <div className="skill-icon">
                  <IconComponent size={40} />
                </div>
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="proficiency">
          <h3>핵심 기술 숙련도</h3>
          <div className="proficiency-list">
            {[
              { name: 'Java & SpringBoot', level: 95 },
              { name: 'SQL & Database Design', level: 92 },
              { name: 'Backend 아키텍처', level: 90 },
              { name: 'Frontend 개발', level: 82 },
              { name: 'DevOps & Deployment', level: 80 }
            ].map((prof, index) => (
              <div key={index} className="proficiency-item">
                <div className="proficiency-header">
                  <span className="proficiency-name">{prof.name}</span>
                  <span className="proficiency-value">{prof.level}%</span>
                </div>
                <div className="proficiency-bar">
                  <div className="proficiency-fill" style={{ width: `${prof.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
