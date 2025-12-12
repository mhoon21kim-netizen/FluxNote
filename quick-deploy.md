# 빠른 배포 가이드

## 🚀 가장 빠른 방법: Netlify 드래그 앤 드롭

### 1단계: Netlify 접속
https://app.netlify.com/drop

### 2단계: 빌드 폴더 업로드
1. `memo-app/build` 폴더를 찾습니다
2. 해당 폴더를 Netlify 페이지로 드래그 앤 드롭합니다
3. 몇 초 후 배포 완료!

### 3단계: URL 확인
배포가 완료되면 자동으로 생성된 URL을 받게 됩니다.
예: `https://random-name-123.netlify.app`

---

## 📦 다른 배포 방법

### Vercel (또 다른 간단한 옵션)
1. https://vercel.com/ 접속
2. "Add New Project" 클릭
3. `build` 폴더를 업로드하거나 GitHub 저장소 연결
4. 배포 완료!

### 로컬 테스트
```bash
npm install -g serve
cd memo-app
serve -s build -l 3000
```
그 다음 브라우저에서 http://localhost:3000 접속

---

## ✅ 배포 확인사항

배포 후 다음을 확인하세요:
- [ ] 로그인/회원가입 화면이 정상 표시되는가?
- [ ] 노트 작성/수정/삭제가 작동하는가?
- [ ] 검색 기능이 작동하는가?
- [ ] 반응형 디자인이 모바일에서도 잘 보이는가?

---

## 🔧 문제 해결

**문제**: 페이지 새로고침 시 404 오류
**해결**: Netlify의 경우 `netlify.toml` 파일이 이미 설정되어 있습니다. 
Vercel의 경우 `vercel.json` 파일이 설정되어 있습니다.

**문제**: 로컬 스토리지가 작동하지 않음
**해결**: HTTPS를 사용해야 합니다. Netlify와 Vercel은 자동으로 HTTPS를 제공합니다.

---

## 📝 참고사항

- 배포된 앱의 데이터는 각 사용자의 브라우저 로컬 스토리지에 저장됩니다
- 여러 기기 간 동기화를 원한다면 백엔드 서버가 필요합니다
- 무료 플랜으로도 충분히 사용 가능합니다

