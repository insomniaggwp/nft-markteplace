const statusColor = {
  draft: 'bg-gray text-gray',
  scheduled: 'bg-warning text-warning',
  posted: 'bg-primary text-primary',
};

export default function CardContent(campaign) {
  const { brand = 'brand', campaignName = 'campaign', image = '@/src/assets/react.svg', status = 'draft' } = campaign;

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white flex flex-col gap-3 w-full max-w-sm">
      <img
        src={image}
        alt={`${campaignName} preview`}
        className="rounded-xl w-full h-48 object-cover"
      />
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{campaignName}</h2>
          <p className="text-sm text-gray-500">{brand}</p>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusColor[status] || 'bg-gray-100 text-gray-700'}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
