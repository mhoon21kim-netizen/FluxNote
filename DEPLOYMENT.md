# 메모 앱 배포 가이드

프로덕션 빌드가 완료되었습니다. 다음 방법 중 하나를 선택하여 웹서버에 배포할 수 있습니다.

## 배포 옵션

### 1. Netlify (권장 - 가장 간단)

**방법 A: 드래그 앤 드롭 (가장 간단)**
1. [Netlify](https://www.netlify.com/)에 접속하여 계정 생성 (GitHub 계정으로 간단히 가입 가능)
2. 대시보드에서 "Sites" → "Add new site" → "Deploy manually" 클릭
3. `memo-app/build` 폴더를 드래그 앤 드롭
4. 배포 완료! 자동으로 URL이 생성됩니다.

**방법 B: Netlify CLI 사용**
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
cd memo-app
netlify deploy --prod --dir=build
```

### 2. Vercel (권장 - 빠르고 간단)

**방법 A: 웹 인터페이스**
1. [Vercel](https://vercel.com/)에 접속하여 계정 생성 (GitHub 계정으로 간단히 가입 가능)
2. "Add New Project" 클릭
3. GitHub 저장소를 연결하거나, "Import Project"에서 `build` 폴더를 업로드
4. 배포 완료!

**방법 B: Vercel CLI 사용**
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
cd memo-app
vercel --prod
```

### 3. GitHub Pages

1. GitHub에 저장소 생성
2. `package.json`에 다음 추가:
```json
"homepage": "https://YOUR_USERNAME.github.io/memo-app"
```
3. `gh-pages` 패키지 설치 및 배포:
```bash
npm install --save-dev gh-pages
```
4. `package.json`의 scripts에 추가:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
5. 배포:
```bash
npm run deploy
```

### 4. Firebase Hosting

```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 로그인
firebase login

# 프로젝트 초기화
firebase init hosting

# 배포
firebase deploy
```

### 5. 간단한 정적 서버 (테스트용)

```bash
# serve 패키지 설치
npm install -g serve

# 배포된 앱 실행
cd memo-app
serve -s build -l 3000
```

## 배포 전 확인사항

✅ 프로덕션 빌드가 성공적으로 완료되었는지 확인
✅ `build` 폴더가 생성되었는지 확인
✅ 모든 기능이 정상 작동하는지 테스트

## 주의사항

⚠️ **로컬 스토리지 제한**: 현재 앱은 브라우저의 로컬 스토리지를 사용하므로, 각 사용자의 브라우저에 데이터가 저장됩니다. 여러 기기 간 동기화를 원한다면 백엔드 서버가 필요합니다.

⚠️ **HTTPS 권장**: 프로덕션 환경에서는 HTTPS를 사용하는 것이 좋습니다. Netlify, Vercel 등은 자동으로 HTTPS를 제공합니다.

## 빠른 배포 (Netlify - 가장 추천)

1. https://app.netlify.com/drop 접속
2. `memo-app/build` 폴더를 드래그 앤 드롭
3. 완료!

몇 초 안에 배포가 완료되고 공개 URL이 생성됩니다.

