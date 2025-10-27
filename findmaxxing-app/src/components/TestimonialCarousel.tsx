/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotateInterval?: number;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoRotateInterval = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isAutoRotating, autoRotateInterval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };


  return (
    <div className="relative">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="mx-auto max-w-2xl">
              <CardContent className="pt-8 space-y-6">
                {/* Stars */}
                <motion.div 
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Award className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote 
                  className="text-muted-foreground text-lg text-center italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>

                {/* Author Info */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-green-600 text-lg font-medium">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-green-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
