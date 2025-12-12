@echo off
echo ========================================
echo 메모 앱 배포 스크립트
echo ========================================
echo.

echo 배포 옵션을 선택하세요:
echo.
echo 1. Netlify (권장 - 가장 간단)
echo 2. Vercel
echo 3. 로컬 서버 테스트
echo 4. 배포 가이드 보기
echo.
set /p choice="선택 (1-4): "

if "%choice%"=="1" goto netlify
if "%choice%"=="2" goto vercel
if "%choice%"=="3" goto local
if "%choice%"=="4" goto guide
goto end

:netlify
echo.
echo Netlify 배포를 시작합니다...
echo.
echo 방법 1: 웹 인터페이스 사용 (가장 간단)
echo 1. https://app.netlify.com/drop 접속
echo 2. 아래 build 폴더를 드래그 앤 드롭:
echo    %CD%\build
echo.
echo 방법 2: Netlify CLI 사용
echo Netlify CLI를 설치하시겠습니까? (Y/N)
set /p install=": "
if /i "%install%"=="Y" (
    echo Netlify CLI 설치 중...
    npm.cmd install -g netlify-cli
    echo.
    echo 설치 완료! 다음 명령어로 배포하세요:
    echo   netlify login
    echo   netlify deploy --prod --dir=build
) else (
    echo Netlify CLI 없이 배포하려면 웹 인터페이스를 사용하세요.
)
goto end

:vercel
echo.
echo Vercel 배포를 시작합니다...
echo.
echo Vercel CLI를 설치하시겠습니까? (Y/N)
set /p install=": "
if /i "%install%"=="Y" (
    echo Vercel CLI 설치 중...
    npm.cmd install -g vercel
    echo.
    echo 설치 완료! 다음 명령어로 배포하세요:
    echo   vercel login
    echo   vercel --prod
) else (
    echo Vercel 웹 인터페이스: https://vercel.com/
    echo build 폴더를 업로드하거나 GitHub 저장소를 연결하세요.
)
goto end

:local
echo.
echo 로컬 서버를 시작합니다...
echo serve 패키지를 설치하시겠습니까? (Y/N)
set /p install=": "
if /i "%install%"=="Y" (
    npm.cmd install -g serve
)
echo.
echo 서버 시작 중...
serve -s build -l 3000
goto end

:guide
echo.
echo 배포 가이드를 엽니다...
start DEPLOYMENT.md
goto end

:end
echo.
echo 배포 스크립트를 종료합니다.
pause

