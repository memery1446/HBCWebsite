import Link from 'next/link'

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary-50 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to Harmony Baptist Church
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        We believe that God loves all of creation, and through Jesus Christ we are brought into fellowship with God.
                        We are a family, proclaiming the love and grace of God, as found in God&apos;s Word.
                    </p>
                    <div className="space-x-4">
                        <Link href="/about-us" className="btn-primary">
                            Learn More About Us
                        </Link>
                        <Link href="/contact-us" className="btn-secondary">
                            Plan Your Visit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            All Are Welcome
                        </h2>
                        <div className="prose prose-lg mx-auto text-gray-600">
                            <p>
                                All are welcome at Harmony Baptist Church - those who believe as well as those who are seeking.
                                At each service we gather for meaningful worship to study God&apos;s word. We reach out with the heart of
                                ministry to care for our neighbors in the name of Christ here and around the world.
                            </p>
                            <p>
                                We have fun and fellowship in a variety of activities ranging from dinners to sporting events.
                                As we work and worship together we find that our faith grows as we enjoy friends old and new.
                            </p>
                            <p>
                                You will discover many exciting opportunities at Harmony Baptist Church. Our website is just the
                                introduction to the spirit of our church. We want you to feel at home and comfortable here.
                                We are pleased to welcome you as part of a growing and diverse Christian community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Times */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us for Worship</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday School</h3>
                            <p className="text-2xl font-bold text-primary-600 mb-2">9:15 AM</p>
                            <p className="text-gray-600">All Ages Bible Study</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Worship</h3>
                            <p className="text-2xl font-bold text-primary-600 mb-2">10:30 AM & 6:00 PM</p>
                            <p className="text-gray-600">Morning & Evening Service</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wednesday Service</h3>
                            <p className="text-2xl font-bold text-primary-600 mb-2">6:30 PM</p>
                            <p className="text-gray-600">Prayer & Bible Study</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
