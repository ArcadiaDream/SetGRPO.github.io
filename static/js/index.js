window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // "More Research" dropdown: hover covers desktop, click covers touch and keyboard
    var research = document.querySelector('.setgrpo-research');
    if (research) {
        var trigger = research.querySelector('.navbar-link');

        var setOpen = function(open) {
            research.classList.toggle('is-open', open);
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            setOpen(!research.classList.contains('is-open'));
        });

        document.addEventListener('click', function(e) {
            if (!research.contains(e.target)) setOpen(false);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && research.classList.contains('is-open')) {
                setOpen(false);
                trigger.focus();
            }
        });
    }

})
