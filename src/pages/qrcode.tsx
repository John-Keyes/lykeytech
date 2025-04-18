import React from 'react';
import { NextPage } from 'next';
import Card from 'src/components/card';
import { qrCode } from 'src/lib/static';

const QrCode: NextPage = () => (
    <div className="flex flex-center content-container">
        <Card className="page-error flex flex-column flex-center border-top border-top-5 border-top-light-purple">
            <img className="space-above border border-light-purple button-glow-purple" src={qrCode} alt="QR Code" width="250" height="250"/>
        </Card>
    </div>
);

QrCode.getInitialProps = async () => {
    return {
        pageTitle: "QrCode",
        pageDescription: "John Keyes QrCode | LyKeyTech"
    }
}
export default QrCode;