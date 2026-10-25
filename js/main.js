// ===== ACCORDION TOGGLE =====
document.querySelectorAll('.practical-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.practical-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.practical-item').forEach(i => i.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  });
});

// ===== COPY CODE BUTTON =====
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const pre = btn.closest('.code-block').querySelector('pre');
    const text = pre.innerText;

    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
