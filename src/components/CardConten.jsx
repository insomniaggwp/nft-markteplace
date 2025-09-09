import { useState, useRef, useEffect } from 'react';

const statusColor = {
  draft: 'bg-gray',
  scheduled: 'bg-info',
  posted: 'bg-success',
};

export default function CardContent(campaign) {
  const {
    id,
    brand = 'brand',
    campaignName = 'campaign',
    image = '@/src/assets/react.svg',
    status = 'draft',
    onDeleteContent,
    onEditContent,
  } = campaign;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      id={`card-content-${id}`}
      className="relative rounded-xl border border-gray-200 bg-white max-w-sm w-full overflow-hidden shadow-elevation-2 cursor-pointer hover:shadow-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold uppercase">
            {brand[0]}
          </div>
          <span className="font-semibold text-sm text-gray-800">{brand}</span>
        </div>
        <span
          className="text-sm text-gray-400"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          •••
        </span>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-4 top-10 z-10 w-28 bg-white shadow-elevation-1 rounded-md border text-sm text-black"
          >
            {status !== 'posted' && (
              <button
                onClick={onEditContent}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Edit
              </button>
            )}
            <button
              onClick={onDeleteContent}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-danger"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* */}
      <img
        src={image}
        alt={`${campaignName} preview`}
        className="w-full h-64 object-cover"
      />

      {/* Caption dan status */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <p className="text-caption-size text-caption-line">
          <span className="font-semibold">{brand}</span> {campaignName}
        </p>
        <span
          className={`self-start text-caption-size text-caption-line text-neutral px-2 py-1 rounded-full capitalize ${statusColor[status] || 'bg-gray-200'}`}
        >
          {status}
        </span>
      </div>

      {status === 'posted' && (
        <span
          className={`flex self-start w-full px-2 bg-danger text-caption-size text-caption-line text-neutral`}
        >
          Posted status cannot be edited.
        </span>
      )}
    </div>
  );
}
