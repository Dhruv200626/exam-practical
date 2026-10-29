// Fetch code from .txt files and inject into <pre class="fetch-code"> elements
document.querySelectorAll('pre.fetch-code').forEach(async (pre) => {
  const src = pre.getAttribute('data-src');
  if (!src) return;

  try {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    // Escape HTML special chars so code renders safely
    pre.textContent = text;
  } catch (err) {
    pre.textContent = `// Could not load code: ${err.message}`;
    pre.style.color = '#ff7b72';
  }
});

// Copy button — reads from .txt URL instead of DOM text
document.querySelectorAll('.copy-btn[data-src]').forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const src = btn.getAttribute('data-src');
    try {
      const res  = await fetch(src);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      btn.textContent = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    } catch {
      btn.textContent = 'Error';
    }
  });
});
