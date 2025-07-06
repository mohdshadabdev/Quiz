const toggle = document.getElementById('theme-switch');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('light', toggle.checked);
});
