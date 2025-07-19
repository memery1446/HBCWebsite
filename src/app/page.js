'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image Slider */}
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
                            <div className="text-white text-lg leading-relaxed max-w-lg">
                                <p>For we are his workmanship, created in Christ Jesus for good works,</p>
                                <p>which God prepared beforehand, that</p>
                                <p>we should walk in them. - Ephesians 2:10</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 ml-12">
                            <div className="w-80 h-80 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/30">
                                <img
                                    src="/images/family-circle.jpg"
                                    alt="Church family"
                                    className="w-full h-full object-cover"
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
                        <p className="text-xl md:text-2xl font-light tracking-wide">
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
    );
}
