import Document, {Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <html lang="en">
                <Head>
                    <meta name="description" content="" />
                    <meta charset="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    *{
                        margin: 0;
                        padding: 0;
                    }
                    html{
                        
                    }
                    body{
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}

export default MyDocument;