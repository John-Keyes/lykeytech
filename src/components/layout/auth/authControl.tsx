import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../../lib/hooks/useAuthStore';
import Loading from '../loading';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

type PageOptionstype = {
    signOutRequired?: boolean,
    signInRequired?: boolean,
    adminRequired?: boolean
}

const defaultPageOptions : PageOptionstype = {signOutRequired: false, signInRequired: false, adminRequired: false};

const AuthControl = (Page: NextPage, rolesRequired: string[]) => {
    const CheckAuth = (props: JSX.IntrinsicAttributes) => {
        const {data: {role, userId}, hasSession, CheckSession} = useAuthStore();
        const [isLoading, setIsLoading] = useState(true);
        const {push, back} = useRouter();

        useEffect(() => {
            CheckSession();
            setIsLoading(false);
        }, [userId]);

        if(isLoading) {
            return <Loading/>;
        }

        if(!rolesRequired.includes(role)) {
            push("/");
            return;
        }
        
        return <Page {...props}/>;
    }
    if (Page.getInitialProps) {
        CheckAuth.getInitialProps = Page.getInitialProps;
    }
    
    return CheckAuth;
}

export default AuthControl;