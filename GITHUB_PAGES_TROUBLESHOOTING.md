# GitHub Pages 실행 문제 해결 가이드

## 현재 상태 확인

✅ `gh-pages` 브랜치가 생성되어 있습니다
✅ `package.json`에 `homepage` 설정이 있습니다
✅ `gh-pages` 패키지가 설치되어 있습니다

## 문제 해결 단계

### 1단계: GitHub Pages 설정 확인

1. **GitHub 저장소 접속:**
   - https://github.com/mhoon21kim-netizen/FluxNote 접속

2. **Settings → Pages 확인:**
   - Settings 탭 클릭
   - 왼쪽 메뉴에서 **Pages** 클릭
   - **Source** 확인:
     - "Deploy from a branch" 선택
     - Branch: **`gh-pages`** 선택
     - Folder: **`/ (root)`** 선택
     - Save 클릭

3. **배포 상태 확인:**
   - Pages 설정 하단에 배포 상태가 표시됩니다
   - "Your site is live at..." 메시지 확인

### 2단계: 최신 빌드로 재배포

터미널에서 실행:

```bash
cd C:\DEV\FluxNote\memo-app
npm run deploy
```

### 3단계: 배포 확인

배포 후 1-2분 기다린 후:
- https://mhoon21kim-netizen.github.io/FluxNote 접속
- 앱이 정상적으로 표시되는지 확인

## 일반적인 문제와 해결책

### 문제 1: 404 오류

**원인:**
- GitHub Pages Source가 설정되지 않음
- `gh-pages` 브랜치가 선택되지 않음

**해결:**
1. GitHub 저장소 → Settings → Pages
2. Source: `gh-pages` 브랜치 선택
3. Save 클릭

### 문제 2: 빈 페이지 또는 오류

**원인:**
- 빌드가 제대로 되지 않음
- `homepage` 설정이 잘못됨

**해결:**
```bash
# 빌드 확인
npm run build

# 재배포
npm run deploy
```

### 문제 3: 스타일이 적용되지 않음

**원인:**
- 경로 문제 (homepage 설정)

**해결:**
- `package.json`의 `homepage` 필드 확인:
  ```json
  "homepage": "https://mhoon21kim-netizen.github.io/FluxNote"
  ```

### 문제 4: 라우팅 오류 (페이지 새로고침 시 404)

**원인:**
- SPA 라우팅 문제

**해결:**
- GitHub Pages는 기본적으로 SPA를 지원하지 않습니다
- `404.html` 파일 추가 필요 (아래 참고)

## 추가 설정: 404.html 파일

SPA 라우팅을 위해 `public/404.html` 파일을 추가하세요:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>메모 앱</title>
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

그리고 `public/index.html`에 스크립트 추가:

```html
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  var pathSegmentsToKeep = 1;
  var path = window.location.pathname.split('/').slice(1);
  if (path[0] === '?') {
    path = path.slice(1);
  }
  var pathStr = path.join('/');
  var newPath = '/' + pathStr;
  window.history.replaceState({}, document.title, newPath);
</script>
```

## 빠른 해결 방법

### 방법 1: Vercel 사용 (가장 간단)

GitHub Pages 대신 Vercel을 사용하면 더 쉽습니다:

1. https://vercel.com 접속
2. "Add New Project" 클릭
3. GitHub 저장소 `FluxNote` 선택
4. Deploy 클릭
5. 완료!

### 방법 2: Netlify 사용

1. https://app.netlify.com/drop 접속
2. `build` 폴더 드래그 앤 드롭
3. 완료!

## 확인 체크리스트

- [ ] GitHub 저장소 → Settings → Pages에서 Source가 `gh-pages`로 설정되어 있는가?
- [ ] `npm run deploy`가 성공적으로 완료되었는가?
- [ ] `gh-pages` 브랜치에 `index.html` 파일이 있는가?
- [ ] 배포 후 1-2분 기다렸는가?
- [ ] 브라우저 캐시를 지웠는가? (Ctrl + Shift + Delete)

## 배포된 사이트 URL

**https://mhoon21kim-netizen.github.io/FluxNote**

---

**문제가 계속되면 Vercel이나 Netlify 사용을 권장합니다!**

