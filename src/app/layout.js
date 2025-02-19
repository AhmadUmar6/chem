import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Chemtech Solutions',
  description: 'End-to-End Industrial Solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}