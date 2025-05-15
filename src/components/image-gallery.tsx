import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const galleryItems = [
  { src: "https://placehold.co/600x400.png", alt: "ECS Event Photo 1", hint: "event photo" },
  { src: "https://placehold.co/600x400.png", alt: "ECS Lab Equipment", hint: "lab equipment" },
  { src: "https://placehold.co/600x400.png", alt: "Students Collaborating", hint: "students collaboration" },
  { src: "https://placehold.co/600x400.png", alt: "Faculty Presentation", hint: "faculty presentation" },
  { src: "https://placehold.co/600x400.png", alt: "Robotics Project", hint: "robotics project" },
  { src: "https://placehold.co/600x400.png", alt: "Campus Scenery", hint: "campus scenery" },
];

export function ImageGallery() {
  return (
    <section id="gallery" className="section-animate opacity-0">
      <div className="section-card">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="text-lg text-aurum-light-gray mb-6 text-center leading-relaxed">
          A glimpse into past events, department activities, and student achievements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-video bg-aurum-mid-blue">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
