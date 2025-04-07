import React from 'react';
import Link from 'next/link';
import Card from './card';

const PageError = ({statusCode, details}: {statusCode: number, details?: string | undefined}) => {
    return (
        <Card className="page-error flex-column flex-center border-top border-top-5 border-top-light-purple">
            <h1>{statusCode
          ? `Error ${statusCode} occurred on server`
          : 'An error occurred on client'}</h1>
            {details && <h2>{details}</h2>}
            <p>Return <Link className="text-light-blue text-hover-clear-blue" href="/">home</Link>.</p>
        </Card>
    );
}
  export default PageError;