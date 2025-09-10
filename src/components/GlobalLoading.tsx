import { useEffect } from 'react';

function GlobalLoading() {
  useEffect(() => {
    const el = document.getElementById('global-loading');
    if (el) el.style.display = 'none';
  }, []);

  return (
    <div
      id="global-loading"
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(2px)',
      }}
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="p-4 text-heading bg-neutral rounded shadow text-black font-semibold">
        Loading...
      </div>
    </div>
  );
}

export default GlobalLoading;
