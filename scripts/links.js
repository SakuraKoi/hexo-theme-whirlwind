hexo.extend.tag.register('linkCard', (args, content) => `
<div class="card">
    <img class="icon" src="${args[3]}"  alt="avatar"/>
    <div class="card-header">
        <div>
            <a href="${args[2]}">${args[0]}</a>
        </div>
        <div class="info">${args[1]}</div>
    </div>
</div>
`);

hexo.extend.tag.register('linkContainer', (args, content) => `
<div class="link-container"> ${
    hexo.render.renderSync({
        text: content,
        engine: "markdown"
    })
}
</div>
`, {
    ends: true
});