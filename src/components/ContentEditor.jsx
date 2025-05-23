export default function ContentEditor(campaign) {
  const {
    id,
    caption,
    brand = 'brand',
    image = '@/src/assets/react.svg',
    logo,
  } = campaign;

   return (
    <div id={`card-content-${id}`} className="relative rounded-xl border border-gray-200 bg-white w-full overflow-hidden shadow-elevation-2 cursor-pointer hover:shadow-primary">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt={`company logo preview`}
            className="w-16 h-16 object-cover rounded-full"
          />
          <span className="font-semibold text-sm text-gray-800">{brand}</span>
        </div>
      </div>

      {/* */}
      <img
        src={image}
        alt={`generate image preview`}
        className="w-full h-64 object-cover"
      />

      {/* Caption and status */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <p className="text-caption-size text-caption-line">
          <span className="font-semibold">{brand}</span>{' '}
          {caption}
        </p>
      </div>
    </div>
  );
}
