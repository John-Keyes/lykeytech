import React from 'react';
import Card from './card';
import Button from './button';
import { useRouter } from 'next/router';

const PageError = ({statusCode, details}: {statusCode: number, details?: string | undefined}) => {
  const {back} = useRouter();
    return (
        <Card className="page-error flex flex-column flex-center border-top border-top-5 border-top-light-purple text-start">
            <h1>{statusCode ? `Error ${statusCode} occurred` : "An error occurred"}</h1>
            {details && <h2>{details}</h2>}
            <Button onClick={back} className="bg-purple bg-hover-light-purple button-glow-purple"><span className="button-text text-white">Return</span></Button>
        </Card>
    );
}
  export default PageError;
  