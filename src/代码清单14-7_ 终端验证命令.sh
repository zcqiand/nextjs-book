npm run dev
curl -I http://localhost:3000/dashboard
curl -I -H "Cookie: session=demo" http://localhost:3000/dashboard
curl -I -H "Cookie: session=demo" http://localhost:3000/login
curl -I http://localhost:3000/login