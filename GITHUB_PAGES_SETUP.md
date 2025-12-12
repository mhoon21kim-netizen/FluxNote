# GitHub Pages 배포 설정 가이드

GitHub Pages에 배포하기 위한 설정이 완료되었습니다.

## ✅ 완료된 설정

1. ✅ `package.json`에 `homepage` 필드 추가
2. ✅ `gh-pages` 패키지 설치
3. ✅ `deploy` 스크립트 추가
4. ✅ GitHub Actions 워크플로우 생성

## 🚀 배포 방법

### 방법 1: npm 스크립트 사용 (간단)

터미널에서 실행:

```bash
cd C:\DEV\FluxNote\memo-app
npm run deploy
```

이 명령어는:
1. 자동으로 빌드를 실행합니다 (`predeploy`)
2. `build` 폴더를 `gh-pages` 브랜치에 배포합니다
3. GitHub Pages에서 자동으로 사이트를 생성합니다

### 방법 2: GitHub Actions 사용 (자동 배포)

1. **GitHub 저장소 설정:**
   - https://github.com/mhoon21kim-netizen/FluxNote 접속
   - Settings → Pages 클릭
   - Source: **GitHub Actions** 선택
   - Save 클릭

2. **자동 배포:**
   - 이제 `main` 브랜치에 코드를 push하면 자동으로 배포됩니다
   - Actions 탭에서 배포 상태를 확인할 수 있습니다

## 📍 배포된 사이트 URL

배포가 완료되면 다음 URL에서 접속할 수 있습니다:

**https://mhoon21kim-netizen.github.io/FluxNote**

## ⚠️ 주의사항

1. **첫 배포는 수동으로 해야 할 수 있습니다:**
   - GitHub 저장소 → Settings → Pages
   - Source를 "gh-pages branch" 또는 "GitHub Actions"로 설정

2. **배포 시간:**
   - 첫 배포: 1-2분 소요
   - 이후 업데이트: 몇 초 ~ 1분

3. **빌드 오류 확인:**
   - GitHub 저장소 → Actions 탭에서 빌드 로그 확인

## 🔧 문제 해결

### "gh-pages: command not found"
```bash
npm install --save-dev gh-pages
```

### 배포 후 404 오류
- GitHub 저장소 → Settings → Pages에서 Source 확인
- `homepage` 필드가 올바른지 확인

### 빌드 실패
- GitHub 저장소 → Actions 탭에서 오류 로그 확인
- 로컬에서 `npm run build`가 성공하는지 확인

## 📝 배포 확인

배포가 완료되면:
1. https://mhoon21kim-netizen.github.io/FluxNote 접속
2. 메모 앱이 정상적으로 표시되는지 확인
3. 모든 기능이 작동하는지 테스트

---

**지금 `npm run deploy` 명령어를 실행해보세요!**

