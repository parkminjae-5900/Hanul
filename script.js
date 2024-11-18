// 네비게이션 버튼 호버 효과
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = '#ff4081';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = 'rgba(0,0,0,0.7)';
    });
});

// 스크롤 이벤트
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// 비디오 섹션 레이지 로딩
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.load();
                videoObserver.unobserve(video);
            }
        });
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
});

// 소셜 링크 호버 효과
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.boxShadow = 'none';
    });
});