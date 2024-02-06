import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Centre de formation SAS-SPARKA-ESS",
  description: "Développement de logiciel moderne,formation sur les dernières pratiques de conception, DevOps,TDD, DDD, microservices, cloud native, CI/CD, méthode agile extrem programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
