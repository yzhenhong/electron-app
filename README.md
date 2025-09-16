# electron

## 运行

1. 安装依赖

```
npm install
```

2. 开发启动

```
npm run dev
```

3. 打包（可后续接入 electron-builder 或 forge）

## 打包与安装

> 要求：建议 Node.js 20+（当前 Node 18 可能出现 engine 警告但可用）

1. 安装打包依赖

```
npm i -D electron-builder
```

2. 生成安装包（Windows）

```
npm run build:win
```

构建产物默认在 `dist/` 目录：
- 安装器：`Electron App Setup x.y.z.exe`
- 便携目录（仅 pack 时）：`electron-app-win32-x64/`

3. 开发调试

```
npm run dev
```

### 常见问题

- 若出现 `EBADENGINE` 警告：升级到 Node 20+ 可消除警告。
- 若杀毒或 SmartScreen 拦截安装器：右键属性“解除锁定”或选择“仍要运行”。