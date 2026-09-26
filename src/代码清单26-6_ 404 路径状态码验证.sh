cd taskflow-board
npm run dev
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/tasks/no-such-task