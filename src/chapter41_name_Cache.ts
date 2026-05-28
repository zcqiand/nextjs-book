// 从第 41 章提取
// 代码清单: - name: Cache node_modules
// 文件名: chapter41_name_Cache.ts
- name: Cache node_modules
  uses: actions/cache@v4
  with:
    path: node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-

- name: Cache .next/cache
  uses: actions/cache@v4
  with:
    path: .next/cache
    key: ${{ runner.os }}-next-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-next-
