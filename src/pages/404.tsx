import React from 'react';
import PageError from '../components/pageError';

const PageNotFound = () => {
    return (
        <div className="flex flex-center content-container">
            <PageError statusCode={404}/>
        </div>
    );
}
  export default PageNotFound;