// Modified from https://github.com/fletchto99/hexo-sliding-spoiler to fit theme style
hexo.extend.tag.register('spoiler', (args, content) =>
    `<div class='spoiler collapsed'>
    <div class='spoiler-title'>
        <span>
            <i class="fa-solid fa-bars-staggered"></i>
            ${args.join(" ")}
        </span>
        <i class="spoiler-icon fa-solid fa-angles-down"></i>
    </div>
    <div class="spoiler-container">
        <div class="spoiler-content">
            ${
            hexo.render.renderSync({
                text: content,
                engine: "markdown"
            }) || ""
        }
        </div>
    </div>
</div>`, {
    ends: true
});