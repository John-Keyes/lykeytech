import React, { useEffect, useState } from 'react';
import PageError from '../components/pageError';
import Loading from 'src/components/layout/loading';

const PageNotFound = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if(isLoading) {
        return <Loading/>;
    }
    return (
        <div className="flex flex-center content-container">
            <PageError statusCode={404}/>
        </div>
    );
}
  export default PageNotFound;