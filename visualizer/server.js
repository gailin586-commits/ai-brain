// J.A.R.V.I.S. Neural Brain Synchronizer Server
// Zero-dependency pure Node.js implementation

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3800;
const BRAIN_ROOT = path.resolve(__dirname, '..');
const VISUALIZER_DIR = __dirname;
const BRAIN_DATA_FILE = path.join(VISUALIZER_DIR, 'brain-data.js');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').slice(0, 19);
}

function getDateString() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}

// 写入/追加 Markdown
function appendToMarkdown(relPath, title, group, desc, content, createdAt) {
  const targetFile = path.join(BRAIN_ROOT, relPath);
  const time = createdAt || getTimestamp();
  const appendBlock = `\n\n### ⚡ ${title}\n- **创建时间**：\`${time}\`\n- **神经元类型**：\`${group}\`\n- **核心摘要**：${desc}\n- **详细思路**：\n${content || desc}\n`;

  try {
    fs.appendFileSync(targetFile, appendBlock, 'utf8');
    console.log(`[J.A.R.V.I.S.] Appended to Markdown: ${relPath}`);
  } catch (err) {
    console.error(`[Error] Failed to append to ${relPath}:`, err);
  }
}

// 追加日志到 memory-log.md
function logToMemory(title, group, file, createdAt) {
  const memoryFile = path.join(BRAIN_ROOT, 'memory-log.md');
  const time = createdAt || getTimestamp();
  const logLine = `\n- **${time}**：通过贾维斯神经元系统注入新节点 [${title}]（分类：${group}，归档至 ${file}）。`;
  try {
    fs.appendFileSync(memoryFile, logLine, 'utf8');
  } catch (e) {
    console.error('[Error] Failed to log memory:', e);
  }
}

// 更新 brain-data.js 文件
function persistBrainData(newNode, newLink) {
  try {
    let currentData;
    delete require.cache[require.resolve(BRAIN_DATA_FILE)];
    currentData = require(BRAIN_DATA_FILE);

    if (!newNode.createdAt) {
      newNode.createdAt = getTimestamp();
    }

    currentData.nodes.push(newNode);
    if (newLink) {
      currentData.links.push(newLink);
    }

    const fileContent = `// J.A.R.V.I.S. Neural Brain Graph Data\n// Generated and maintained dynamically by AI Shared Brain\n\nconst BRAIN_GRAPH_DATA = ${JSON.stringify(currentData, null, 2)};\n\nif (typeof window !== "undefined") {\n  window.BRAIN_GRAPH_DATA = BRAIN_GRAPH_DATA;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = BRAIN_GRAPH_DATA;\n}\n`;

    fs.writeFileSync(BRAIN_DATA_FILE, fileContent, 'utf8');
    console.log(`[J.A.R.V.I.S.] Updated brain-data.js with new node: ${newNode.name} at ${newNode.createdAt}`);
    return true;
  } catch (err) {
    console.error('[Error] Failed to persist brain-data.js:', err);
    return false;
  }
}

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // 1. API: 新增神经元
  if (req.method === 'POST' && pathname === '/api/neuron') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { node, link } = JSON.parse(body);
        if (!node || !node.name) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, error: 'Invalid node data' }));
        }

        if (!node.createdAt) {
          node.createdAt = getTimestamp();
        }

        // 持久化到 brain-data.js
        persistBrainData(node, link);

        // 追加到对应 Markdown
        appendToMarkdown(node.file, node.name, node.group, node.desc, node.fullContent, node.createdAt);

        // 记入 memory-log.md
        logToMemory(node.name, node.group, node.file, node.createdAt);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, node }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: e.message }));
      }
    });
    return;
  }

  // 2. API: GitHub 同步
  if (req.method === 'POST' && pathname === '/api/github-sync') {
    console.log('[J.A.R.V.I.S.] Triggering GitHub sync via sync.bat...');
    const syncBat = path.join(BRAIN_ROOT, 'sync.bat');
    exec(`cmd /c "${syncBat}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('[Error] Git sync error:', stderr || error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, error: stderr || error.message }));
      }
      console.log('[J.A.R.V.I.S.] Git sync completed:\n', stdout);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, output: stdout }));
    });
    return;
  }

  // 3. 静态文件托管
  let filePath = path.join(VISUALIZER_DIR, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found - J.A.R.V.I.S. Neural System');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500 Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log('  J.A.R.V.I.S. NEURAL BRAIN SYSTEM ONLINE');
  console.log(`  Local URL:  http://localhost:${PORT}`);
  console.log(`  LAN URL:    http://127.0.0.1:${PORT}`);
  console.log('  Stark HUD 3D Neural Spawner ready.');
  console.log('====================================================');
});
