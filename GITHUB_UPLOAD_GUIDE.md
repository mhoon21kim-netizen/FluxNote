# GitHub에 코드 업로드 가이드

이 가이드는 `https://github.com/mhoon21kim-netizen/FluxNote.git` 저장소에 코드를 업로드하는 방법을 설명합니다.

## 📋 준비사항

- [ ] Git이 설치되어 있는지 확인
- [ ] GitHub 계정 로그인 확인
- [ ] 프로젝트 폴더 위치 확인 (`C:\DEV\FluxNote\memo-app`)

---

## 🚀 단계별 업로드 방법

### 1단계: Git 설치 확인

터미널에서 다음 명령어 실행:

```bash
git --version
```

**결과:**
- 버전이 표시되면 → Git이 설치되어 있음 ✅
- "명령을 찾을 수 없습니다" → Git 설치 필요 ❌

**Git이 없으면:**
1. https://git-scm.com/download/win 접속
2. 다운로드 및 설치
3. 설치 후 터미널 재시작

---

### 2단계: 프로젝트 폴더로 이동

터미널에서 실행:

```bash
cd C:\DEV\FluxNote\memo-app
```

---

### 3단계: Git 초기화 (처음 한 번만)

터미널에서 실행:

```bash
git init
```

**결과:** "Initialized empty Git repository" 메시지가 나타나면 성공!

---

### 4단계: GitHub 저장소 연결

터미널에서 실행:

```bash
git remote add origin https://github.com/mhoon21kim-netizen/FluxNote.git
```

**이미 연결되어 있다면:**
```bash
git remote set-url origin https://github.com/mhoon21kim-netizen/FluxNote.git
```

---

### 5단계: 모든 파일 추가

터미널에서 실행:

```bash
git add .
```

이 명령어는 모든 파일을 Git에 추가합니다.

---

### 6단계: 첫 커밋 (변경사항 저장)

터미널에서 실행:

```bash
git commit -m "Initial commit: 메모 앱 프로젝트"
```

**Git 사용자 정보가 설정되지 않았다면:**
먼저 다음 명령어를 실행하세요:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

그 다음 다시 커밋:
```bash
git commit -m "Initial commit: 메모 앱 프로젝트"
```

---

### 7단계: 메인 브랜치 설정

터미널에서 실행:

```bash
git branch -M main
```

---

### 8단계: GitHub에 업로드 (Push)

터미널에서 실행:

```bash
git push -u origin main
```

**인증이 필요한 경우:**

#### 방법 A: Personal Access Token 사용 (권장)

1. **GitHub에서 토큰 생성:**
   - https://github.com 접속 및 로그인
   - 오른쪽 상단 프로필 클릭 → **Settings**
   - 왼쪽 메뉴에서 **Developer settings** 클릭
   - **Personal access tokens** → **Tokens (classic)** 클릭
   - **Generate new token** → **Generate new token (classic)** 클릭
   - Note: `FluxNote-upload` 입력
   - Expiration: 원하는 기간 선택 (예: 90 days)
   - Scopes: **`repo`** 체크박스 선택
   - 맨 아래 **Generate token** 클릭
   - **생성된 토큰 복사** (한 번만 보여줌! 저장해두세요)

2. **Push 시 토큰 사용:**
   - Username: `mhoon21kim-netizen` 입력
   - Password: **생성한 토큰을 붙여넣기** (일반 비밀번호가 아님!)

#### 방법 B: GitHub Desktop 사용

GitHub Desktop을 사용하면 더 쉽습니다:
1. https://desktop.github.com/ 다운로드 및 설치
2. GitHub 계정으로 로그인
3. File → Add Local Repository
4. `C:\DEV\FluxNote\memo-app` 선택
5. Publish repository 클릭

---

## ✅ 업로드 확인

업로드가 완료되면:

1. https://github.com/mhoon21kim-netizen/FluxNote 접속
2. 파일들이 보이는지 확인
3. README.md, package.json 등이 보이면 성공!

---

## 🔄 이후 업데이트 방법

코드를 수정한 후 다시 업로드하려면:

```bash
# 1. 변경된 파일 추가
git add .

# 2. 커밋 (변경사항 설명)
git commit -m "변경사항 설명"

# 3. GitHub에 업로드
git push
```

---

## 🛠️ 문제 해결

### 문제 1: "fatal: not a git repository"
**해결:** `git init` 명령어를 먼저 실행하세요.

### 문제 2: "remote origin already exists"
**해결:** 다음 명령어로 기존 연결 제거 후 다시 연결:
```bash
git remote remove origin
git remote add origin https://github.com/mhoon21kim-netizen/FluxNote.git
```

### 문제 3: "Authentication failed"
**해결:** Personal Access Token을 사용하세요 (위 8단계 참고)

### 문제 4: "Please tell me who you are"
**해결:** Git 사용자 정보 설정:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 문제 5: "Permission denied"
**해결:** 
- GitHub 계정이 올바른지 확인
- Personal Access Token이 `repo` 권한을 가지고 있는지 확인
- 토큰이 만료되지 않았는지 확인

---

## 📝 .gitignore 확인

`.gitignore` 파일이 있어서 불필요한 파일은 업로드되지 않습니다:
- `node_modules/` (의존성 패키지)
- `build/` (빌드 결과물)
- `.env` (환경 변수)

---

## 🎯 다음 단계

코드 업로드가 완료되면:

1. **Vercel에 배포하기:**
   - Vercel에서 GitHub 저장소를 연결하면 자동 배포됩니다
   - 코드를 수정하면 자동으로 재배포됩니다

2. **README.md 업데이트:**
   - 프로젝트 설명 추가
   - 사용 방법 추가

---

## 💡 팁

- 커밋 메시지는 명확하게 작성하세요
- 자주 커밋하고 푸시하세요
- 중요한 변경사항은 커밋 메시지에 상세히 기록하세요

---

**질문이 있으시면 언제든지 물어보세요!** 🚀

