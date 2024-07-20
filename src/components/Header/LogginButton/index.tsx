'use client';
import { useContext } from 'react';
import { UserContext } from '@auth0/nextjs-auth0/client';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import ProfileUnknown from '../../../assets/Profile_Unknow.png';

export default function LoginButton() {
    const { user, isLoading } = useContext(UserContext);

    if (!user)
        return (
            <button disabled={isLoading}>
                <a href="/api/auth/login">
                    <FaUser size={24} />
                </a>
            </button>
        );

    if (user.picture)
        return (
            <button>
                <a href="/api/auth/logout">
                    {/* <Image
                        className="rounded-full h-[40px] w-[40px]"
                        src={user.picture}
                        alt={'Profile'}
                        loading="lazy"
                        width={40}
                        height={40}
                    /> */}
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="rounded-full h-[40px]"
                        data-testid="profile-picture"
                    />
                </a>
            </button>
        );

    return (
        <button>
            <a href="/api/auth/logout">
                <Image
                    className="rounded-full h-[40px] w-[40px]"
                    src={ProfileUnknown}
                    alt={'Profile'}
                    loading="lazy"
                    width={40}
                    height={40}
                />
            </a>
        </button>
    );
}
