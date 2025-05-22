function ImageUploadForm({ label, onChange, preview }) {

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <label htmlFor="imageUpload" className="text-sm font-medium text-gray-700">
        { label }
      </label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        onChange={onChange}
        className="file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-info file:text-white
                   hover:file:bg-info-darken cursor-pointer"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="rounded-lg shadow max-h-60 object-contain"
        />
      )}
    </div>
  );
}

export default ImageUploadForm;
