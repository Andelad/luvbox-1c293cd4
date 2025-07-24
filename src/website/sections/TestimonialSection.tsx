import LightCarousel from '../components/LightCarousel';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "LuvBox helped me understand patterns in my relationships that I never noticed before. It's like having a therapist in your pocket.",
      author: "Sarah M."
    },
    {
      quote: "I was skeptical at first, but the diagnostic tool really opened my eyes to what I was bringing to my relationships.",
      author: "Michael T."
    },
    {
      quote: "The love scripts feature showed me how my past was affecting my present. Game-changing insights.",
      author: "Jennifer L."
    },
    {
      quote: "Finally, a tool that doesn't judge but helps you understand your unique love story. Highly recommend.",
      author: "David R."
    },
    {
      quote: "LuvBox gave me the clarity I needed to have better conversations with my partner about our future.",
      author: "Amanda K."
    },
    {
      quote: "This app helped me realize what I truly value in a relationship. The insights were eye-opening and practical.",
      author: "Rachel S."
    }
  ];

  return (
    <div className="min-h-[50vh] w-full py-20 flex items-center bg-gradient-to-r from-[color:oklch(91.57%_0.042_284.9_/_0.2)] to-transparent">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-web-hero  italic mb-6">
            What People Say
          </h2>
          <p className="text-web-body  max-w-2xl mx-auto">
            Discover how LuvBox has helped people gain clarity and understanding in their love lives.
          </p>
        </div>

        <LightCarousel
          items={testimonials}
          slidesToShow={3}
        />
      </div>
    </div>
  );
}