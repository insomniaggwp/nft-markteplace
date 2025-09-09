export function showLoading() {
  const el = document.getElementById('global-loading');
  if (el) el.style.display = 'flex';
}

export function hideLoading() {
  const el = document.getElementById('global-loading');
  if (el) el.style.display = 'none';
}
