cd ~
mkdir -p Projects/NextjsLearning
cd Projects/NextjsLearning
npx create-next-app@latest taskflow-board \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack