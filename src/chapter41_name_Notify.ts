// 从第 41 章提取
// 代码清单: - name: Notify on failure
// 文件名: chapter41_name_Notify.ts
- name: Notify on failure
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    channel-id: 'C0123456789'
    slack-message: "Deployment failed: ${{ github.event_name }} ${{ github.ref }} - ${{ github.actor }}"
  env:
    SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
