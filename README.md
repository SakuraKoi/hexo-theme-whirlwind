# hexo-theme-whirlwind

A minimal but stylish Hexo theme by SakuraKooi

Layout inspired by [Anatole](https://github.com/Ben02/hexo-theme-Anatole)

## Features
- Post encryption
  ```
  password: <test>
  ```
- Hide title
  ```
  hideTitle: true
  ```
- Hide post meta
  ```
  hideMeta: true
  ```
- Hide post date
  ```
  hideDate: true
  ```
- Telegram-like masked text
  ```
  {% blur "It's a masked text" %}
  ```
- Built-in spoiler component
  ```
  {% spoiler Title %}
  content
  {% endspoiler %}
  ```
- Minimal but stylish link template
  ```
  {% linkContainer %}
  {% linkCard "Username1" "desc1" "https://url.com" "/images/friends/akarin.webp" %}
  {% endlinkContainer%}
  ```
- Gitalk comment
## TODO

- [ ] Render post with markdown-it
- [ ] (then) Implement post toc navigation
- [ ] Fix gallery post

## Credit
- Demo site's icon designed by Freepik
- Post encryption modified from [hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)
- Spoiler modified from [hexo-sliding-spoiler](https://github.com/fletchto99/hexo-sliding-spoiler)