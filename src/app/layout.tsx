import Header from '@/components/Header';
import BannerImage from '@/assets/banner.jpg';
import { Roboto } from 'next/font/google';
import './globals.scss';
import StoreProvider from './StoreProvider';
import Banner from '@/components/Banner';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider >
            <html lang="pt-BR">
                <body className={roboto.className}>
                    <div className="relative">
                        <div className="min-h-screen w-full">
                            <Header />
                            <Banner bannerImage={BannerImage} />
                            <div className="bg-white md:bg-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </StoreProvider>
    );
}
