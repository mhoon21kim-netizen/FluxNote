# GitHub Workflow 권한 오류 해결 방법

## 문제
GitHub에 push할 때 다음 오류가 발생했습니다:
```
refusing to allow a Personal Access Token to create or update workflow 
`.github/workflows/deploy.yml` without `workflow` scope
```

## 해결 방법

### 방법 1: Personal Access Token에 workflow 권한 추가 (권장)

1. **GitHub에서 새 토큰 생성:**
   - https://github.com 접속 및 로그인
   - 오른쪽 상단 프로필 클릭 → **Settings**
   - 왼쪽 메뉴에서 **Developer settings** 클릭
   - **Personal access tokens** → **Tokens (classic)** 클릭
   - **Generate new token** → **Generate new token (classic)** 클릭
   - Note: `FluxNote-full-access` 입력
   - Expiration: 원하는 기간 선택
   - **Scopes에서 다음을 체크:**
     - ✅ `repo` (모든 repo 권한)
     - ✅ `workflow` (GitHub Actions 워크플로우 업데이트)
   - 맨 아래 **Generate token** 클릭
   - **생성된 토큰 복사** (한 번만 보여줌!)

2. **Git Credential 업데이트:**
   - Windows 자격 증명 관리자에서 GitHub 토큰 업데이트
   - 또는 다음 명령어로 다시 push:
   ```bash
   git push origin main
   ```
   - Username: `mhoon21kim-netizen` 입력
   - Password: **새로 생성한 토큰** 입력

### 방법 2: GitHub 웹 인터페이스에서 직접 추가

1. https://github.com/mhoon21kim-netizen/FluxNote 접속
2. "Add file" → "Create new file" 클릭
3. 파일 이름: `.github/workflows/deploy.yml` 입력
4. 파일 내용을 붙여넣기 (아래 참고)
5. "Commit new file" 클릭

### 방법 3: 워크플로우 파일 제거 후 업로드

워크플로우 파일을 제거하고 나중에 추가:

```bash
cd C:\DEV\FluxNote\memo-app
git rm .github/workflows/deploy.yml
git commit -m "Remove: GitHub Actions workflow (will add later)"
git push origin main
```

나중에 GitHub 웹 인터페이스에서 직접 추가할 수 있습니다.

---

## 추천: 방법 1

가장 간단하고 안전한 방법은 Personal Access Token에 `workflow` 권한을 추가하는 것입니다.

---

## 워크플로우 파일 내용 (방법 2 사용 시)

`.github/workflows/deploy.yml` 파일 내용:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: memo-app/package-lock.json

      - name: Install dependencies
        working-directory: ./memo-app
        run: npm ci

      - name: Build
        working-directory: ./memo-app
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './memo-app/build'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

**가장 쉬운 방법: Personal Access Token에 `workflow` 권한을 추가하고 다시 push하세요!**

