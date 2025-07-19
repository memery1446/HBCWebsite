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
            title: 'Join Us',
            subtitle: 'A Heart for God • A Love for People'
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
                <div className="text-center text-white px-4">
                    <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
                        {slides[currentSlide].title}
                    </h2>
                    <p className="text-xl md:text-2xl font-light tracking-wide">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>
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
