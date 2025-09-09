import { useState } from 'react';
import Button from './Button';

export default function SearchInput({ onSearch, placeholder = 'Search...' }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="flex-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex-1">
        <Button variant="outline" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
}
