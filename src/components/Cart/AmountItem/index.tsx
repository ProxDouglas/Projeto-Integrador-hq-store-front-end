'use client';

import { FaPlus, FaMinus } from 'react-icons/fa6';

interface IAmountItem {
    amount: number;
    increment: Function;
    decrement: Function;
}

export default function AmountItem({
    amount,
    increment,
    decrement,
}: IAmountItem) {
    function incrementValue() {
        if (increment) increment();
    }

    function decrementValue() {
        if (decrement) decrement();
    }

    return (
        <div className="flex w-[100px]">
            <button id="increment-item" onClick={decrementValue}>
                <FaMinus className="text-black" />
            </button>
            <div className="px-1">
                <input
                    className="w-full border-2 border-black rounded w-8 text-black text-center"
                    type="text"
                    value={amount}
                    disabled
                />
            </div>
            <button id="increment-item" onClick={incrementValue}>
                <FaPlus className="text-black" />
            </button>
        </div>
    );
}
