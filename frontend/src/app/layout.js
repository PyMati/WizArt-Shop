import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "WizArt",
  description: "Created by best alchemists in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
