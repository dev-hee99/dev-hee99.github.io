import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

interface HeaderProps {
  onNavigate: (sectionId: string) => void
  activeSection: string
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: '홈', id: 'home' },
    { label: '소개', id: 'about' },
    { label: '기술', id: 'skills' },
    { label: '프로젝트', id: 'projects' },
    { label: '연락처', id: 'contact' },
  ]

  const handleClick = (id: string) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">{'<'}</span>
            About
            <span className="logo-icon">{'>'}</span>
          </div>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
