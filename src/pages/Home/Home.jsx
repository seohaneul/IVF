import React from 'react';
import { Users, Heart, Coffee, Tent, Info, Camera, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import './Home.css';
import logo from '../../assets/images/ivf-logo-only.png';
import welcomeImg from '../../assets/images/activity-welcome.png';
import studyImg from '../../assets/images/activity-bible.png';
import mtImg from '../../assets/images/activity-mt.png';

const Home = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/your-id-here"; // Replace with actual URL
    const instaUrl = "https://www.instagram.com/ivf_korea/";
    const kakaoUrl = "https://open.kakao.com/o/s-your-id";

    return (
        <div className="home-container fade-in">
            {/* Welcome Image Section */}
            <section className="welcome-section">
                <img src={welcomeImg} alt="Welcome to IVF" className="full-banner-img" />
            </section>

            {/* Hero Section */}
            <section className="hero-simple">
                <p className="subtitle">
                    우리는 캠퍼스와 세상 속에서 하나님의 통치를 실현하고자 하는 복음주의 학생운동 단체, <span className="bold">IVF</span>입니다.
                </p>
            </section>

            {/* Activities Restructured with Slider */}
            <section className="activities-v2">
                <h2 className="section-title">주요 활동 소개</h2>
                <div className="activity-slider">
                    <div className="activity-block">
                        <div className="img-wrapper">
                            <img src={studyImg} alt="Bible Study" />
                            <div className="activity-badge">SPIRITUAL</div>
                        </div>
                        <div className="content">
                            <h3>기독교 활동 (GIBS & 기도회)</h3>
                            <p>
                                깊이 있는 성경연구 프로그램인 GIBS(귀납적 성경공부)와 매일 기도로
                                시작하는 매기모를 통해 영적 성장을 도모합니다. 소그룹과 큰모임을
                                통해 말씀의 기쁨을 함께 나눕니다.
                            </p>
                            <ul className="detail-tags">
                                <li>#성경공부</li>
                                <li>#기도회</li>
                                <li>#성경통독</li>
                                <li>#중보기도</li>
                            </ul>
                        </div>
                    </div>

                    <div className="activity-block">
                        <div className="img-wrapper">
                            <img src={mtImg} alt="MT and Social" />
                            <div className="activity-badge">SOCIAL</div>
                        </div>
                        <div className="content">
                            <h3>친목 & 라이프 (MT & 소모임)</h3>
                            <p>
                                동아리방(동방)에서의 아늑한 일상부터 축구, 손글씨 성경, 교환독서 등
                                다채로운 취미 소모임이 열려 있습니다. 번개 모임과 즐거운 MT를
                                통해 끈끈한 공동체를 경험하세요.
                            </p>
                            <ul className="detail-tags">
                                <li>#MT/번개</li>
                                <li>#학보리</li>
                                <li>#취미활동</li>
                                <li>#동방일상</li>
                            </ul>
                        </div>
                    </div>

                    <div className="activity-block">
                        <div className="img-wrapper">
                            <div className="photo-placeholder-large">
                                <span>수련회 사진 들어갈 자리</span>
                            </div>
                            <div className="activity-badge">UNITY</div>
                        </div>
                        <div className="content">
                            <h3>연합 & 대형 활동 (수련회)</h3>
                            <p>
                                전국/지부 단위의 전국 수련회(여름, 겨울)를 통해 다른 캠퍼스
                                동기들과 연합하며 넓은 세계관을 가집니다. 지부 연합 큰모임을
                                통해 연합공동체의 힘을 공유합니다.
                            </p>
                            <ul className="detail-tags">
                                <li>#전국수련회</li>
                                <li>#지부연합</li>
                                <li>#캠퍼스연합</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Buttons */}
            <section className="social-section">
                <h3 className="section-subtitle">더 많은 소식이 궁금하다면?</h3>
                <div className="social-links">
                    <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                        <Instagram size={20} />
                        <span>Instagram</span>
                    </a>
                    <a href={kakaoUrl} target="_blank" rel="noopener noreferrer" className="social-btn kakao">
                        <MessageCircle size={20} />
                        <span>KakaoTalk</span>
                    </a>
                </div>
            </section>

            <div className="pb-fixed-spacer"></div>

            {/* Fixed Apply Button */}
            <div className="fixed-action-bar">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="fixed-apply-btn">
                    <span>지금 지원하기</span>
                    <ExternalLink size={18} />
                </a>
            </div>
        </div>
    );
};

export default Home;
