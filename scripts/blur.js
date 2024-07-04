hexo.extend.tag.register('blur', (args, content) =>
    `<span class="blur-text">${args.join(' ')}</span>`
);