import './About.css'

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <h2 className="section-title">소개</h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3>about me</h3>
                        <p>
                            4년+ 경력의 Java 풀스택 개발자로, 금융, 항공, 검색 등 다양한 산업 분야의 엔터프라이즈 프로젝트를 수행했습니다.
                            현재는 프리랜서로 활동하며 SpringBoot 기반의 안정적이고 확장 가능한 솔루션을 구축합니다.
                        </p>
                        <p>
                            정보처리기사, SQL개발자(SQLD), 정보처리산업기사 자격을 보유하고 있으며,
                            지속적인 학습과 최신 기술 적용을 통해 높은 수준의 개발을 진행합니다.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">년의 경력</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">완료된 프로젝트</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">3</div>
                                <div className="stat-label">보유 자격증</div>
                            </div>
                        </div>

                        <div className="about-certifications">
                            <h4>보유 자격증</h4>
                            <ul className="cert-list">
                                <li>✓ 정보처리기사 (2022.11)</li>
                                <li>✓ SQL개발자(SQLD) (2021.04)</li>
                                <li>✓ 정보처리산업기사 (2020.09)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-timeline">
                        <h3>학력 및 경력</h3>

                        <div className="timeline-item">
                            <div className="timeline-marker degree-marker\"></div>
                            <div className="timeline-content">
                                <h4>두원공과대학교 (2021.02 졸업)</h4>
                                <p>전문학사 - 스마트소프트웨어학과</p>
                                <span className="timeline-desc\">프로그래밍 기초 및 실무 기술 습득</span>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker degree-marker"></div>
                                <div className="timeline-content">
                                    <h4>국가평생교육진흥원대학교 (2022.02 졸업)</h4>
                                    <p>학사 - 컴퓨터공학과</p>
                                    <span className="timeline-desc\">최신 컴퓨터공학 이론 습득</span>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h4>(주) 와이즈넛 (2021.08 ~ 2023.12)</h4>
                                    <p>솔루션 개발 및 연구 개발</p>
                                    <span className="timeline-desc">2년 4개월 | ChatsBot R&D, 검색엔진 개발</span>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h4>프리랜서 활동 (2024.01 ~ Present)</h4>
                                    <p>풀스택 웹 애플리케이션 개발</p>
                                    <span className="timeline-desc\">금융, 항공 등 다양한 도메인의 프로젝트 수행</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
