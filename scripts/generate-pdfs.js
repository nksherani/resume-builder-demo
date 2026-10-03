const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const RESUMES_DIR = path.join(__dirname, '..', 'resumes');
const PDF_DIR = path.join(__dirname, '..', 'pdf');

if (!fs.existsSync(PDF_DIR)) {
  fs.mkdirSync(PDF_DIR, { recursive: true });
}

// Basic markdown to HTML renderer if marked isn't installed locally
function renderMarkdown(md) {
  // Use npx marked for complete GFM support
  const tempMd = path.join(__dirname, 'temp.md');
  fs.writeFileSync(tempMd, md, 'utf-8');
  try {
    const html = execSync(`npx --yes marked -i "${tempMd}"`, { encoding: 'utf-8' });
    if (fs.existsSync(tempMd)) fs.unlinkSync(tempMd);
    return html;
  } catch (err) {
    if (fs.existsSync(tempMd)) fs.unlinkSync(tempMd);
    throw err;
  }
}

function getHtmlTemplate(title, bodyContent) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    @page {
      size: letter;
      margin: 14mm 16mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 9.5pt;
      line-height: 1.45;
      color: #1e293b;
      background: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    
    /* Header & Name */
    h1 {
      font-size: 20pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      margin: 0 0 2px 0;
      line-height: 1.2;
    }
    h1 + p {
      font-size: 11pt;
      font-weight: 600;
      color: #1e40af;
      margin: 0 0 8px 0;
    }
    
    /* Contact bar */
    p:has(a), p:first-of-type {
      color: #475569;
    }
    
    hr {
      border: none;
      border-top: 1.5px solid #e2e8f0;
      margin: 10px 0 12px 0;
    }

    /* Section Headings */
    h2 {
      font-size: 11.5pt;
      font-weight: 700;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 3px;
      margin: 14px 0 8px 0;
      display: flex;
      align-items: center;
    }
    
    /* Subsection Headings / Job Titles */
    h3 {
      font-size: 10.5pt;
      font-weight: 700;
      color: #0f172a;
      margin: 10px 0 2px 0;
      page-break-after: avoid;
      break-after: avoid;
    }
    h3 + p {
      margin: 0 0 6px 0;
      color: #475569;
      font-size: 9pt;
      font-style: italic;
    }
    
    h4 {
      font-size: 9.5pt;
      font-weight: 600;
      color: #334155;
      margin: 8px 0 3px 0;
      page-break-after: avoid;
      break-after: avoid;
    }

    p {
      margin: 0 0 6px 0;
    }

    ul {
      margin: 4px 0 8px 0;
      padding-left: 18px;
    }
    li {
      margin-bottom: 3.5px;
      color: #334155;
    }
    li strong {
      color: #0f172a;
      font-weight: 600;
    }
    
    /* Code / Badges / Tags */
    code {
      font-family: 'Inter', monospace;
      font-size: 8.5pt;
      background: #f1f5f9;
      color: #1e40af;
      padding: 1.5px 5px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
      display: inline-block;
      margin: 1px 2px;
    }
    
    /* Links */
    a {
      color: #2563eb;
      text-decoration: none;
    }
    
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 6px 0 10px 0;
      font-size: 9pt;
    }
    th, td {
      padding: 5px 8px;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    th {
      background-color: #f8fafc;
      color: #0f172a;
      font-weight: 600;
      border-top: 1px solid #cbd5e1;
      border-bottom: 2px solid #cbd5e1;
    }
    
    /* Prevent awkward print breaks */
    .section-block, h3, h4, table, ul, li {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    
    @media print {
      body {
        background: transparent;
      }
      a {
        color: #1e40af;
        text-decoration: none;
      }
    }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
}

function convertDirectory(srcDir, outputSubDir) {
  if (!fs.existsSync(srcDir)) return;
  const targetPdfDir = path.join(PDF_DIR, outputSubDir);
  if (!fs.existsSync(targetPdfDir)) fs.mkdirSync(targetPdfDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} markdown files in ${srcDir}.`);

  for (const file of files) {
    const baseName = path.basename(file, '.md');
    const mdPath = path.join(srcDir, file);
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    
    console.log(`Processing ${file}...`);
    const bodyHtml = renderMarkdown(mdContent);
    const fullHtml = getHtmlTemplate(baseName, bodyHtml);
    
    const tempHtmlPath = path.join(__dirname, `${baseName}.html`);
    fs.writeFileSync(tempHtmlPath, fullHtml, 'utf-8');
    
    const outputPdfSrc = path.join(srcDir, `${baseName}.pdf`);
    const outputPdfFolder = path.join(targetPdfDir, `${baseName}.pdf`);
    
    const chromeCmd = `"${CHROME_PATH}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfSrc}" "${tempHtmlPath}"`;
    execSync(chromeCmd);
    
    fs.copyFileSync(outputPdfSrc, outputPdfFolder);
    
    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }
    
    console.log(`Generated: ${outputPdfSrc}`);
    console.log(`Generated: ${outputPdfFolder}`);
  }
}

function convertAll() {
  convertDirectory(RESUMES_DIR, 'resumes');
  convertDirectory(path.join(__dirname, '..', 'cover-letters'), 'cover-letters');
  console.log('All documents compiled to PDF successfully!');
}

convertAll();
