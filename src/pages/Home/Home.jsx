import React, { useState, useRef } from 'react';
import { Users, Heart, Coffee, Tent, Info, Camera, MessageCircle, Instagram, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import './Home.css';
import bannerImg from '../../assets/images/activity-banner-new.png';
import studyImg from '../../assets/images/activity-bible.png';
import mtImg from '../../assets/images/activity-mt.png';
import spiritualImg1 from '../../assets/images/activity-spiritual-1.jpg';
import spiritualImg2 from '../../assets/images/activity-spiritual-2.jpg';
import spiritualImg3 from '../../assets/images/activity-spiritual-3.jpg';
import socialImg1 from '../../assets/images/activity-social-1.jpg';
import socialImg2 from '../../assets/images/activity-social-2.jpg';
import socialImg3 from '../../assets/images/activity-social-3.jpg';
import socialImg4 from '../../assets/images/activity-social-4.jpg';
import socialImg5 from '../../assets/images/activity-social-5.jpg';
import unityImg1 from '../../assets/images/activity-unity-1.jpg';
import unityImg2 from '../../assets/images/activity-unity-2.jpg';
import unityImg3 from '../../assets/images/activity-unity-3.jpg';
import unityImg4 from '../../assets/images/activity-unity-4.jpg';
import unityImg5 from '../../assets/images/activity-unity-5.jpg';

const ImageSlider = ({ images, badge }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setCurrentIndex(index);
        }
    };

    const scrollToIndex = (index) => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * sliderRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="image-slider-container">
            <div className="image-slider" ref={sliderRef} onScroll={handleScroll}>
                {images.map((img, idx) => (
                    <div key={idx} className="slider-item">
                        {typeof img === 'string' ? (
                            <img src={img} alt={`Slide ${idx + 1}`} />
                        ) : (
                            img
                        )}
                    </div>
                ))}
            </div>

            <div className="activity-badge">{badge}</div>

            {/* Navigation Arrows */}
            {currentIndex > 0 && (
                <button
                    className="slider-nav-btn prev"
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
            )}
            {currentIndex < images.length - 1 && (
                <button
                    className="slider-nav-btn next"
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            {/* Pagination Dots */}
            <div className="slider-dots">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => scrollToIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/your-id-here";
    const instaUrl = "https://www.instagram.com/ivf_korea/";
    const kakaoUrl = "https://open.kakao.com/o/s-your-id";

    const activities = [
        {
            id: 'spiritual',
            badge: 'SPIRITUAL',
            title: '기독교 활동 (GIBS & 기도회)',
            desc: '깊이 있는 성경연구 프로그램인 GIBS(귀납적 성경공부)와 매일 기도로 시작하는 매기모를 통해 영적 성장을 도모합니다. 소그룹과 큰모임을 통해 말씀의 기쁨을 함께 나눕니다.',
            tags: ['#성경공부', '#기도회', '#성경통독', '#중보기도'],
            images: [spiritualImg1, spiritualImg2, spiritualImg3]
        },
        {
            id: 'social',
            badge: 'SOCIAL',
            title: '친목 & 라이프 (MT & 소모임)',
            desc: '동아리방(동방)에서의 아늑한 일상부터 축구, 손글씨 성경, 교환독서 등 다채로운 취미 소모임이 열려 있습니다. 번개 모임과 즐거운 MT를 통해 끈끈한 공동체를 경험하세요.',
            tags: ['#MT/번개', '#학보리', '#취미활동', '#동방일상'],
            images: [socialImg1, socialImg2, socialImg3, socialImg4, socialImg5]
        },
        {
            id: 'unity',
            badge: 'UNITY',
            title: '연합 & 대형 활동 (수련회)',
            desc: '전국/지부 단위의 전국 수련회(여름, 겨울)를 통해 다른 캠퍼스 동기들과 연합하며 넓은 세계관을 가집니다. 지부 연합 큰모임을 통해 연합공동체의 힘을 공유합니다.',
            tags: ['#전국수련회', '#지부연합', '#캠퍼스연합'],
            images: [unityImg1, unityImg2, unityImg3, unityImg4, unityImg5]
        }
    ];

    return (
        <>
            <div className="home-container fade-in">
                {/* Background Decoration */}
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>

                {/* Welcome Image Section */}
                <section className="welcome-section">
                    <img src={bannerImg} alt="IVF Logo Banner" className="full-banner-img" />
                </section>

                {/* Hero Section */}
                <section className="hero-simple">
                    <p className="subtitle">
                        캠퍼스와 세상 속의 하나님 나라 운동
                    </p>
                    <p className="desc-small">
                        하나님 나라의 가치를 따라 살아가는 따뜻한 학생들의 공동체입니다.<br />
                        서로의 삶을 응원하며 함께 걷는 친구가 되어줄게요!
                    </p>
                </section>

                {/* Activities Section */}
                <section className="activities-v2">
                    <h2 className="section-title">주요 활동 소개</h2>
                    {activities.map((activity) => (
                        <div key={activity.id} className="activity-block">
                            <ImageSlider images={activity.images} badge={activity.badge} />
                            <div className="content">
                                <h3>{activity.title}</h3>
                                <p>{activity.desc}</p>
                                <ul className="detail-tags">
                                    {activity.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
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
            </div>

            {/* Fixed Apply Button - Moved outside of container to avoid transform/clip issues */}
            <div className="fixed-action-bar">
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="fixed-apply-btn">
                    <span>지금 지원하기</span>
                    <ExternalLink size={18} />
                </a>
            </div>
        </>
    );
};

export default Home;
