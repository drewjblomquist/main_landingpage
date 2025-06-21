import '../styles/index.css';

export const metadata = {
  title: 'Bloom Advisory - Admin',
  description: 'Admin area for Bloom Advisory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen w-full font-sans relative"
        >
          <div
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-80 blur-[60px] brightness-110"
            style={{
              backgroundImage: "url('/images/B2GBackground.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
