cd ~
mkdir -p Projects/NextjsLearning
cd Projects/NextjsLearning
npx create-next-app@latest learning-nextjs \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack