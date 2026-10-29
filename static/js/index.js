window.HELP_IMPROVE_VIDEOJS = false;

// "More Research" dropdown: hover covers desktop, click covers touch and keyboard.
// Plain DOM on purpose — the page carries no jQuery, so the menu works even when
// every CDN request fails.
(function() {
    function initResearchMenu() {
        var research = document.querySelector('.setgrpo-research');
        if (!research) return;

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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initResearchMenu);
    } else {
        initResearchMenu();
    }
})();
