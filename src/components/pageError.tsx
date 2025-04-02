import React from 'react';
import Link from 'next/link';
import Card from './card';

const PageError = ({statusCode, details}: {statusCode: number, details?: string | undefined}) => {
    return (
        <Card className="page-error rounded-md flex-column flex-center bg-dark-purple">
            <h1>{statusCode
          ? `Error ${statusCode} occurred on server`
          : 'An error occurred on client'}</h1>
            {details && <h2>{details}</h2>}
            <p>Return <Link className="text-white text-hover-light-purple" href="/">home</Link>.</p>
        </Card>
    );
}
  export default PageError;