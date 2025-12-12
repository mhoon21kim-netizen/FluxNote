# Vercel 배포 완전 초보자 가이드

이 가이드는 Vercel을 처음 사용하는 분들을 위한 상세한 단계별 가이드입니다.

## 📋 준비사항

배포하기 전에 확인해야 할 것:
- [ ] Node.js가 설치되어 있는지 (이미 설치되어 있음)
- [ ] 프로젝트가 정상적으로 빌드되는지
- [ ] GitHub 계정 (없으면 만들어야 함)

---

## 방법 1: GitHub 연동 방식 (추천 - 자동 배포 가능)

이 방법은 GitHub에 코드를 올리고 Vercel과 연동하는 방식입니다. 코드를 수정하면 자동으로 재배포됩니다.

### 1단계: GitHub 저장소 만들기

1. **GitHub 접속**
   - https://github.com 접속
   - 계정이 없으면 "Sign up" 클릭하여 회원가입
   - 계정이 있으면 "Sign in" 클릭하여 로그인

2. **새 저장소 생성**
   - 오른쪽 상단의 "+" 아이콘 클릭
   - "New repository" 선택
   - Repository name 입력: `memo-app` (또는 원하는 이름)
   - Description (선택사항): "반응형 메모 앱"
   - Public 또는 Private 선택 (Public 권장 - 무료)
   - "Add a README file" 체크 해제 (이미 README가 있으므로)
   - "Create repository" 클릭

3. **저장소 URL 확인**
   - 생성된 페이지에서 저장소 URL 확인
   - 예: `https://github.com/YOUR_USERNAME/memo-app`

### 2단계: Git 초기화 및 코드 업로드

터미널에서 다음 명령어를 순서대로 실행하세요:

```bash
# 1. 프로젝트 폴더로 이동
cd C:\DEV\FluxNote\memo-app

# 2. Git 초기화 (처음 한 번만)
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 커밋 (변경사항 저장)
git commit -m "Initial commit: 메모 앱 프로젝트"

# 5. GitHub 저장소 연결 (YOUR_USERNAME을 본인 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/memo-app.git

# 6. 코드 업로드
git branch -M main
git push -u origin main
```

**주의사항:**
- 5번 단계에서 `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 바꿔야 합니다
- 처음 push할 때 GitHub 로그인을 요청할 수 있습니다
- GitHub Personal Access Token이 필요할 수 있습니다 (아래 참고)

### 3단계: GitHub Personal Access Token 만들기 (필요한 경우)

GitHub에 코드를 올릴 때 인증이 필요할 수 있습니다:

1. GitHub → 오른쪽 상단 프로필 클릭 → Settings
2. 왼쪽 메뉴에서 "Developer settings" 클릭
3. "Personal access tokens" → "Tokens (classic)" 클릭
4. "Generate new token" → "Generate new token (classic)" 클릭
5. Note: `memo-app-deploy` 입력
6. Expiration: 원하는 기간 선택
7. Scopes: `repo` 체크
8. "Generate token" 클릭
9. 생성된 토큰 복사 (한 번만 보여줌!)
10. 터미널에서 비밀번호 입력할 때 이 토큰을 사용

### 4단계: Vercel에 배포하기

1. **Vercel 접속**
   - https://vercel.com 접속
   - "Sign Up" 또는 "Log In" 클릭
   - "Continue with GitHub" 클릭 (GitHub 계정으로 로그인)

2. **프로젝트 추가**
   - 대시보드에서 "Add New..." 버튼 클릭
   - "Project" 선택
   - "Import Git Repository" 섹션에서 방금 만든 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Project Name: `memo-app` (또는 원하는 이름)
   - Framework Preset: **"Create React App"** 선택 (자동 감지될 수도 있음)
   - Root Directory: `./` (기본값 유지)
   - Build Command: `npm run build` (자동 입력됨)
   - Output Directory: `build` (자동 입력됨)
   - Install Command: `npm install` (기본값 유지)

4. **환경 변수 설정 (필요한 경우)**
   - 이 프로젝트는 환경 변수가 필요 없으므로 건너뛰어도 됩니다
   - "Add" 버튼은 클릭하지 않아도 됩니다

5. **배포 시작**
   - "Deploy" 버튼 클릭
   - 배포가 시작됩니다 (1-2분 소요)

6. **배포 완료 확인**
   - 배포가 완료되면 "Congratulations!" 메시지가 나타납니다
   - 배포된 URL 확인 (예: `https://memo-app-abc123.vercel.app`)
   - "Visit" 버튼을 클릭하여 배포된 사이트 확인

### 5단계: 자동 배포 확인

이제 코드를 수정하고 GitHub에 push하면 자동으로 재배포됩니다:

```bash
# 파일 수정 후
git add .
git commit -m "업데이트 내용"
git push
```

Vercel이 자동으로 변경사항을 감지하고 재배포합니다!

---

## 방법 2: 직접 업로드 방식 (더 간단하지만 자동 배포 불가)

GitHub을 사용하지 않고 직접 배포하는 방법입니다.

### 1단계: 프로덕션 빌드 생성

터미널에서 실행:

```bash
cd C:\DEV\FluxNote\memo-app
npm run build
```

빌드가 완료되면 `build` 폴더가 생성됩니다.

### 2단계: Vercel CLI 설치

터미널에서 실행:

```bash
npm install -g vercel
```

### 3단계: Vercel 로그인

터미널에서 실행:

```bash
vercel login
```

브라우저가 열리면 GitHub 계정으로 로그인하세요.

### 4단계: 배포

터미널에서 실행:

```bash
cd C:\DEV\FluxNote\memo-app
vercel --prod
```

질문이 나오면:
- Set up and deploy? → **Y** 입력
- Which scope? → 본인 계정 선택
- Link to existing project? → **N** 입력 (처음이므로)
- What's your project's name? → `memo-app` 입력
- In which directory is your code located? → `./` 입력 (기본값)
- Want to override the settings? → **N** 입력 (기본값 사용)

배포가 완료되면 URL이 표시됩니다!

---

## 🎯 추천: 방법 1 (GitHub 연동)

**이유:**
- ✅ 코드를 수정하면 자동으로 재배포
- ✅ 버전 관리 가능
- ✅ 협업에 유리
- ✅ 무료

---

## 🔧 문제 해결

### 문제 1: Git 명령어를 찾을 수 없음
**해결:** Git이 설치되어 있지 않습니다.
- https://git-scm.com/download/win 에서 Git 다운로드 및 설치
- 설치 후 터미널 재시작

### 문제 2: GitHub에 push할 때 인증 오류
**해결:** Personal Access Token 사용 (위 3단계 참고)

### 문제 3: 빌드 실패
**해결:**
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 문제 4: 배포 후 404 오류
**해결:** `vercel.json` 파일이 이미 설정되어 있으므로 문제없습니다.
- SPA 라우팅을 위한 설정이 이미 포함되어 있습니다.

### 문제 5: 배포는 되었지만 기능이 작동하지 않음
**해결:**
- 브라우저 콘솔에서 오류 확인 (F12)
- 로컬에서 `npm run build` 후 `serve -s build`로 테스트

---

## 📝 배포 후 확인사항

배포가 완료되면 다음을 확인하세요:

- [ ] 배포된 URL 접속 확인
- [ ] 로그인/회원가입 화면 정상 표시
- [ ] 회원가입 후 로그인 가능
- [ ] 노트 작성/수정/삭제 기능 작동
- [ ] 검색 기능 작동
- [ ] 모바일에서도 정상 작동

---

## 🎉 완료!

배포가 완료되면:
- 배포된 URL을 친구들과 공유할 수 있습니다
- 코드를 수정하면 자동으로 재배포됩니다 (방법 1 사용 시)
- Vercel 대시보드에서 배포 상태를 확인할 수 있습니다

---

## 💡 추가 팁

### 커스텀 도메인 연결
1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Domains
3. 도메인 입력 및 DNS 설정

### 환경 변수 추가 (나중에 필요하면)
1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Environment Variables
3. 변수 추가

### 배포 로그 확인
- Vercel 대시보드 → 프로젝트 → Deployments
- 각 배포의 로그 확인 가능

---

**질문이 있으시면 언제든지 물어보세요!** 🚀

