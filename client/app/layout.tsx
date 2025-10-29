import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "dotFitnessTracker",
  description: "Track your fitness journey effortlessly",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
