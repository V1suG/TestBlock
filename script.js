// Анимация навигации для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if(burger) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Анимация бургер-иконки
            burger.classList.toggle('toggle');
        });
    }
    
    // Эффект параллакса для герой секции
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if(hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками преимуществ
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Добавляем класс для плавного перехода между страницами
    document.body.classList.add('page-transition');
    
    // Эффект для кнопки CTA
    const ctaButton = document.querySelector('.cta-button');
    if(ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Добавляем эффект пульсации
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
                // Перенаправляем на страницу услуг
                window.location.href = 'services.html';
            }, 300);
        });
    }
    
    // Дополнительная анимация для автомобиля
    const carAnimation = document.getElementById('carAnimation');
    if(carAnimation) {
        // Добавляем эффект мерцания фар
        setInterval(() => {
            const carBody = carAnimation.querySelector('.car-body');
            carBody.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.7)';
            setTimeout(() => {
                carBody.style.boxShadow = 'none';
            }, 200);
        }, 2000);
    }
});

// Функция для плавной прокрутки к элементам
function smoothScroll(target) {
    const element = document.querySelector(target);
    if(element) {
        window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth'
        });
    }
}

// Добавляем CSS для дополнительных анимаций
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 1s ease forwards;
    }
    
    .pulse {
        animation: pulse 0.3s ease;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .toggle .line2 {
        opacity: 0;
    }
    
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);