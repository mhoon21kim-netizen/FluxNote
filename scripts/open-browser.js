// 브라우저를 여는 간단한 스크립트
const { exec } = require('child_process');

console.log('서버를 시작합니다...');
console.log('잠시 후 브라우저가 자동으로 열립니다.\n');

// 서버가 시작될 때까지 잠시 대기 후 브라우저 열기
setTimeout(() => {
  const platform = process.platform;
  let command;
  
  if (platform === 'win32') {
    command = 'start http://localhost:3000';
  } else if (platform === 'darwin') {
    command = 'open http://localhost:3000';
  } else {
    command = 'xdg-open http://localhost:3000';
  }
  
  exec(command, (error) => {
    if (error) {
      console.log('\n브라우저를 자동으로 열 수 없습니다.');
      console.log('수동으로 http://localhost:3000 을 열어주세요.\n');
    } else {
      console.log('브라우저가 열렸습니다!');
    }
  });
}, 5000);

// 프로세스를 계속 실행 상태로 유지
process.stdin.resume();

