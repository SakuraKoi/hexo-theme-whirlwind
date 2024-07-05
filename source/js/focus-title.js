(() => {
    let oldTitle = document.title;
    document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                oldTitle = document.title;
                document.title = "诶!? 不许跑喵~";
            } else {
                document.title = oldTitle;
            }
        }
    );
})();