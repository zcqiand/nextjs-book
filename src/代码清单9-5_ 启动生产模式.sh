# 进入项目目录，构建生产版本，再以生产模式启动
cd taskflow-board
npm run build
npm run start

# 构建结束时终端会打印一张路由表（以下为示意输出，具体数值因机器而异）：
#
#   Route (app)                              Size     First Load JS
#   ┌ ○ /                                    5.2 kB          92 kB
#   ├ ○ /tasks                               2.1 kB          89 kB
#   ├ ○ /about                               1.4 kB          88 kB
#   └ ƒ /now                                 0 B                0 B
#
# △ 符号说明：○ = 预渲染（静态，构建时已生成 HTML）；
#             ƒ = 按请求动态渲染（每个请求到达时才现场生成）。