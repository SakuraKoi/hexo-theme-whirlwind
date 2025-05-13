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
                button.attr('title', '切换至明亮风格');
                break;
            }
            case 'day': {
                button.removeClass('light-mode-night');
                button.addClass('light-mode-day');
                button.removeClass('light-mode-auto');
                button.attr('title', '切换至自动风格');
                break;
            }
            case 'auto':
            case null: {
                button.removeClass('light-mode-night');
                button.removeClass('light-mode-day');
                button.addClass('light-mode-auto');
                button.attr('title', '切换至暗黑风格');
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
    setTimeout(() => body.addClass('loaded'), 1);

    button.on('click', e => {
        e.preventDefault();
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
