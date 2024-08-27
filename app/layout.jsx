import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

export const metadata = {
    title: "SRM Student Clubs",
    description: "A web-platform for collating information about student clubs and providing an integrated enrolment process.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <TopNav />

                {children}

                <Footer />
            </body>
        </html>
    );
}
