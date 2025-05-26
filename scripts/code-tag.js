/* global hexo, __dirname */

'use strict';
let HTMLParser = require('node-html-parser');

hexo.extend.filter.register('after_post_render', (data) => {
    const dom = HTMLParser.parse(data.content);
    let codeBlocks = dom.querySelectorAll('pre.line-numbers');
    codeBlocks.forEach(block => {
        const wrapper = HTMLParser.parse('<html><div class="code-wrapper"></div></html>').querySelector('div')
        block.before(wrapper);
        block.parentNode.removeChild(block);
        wrapper.appendChild(block);
        let languages = block.classList.value.filter(c => c.startsWith("language-") && c !== 'language-plain');
        languages.forEach(c => wrapper.classList.add(c));
        if (languages.length > 0) {
            wrapper.classList.add('has-language');
        }
    })
    data.content = dom.toString();
    return data;
}, 999);
