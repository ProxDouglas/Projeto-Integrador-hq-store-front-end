'use client';

import { Comics } from '@/types/comics';
import ComicsCard from './ComicsCard';

interface IComicsPanelProps {
    comics: Comics[];
}

export default function ComicsPanel({ comics }: IComicsPanelProps) {
    return (
        <div className="flex justify-center w-full md:h-83 md:bg-gray-50">
            <div className="flex flex-col md:max-w-[1000px] h-full w-full bg-white gap-14 md:shadow-md md:py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {comics.map((comics) => {
                        return (
                            <ComicsCard
                                key={comics.id}
                                comics={comics}
                                isSelected={false}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
