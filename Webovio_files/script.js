document.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector('.burger')
    const burgerLine = document.querySelectorAll('.burger-line')
    const mobileMenu = document.querySelector('.mobile-menu')
    burger.addEventListener('click', ()=>{
        burgerLine.forEach(item=>item.classList.toggle('active'))
        mobileMenu.classList.toggle('active')
    })
    function handleScroll(){
        const services = document.querySelector('.services')
        const getStarted = document.querySelector('.get-started')
        const windowHeight = window.innerHeight;
        const servicesRect = services.getBoundingClientRect();
        if(servicesRect.top + 200 < windowHeight){
            services.classList.add('animate')
        }
        const getStartedRect = getStarted.getBoundingClientRect();
        if(getStartedRect.top + 200 < windowHeight){
            getStarted.classList.add('animate')
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
})