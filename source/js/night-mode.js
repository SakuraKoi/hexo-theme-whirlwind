(($) => {
    let body = $('body');
    let button = $('#nav-light');

    function updateLightMode() {
        let currentMode = localStorage.getItem('light-mode');
        switch (currentMode) {
            case 'night': {
                button.addClass('light-mode-night');
                button.removeClass('light-mode-day');
                button.removeClass('light-mode-auto');
                button.attr('title', '日间模式');
                break;
            }
            case 'day': {
                button.removeClass('light-mode-night');
                button.addClass('light-mode-day');
                button.removeClass('light-mode-auto');
                button.attr('title', '自动模式');
                break;
            }
            case 'auto':
            case null: {
                button.removeClass('light-mode-night');
                button.removeClass('light-mode-day');
                button.addClass('light-mode-auto');
                button.attr('title', '夜间模式');
                break;
            }
        }
        if (((currentMode === null || currentMode === 'auto') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || currentMode === 'night') {
            body.addClass('night-mode');
        } else {
            body.removeClass('night-mode')
        }
    }
    updateLightMode();

    button.on('click', () => {
        // on / off / auto cycle
        if (localStorage.getItem('light-mode') === 'night') {
            localStorage.setItem('light-mode', 'day');
        } else if (localStorage.getItem('light-mode') === 'day') {
            localStorage.setItem('light-mode', 'auto');
        } else {
            localStorage.setItem('light-mode', 'night');
        }
        updateLightMode();
    })
})($);
