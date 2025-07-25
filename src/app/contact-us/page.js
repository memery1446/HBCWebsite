// contact-us/page.js
import PageTemplate from '@/components/PageTemplate'

export default function ContactUs() {
    return (
        <PageTemplate title="Contact Us" image="/images/mika-baumeister-unsplash.jpg">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    <p>We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, don't hesitate to reach out.</p>
                    <div className="text-left space-y-4">
                        <p><strong>Address:</strong><br />
                            [Your Church Address]<br />
                            [City, State ZIP]</p>

                        <p><strong>Phone:</strong><br />
                            [Your Phone Number]</p>

                        <p><strong>Email:</strong><br />
                            [Your Email Address]</p>

                        <p><strong>Service Times:</strong><br />
                            Sunday School: 9:15 AM<br />
                            Sunday Worship: 10:30 AM & 6:00 PM<br />
                            Wednesday Service: 6:30 PM</p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}
