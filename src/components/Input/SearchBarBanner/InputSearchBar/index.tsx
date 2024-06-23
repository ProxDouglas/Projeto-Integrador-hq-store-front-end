import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IInputSearchBar {
    comicsName?: string;
    handleSearch: Function;
}

export default function InputSearchBar({
    comicsName,
    handleSearch,
}: Readonly<IInputSearchBar>) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleKeyDown(event: { key: string }) {
        if (event.key === 'Enter') {
            handleSearchTerm();
        }
    }

    function handleSearchTerm() {
        let validSearchTerm = '';
        if (searchTerm.length > 0) validSearchTerm = searchTerm;
        else if (comicsName) validSearchTerm = comicsName;
        handleSearch(validSearchTerm);
    }

    return (
        <div className="flex items-center border rounded-md border-[#8A94A4] overflow-hidden bg-white w-full">
            <label htmlFor="search" className="py-[10px] px-[12px] bg-white">
                <button onClick={() => handleSearch()}>
                    <Image
                        src="/images/icons/search-icon.svg"
                        width={19.71}
                        height={19.71}
                        alt="search-icon"
                    />
                </button>
            </label>
            <input
                placeholder="Search menu items"
                className="w-full focus:outline-none placeholder:text-gray-900"
                type="text"
                defaultValue={comicsName ?? ''}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
