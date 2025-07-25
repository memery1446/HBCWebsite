// sermons/page.js
import PageTemplate from '@/components/PageTemplate'

export default function Sermons() {
    return (
        <PageTemplate title="Sermons" image="/images/mika-baumeister-unsplash.jpg">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    <p>Listen to our latest sermons and be encouraged in your faith journey.</p>
                    <div className="text-left space-y-4">
                        <p>Check back soon for our latest sermon recordings and study materials.</p>
                        <p>Services are held every Sunday at 10:30 AM and 6:00 PM, and Wednesday at 6:30 PM.</p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}
