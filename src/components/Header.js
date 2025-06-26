import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Harmony Baptist Church
                            </h1>
                            <p className="text-sm text-gray-600">
                                A Heart for God • A Love for People
                            </p>
                        </div>
                    </div>
                </div>
                <Navigation />
            </div>
        </header>
    )
}
