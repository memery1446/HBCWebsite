'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Phone } from 'lucide-react';

export default function Homepage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample images - replace with your actual church images
    const slides = [
        {
            image: '/images/harmony-aerial.jpg',
            title: 'Welcome',
            subtitle: 'Loving Jesus... A Heart for God, Caring for People'
        },
        {
            image: '/images/harmony-aerial.jpg',
            title: 'We Are His Workmanship',
            subtitle: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them. - Ephesians 2:10'
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full">
            {/* Image Slider */}
            <div className="relative w-full h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url("${slide.image}")` }}
                            >
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    {slides[currentSlide].title === 'We Are His Workmanship' ? (
                        // Special layout for "We Are His Workmanship" slide
                        <div className="flex items-center justify-center w-full max-w-6xl px-4">
                            <div className="flex-1">
                                <h2 className="font-impact text-ultra font-bold mb-6 tracking-tight text-left inline-block text-white">
                                    We Are His<br />
                                    Workmanship
                                </h2>
                                <div className="text-white text-4xl leading-relaxed max-w-8xl">
                                    <p>For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.<br />- Ephesians 2:10</p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 ml-12">
                                <div className="w-[48rem] h-[48rem] rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/30">
                                    <img
                                        src="/images/friends-at-sunrise.png"
                                        alt="Church family"
                                        className="w-full h-full object-cover"
                                        style={{
                                            objectPosition: 'center center',
                                            transform: 'scale(1.90)',
                                            transformOrigin: 'center center'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Standard layout for other slides (preserving your work!)
                        <div className="text-center text-white px-4">
                            <h2 className="font-impact text-ultra font-bold mb-4 tracking-tight">
                                {slides[currentSlide].title}
                            </h2>
                            <p className="text-2xl md:text-3xl font-light tracking-wide">
                                {slides[currentSlide].subtitle}
                            </p>
                        </div>
                    )}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-15 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                >
                    <ChevronLeft className="h-8 w-8 text-white" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-15 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                >
                    <ChevronRight className="h-8 w-8 text-white" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-15">
                    <div className="flex space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Midway Footer Section */}
            <div className="bg-orange-600 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        {/* Services Column */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <Clock className="h-8 w-8 mr-3" />
                                <h3 className="text-2xl font-bold">Services</h3>
                            </div>
                            <div className="space-y-2 text-lg">
                                <p>Sunday 9:15am Bible Study All Ages</p>
                                <p>Sunday 10:30 Morning Worship</p>
                                <p>Sunday 6:00pm Evening Worship</p>
                                <p>Wednesday 6:30 Evening Worship</p>
                            </div>
                        </div>

                        {/* Location Column */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <MapPin className="h-8 w-8 mr-3" />
                                <h3 className="text-2xl font-bold">Location</h3>
                            </div>
                            <div className="space-y-2 text-lg">
                                <p>20932 Co Rd 70</p>
                                <p>Andalusia, AL 36421</p>
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <Phone className="h-8 w-8 mr-3" />
                                <h3 className="text-2xl font-bold">Contact</h3>
                            </div>
                            <div className="text-lg">
                                <p>334-222-8117</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Welcome Content Section */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-black text-center mb-8">
                        Welcome To Harmony Baptist Church
                    </h2>

                    <div className="space-y-8 text-gray-800 text-2xl leading-relaxed">
                        <p className="text-orange-600 font-semibold text-center text-3xl leading-snug">
                            We At Harmony Baptist Church Invite You To Worship With Us! No Matter Where You Are At On Life's Journey, You Are Welcome Here!
                        </p>

                        <p className="text-2xl leading-relaxed">
                            We believe that God loves all of creation, and through Jesus Christ we are brought into fellowship with God. We are a family, proclaiming the love and grace of God, as found in God's Word. All are welcome at Harmony Baptist Church - those who believe as well as those who are seeking.
                        </p>

                        <p className="text-2xl leading-relaxed">
                            At each service we gather for meaningful worship to study God's word. We reach out with the heart of ministry to care for our neighbors in the name of Christ here and around the world. We have fun and fellowship in a variety of activities ranging from dinners to sporting events. As we work and worship together we find that our faith grows as we enjoy friends old and new.
                        </p>

                        <p className="text-2xl leading-relaxed">
                            You will discover many exciting opportunities at Harmony Baptist Church. Our website is just the introduction to the spirit of our church. We want you to feel at home and comfortable here. We are pleased to welcome you as part of a growing and diverse Christian community.
                        </p>

                        <p className="text-orange-600 font-semibold text-center text-3xl leading-snug">
                            Please Join Us For An Upcoming Worship Service. There's A Place For You Here At Harmony Baptist Church.
                        </p>
                    </div>
                </div>
            </div>

            {/* Come And Visit Us Section */}
            <div className="relative py-20 px-4 bg-gray-100 overflow-hidden">
                {/* Map Background */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20h10v10H20z M40 30h20v5H40z M15 50h30v2H15z M60 15h5v25h-5z M70 40h15v3H70z M25 70h40v2H25z M80 60v20h-3V60z M10 80h25v5H10z' fill='%23666'/%3E%3Ccircle cx='30' cy='40' r='3' fill='%23999'/%3E%3Ccircle cx='70' cy='25' r='2' fill='%23999'/%3E%3Ccircle cx='85' cy='75' r='2' fill='%23999'/%3E%3C/svg%3E")`
                    }}
                />

                <div className="relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-black mb-8">
                        Come And Visit Us
                    </h2>

                    <button className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-black">
                        click for driving directions
                    </button>
                </div>
            </div>
        </div>
    );
}
