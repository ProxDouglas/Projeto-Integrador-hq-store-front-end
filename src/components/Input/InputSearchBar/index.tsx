import Image from 'next/image';

export default function InputSearchBar() {
  return (
    <div className="flex items-center border rounded-md border-[#8A94A4] overflow-hidden bg-white w-full">
      <label htmlFor="search" className="py-[10px] px-[12px] bg-white">
        <Image
          src="/images/icons/search-icon.svg"
          width={19.71}
          height={19.71}
          alt="search-icon"
        />
      </label>
      <input
        placeholder="Search menu items"
        className="w-full focus:outline-none placeholder:text-gray-900"
        type="text"
      />
    </div>
  );
}
