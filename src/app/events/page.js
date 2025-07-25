// events/page.js
import PageTemplate from '@/components/PageTemplate'

export default function Events() {
    return (
        <PageTemplate title="Events" image="/images/mika-baumeister-unsplash.jpg">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    <p>Stay connected with upcoming events and activities at Harmony Baptist Church.</p>
                    <div className="text-left space-y-4">
                        <p>Check back soon for upcoming church events, fellowship opportunities, and special services.</p>
                        <p>Follow us on social media or contact the church office for the latest updates.</p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}
