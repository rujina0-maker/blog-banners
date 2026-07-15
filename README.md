# 블로그 앱 배너

스도쿠와 야화 앱을 블로그에서 광고 배너처럼 불러오기 위한 정적 HTML 패키지입니다.

## 파일

- `sudoku.html`: 스도쿠 단독 배너
- `yahwa.html`: 야화 단독 배너
- `index.html`: 두 배너 미리보기
- `embed-snippets.html`: 블로그에 붙여 넣을 iframe 예시
- `assets/`: 배너 이미지 자산

## GitHub Pages 배포

1. 이 폴더 내용을 GitHub 저장소에 올립니다.
2. 저장소 Settings > Pages에서 배포 브랜치를 선택합니다.
3. 배포 URL이 생기면 `embed-snippets.html`의 `https://YOUR_GITHUB_PAGES_URL/` 부분을 실제 주소로 바꿉니다.

예시:

```html
<iframe class="app-banner-frame" src="https://YOUR_ID.github.io/blog-banners/sudoku.html" title="스도쿠 앱 배너" loading="lazy"></iframe>
```
