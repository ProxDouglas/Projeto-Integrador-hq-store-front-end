'use client';
import React from 'react';

interface ICardProps {
    name: string;
    url: string;
    price: number;
}

export default function Card({ name, url, price }: Readonly<ICardProps>) {
    return (
        <div className="container flex justify-center items-center">
            <div className="card border rounded shadow p-4">
                <img
                    style={{
                        objectFit: 'cover',
                        width: '400px',
                        height: '500px',
                        borderRadius: '20px',
                    }}
                    src={url}
                    alt={name}
                    className="w-full h-full object-cover mb-4"
                />
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-gray-500">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

// import React from 'react';

// interface ICardProps {
//     name: string;
//     url: string;
//     price: number;
// }

// export default function Card({ name, url, price }: Readonly<ICardProps>) {
//     return (
//         <div className="container flex justify-center items-center p-4">
//             <div className="card border rounded shadow">
//                 <img
//                     src={url}
//                     alt={name}
//                     className="card-img"
//                 />
//                 <h2 className="card-title">{name}</h2>
//                 <p className="card-price">${price.toFixed(2)}</p>
//             </div>
//         </div>
//     );
// }

