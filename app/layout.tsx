import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* by adding Inter to the <body> element, the font will be applied throughout your application. BELOW!!!!*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
