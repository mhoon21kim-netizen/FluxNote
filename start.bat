@echo off
echo ========================================
echo 메모 앱을 시작합니다...
echo ========================================
echo.
echo 서버가 시작되면 브라우저가 자동으로 열립니다.
echo 잠시만 기다려주세요...
echo.
start http://localhost:3000
timeout /t 2 /nobreak >nul
npm.cmd run start:open

