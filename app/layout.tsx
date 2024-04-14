import { Metadata } from "next";
import { Poppins } from "next/font/google"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "DeVolt | The distributed charging network",
  description: "Charge your car or sell your exceeding energy in the most blockchain way possible!",
  openGraph: {
    images: "https://www.devolt.xyz/ogimage.png",
    type: "website",
    url: "https://www.devolt.xyz",
    locale: "en",
  }
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700",],
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
})

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html  lang="en" className={poppins.className}>
        <body>
            {children}
            <ToastContainer />
        </body>
    </html>
  );
};

export default App;
