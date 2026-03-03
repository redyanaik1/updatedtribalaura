const headers = document.querySelectorAll('.service-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    const sub = header.nextElementSibling;
    sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    parent.classList.toggle('active');
  });
});
