'use client';

import { useContext, useEffect } from 'react';
import { UserContext } from '@auth0/nextjs-auth0/client';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default function ClientControl() {
    const { user, isLoading, error } = useContext(UserContext);

    useEffect(() => {
        console.log({ user, isLoading, error });
        if(isLoading === false){
            if(user){
                
            } else if(error){

            }
        }
    }, [user, isLoading]);

    return <></>;
}
