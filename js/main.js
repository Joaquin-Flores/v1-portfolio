function cardCollapse(){
    // 1. Loop through each card and add functionality for collapse and chevron rotation
    document.querySelectorAll('.card').forEach(function (card) {
        // 2. Select the <a> tag that wraps the .card-header (this controls the collapse)
        const toggleLink = card.querySelector('a');
        
        // 3. Find the chevron icon inside the <a> tag
        const chevronIcon = toggleLink.querySelector('i');
        
        // 4. Find the collapsible content (the div with class .collapse)
        const collapseEl = card.querySelector('.collapse');
        
        // 5. Check if we found both the chevron and collapse elements
        if (chevronIcon && collapseEl) {
            // 6. Add event listener when the collapse is shown (opened)
            collapseEl.addEventListener('show.bs.collapse', function () {
                chevronIcon.classList.add('rotate-180'); // Rotate the chevron when expanding
            });
        
            // 7. Add event listener when the collapse is hidden (closed)
            collapseEl.addEventListener('hide.bs.collapse', function () {
                chevronIcon.classList.remove('rotate-180'); // Reset the chevron rotation when collapsing
            });
        }
    });
}

function applyAnimationOnScroll() {
    const aboutParagraphs = document.querySelectorAll('.about-paragraph');

    function animateOnScroll() {
        aboutParagraphs.forEach(paragraph => {
            const rect = paragraph.getBoundingClientRect();
            const top = rect.top;
            const inView = top > window.innerHeight * 0.15 && top < window.innerHeight * 0.85;

            // Limpieza previa
            paragraph.classList.remove('animate__fadeInLeft', 'animate__fadeOutLeft');

            if (inView) {
                paragraph.classList.add('animate__animated', 'animate__fadeInLeft');
            } else {
                paragraph.classList.add('animate__animated', 'animate__fadeOutLeft');
            }
        });
    }

    // Ejecutar al cargar y al scrollear
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}



document.addEventListener("DOMContentLoaded", function() {

    cardCollapse();
    applyAnimationOnScroll();
});