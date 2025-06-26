export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>20932 County Road 70</p>
                            <p>Andalusia, AL 36421</p>
                            <p>Phone: (334) 222-8117</p>
                            <p>Email: harmonybcops@gmail.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Service Times</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>Sunday School: 9:15 AM</p>
                            <p>Sunday Worship: 10:30 AM & 6:00 PM</p>
                            <p>Wednesday Service: 6:30 PM</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>Monday - Thursday</p>
                            <p>8:00 AM - 1:00 PM</p>
                            <p className="mt-4">Pastor: Scott Donaldson</p>
                            <p>(334) 464-6936</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Harmony Baptist Church. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
