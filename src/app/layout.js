import './globals.css'
import UnifiedHeader from '@/components/UnifiedHeader'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Harmony Baptist Church - Andalusia, AL',
    description: 'A church with a Heart for God and a Love for People. Join us for worship, fellowship, and meaningful community in Andalusia, Alabama.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white">
        <UnifiedHeader />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
