# 安装 nvm（如果没有）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 安装并使用 Node.js 20
nvm install 20
nvm use 20

# 验证
node --version  # 应显示 v20.x.x