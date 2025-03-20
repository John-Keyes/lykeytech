import React, {useState, ReactNode} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignWrapper = ({children, withSignTabs = false} : {children : ReactNode, withSignTabs?: boolean}) => {
    const {pathname} = useRouter();
    const [activeTab, setActiveTab] = useState(pathname === "/auth/register");
    return (
        <div id="auth-page-container" className="flex flex-column content-container">
            <div id="auth-container" className="rounded-md flex flex-column fit-width">
                {withSignTabs && (
                    <div className="flex fit-width">
                        <Link className={`tabp ${activeTab ? "tabp-inactive" : "tabp-active"} fit-width tabp-hover-color1`} onClick={() => setActiveTab(false)} href="/auth/login">Log In</Link>
                        <Link className={`tabp ${activeTab ? "tabp-active" : "tabp-inactive"} fit-width tabp-hover-color2`} onClick={() => setActiveTab(true)} href="/auth/register">Register</Link>
                    </div>
                )}
                {children}
                {withSignTabs && (
                    <div className="form-container">
                        <Link id="forgot-link" className="text-hover-color1" href="/auth/password/forgot">Forgot Password</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SignWrapper;
