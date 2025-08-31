export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  affiliateUrl: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Noise-Canceling Headphones",
    description: "Experience superior sound quality with advanced noise-canceling technology. Perfect for music lovers and professionals who demand the best audio experience.",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
    rating: 4.8,
    reviews: 2847,
    category: "Electronics",
    tags: ["wireless", "headphones", "noise-canceling", "premium"],
    affiliateUrl: "https://example.com/affiliate/headphones-1",
    features: [
      "30-hour battery life",
      "Active noise cancellation",
      "Quick charge (3min = 3hrs)",
      "Premium comfort fit",
      "Hi-Res Audio certified"
    ],
    inStock: true
  },
  {
    id: "2",
    name: "Smart Fitness Tracker with Heart Rate Monitor",
    description: "Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1923,
    category: "Fitness",
    tags: ["smartwatch", "fitness", "health", "heart-rate"],
    affiliateUrl: "https://example.com/affiliate/fitness-tracker-1",
    features: [
      "7-day battery life",
      "Built-in GPS",
      "Heart rate monitor",
      "Sleep tracking",
      "Water resistant up to 50m"
    ],
    inStock: true
  },
  {
    id: "3",
    name: "Professional 4K Webcam for Streaming",
    description: "Crystal clear 4K video quality with auto-focus and built-in microphone. Perfect for content creators, streamers, and remote work professionals.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop&crop=center",
    rating: 4.7,
    reviews: 856,
    category: "Electronics",
    tags: ["webcam", "4k", "streaming", "professional"],
    affiliateUrl: "https://example.com/affiliate/webcam-1",
    features: [
      "4K Ultra HD video",
      "Auto-focus technology",
      "Built-in stereo microphones",
      "Wide 90° field of view",
      "USB plug-and-play"
    ],
    inStock: true
  },
  {
    id: "4",
    name: "Ergonomic Gaming Chair with RGB Lighting",
    description: "Premium gaming chair designed for long gaming sessions with lumbar support, adjustable height, and customizable RGB lighting effects.",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center",
    rating: 4.5,
    reviews: 743,
    category: "Gaming",
    tags: ["gaming", "chair", "ergonomic", "rgb"],
    affiliateUrl: "https://example.com/affiliate/gaming-chair-1",
    features: [
      "Premium PU leather",
      "Lumbar support system",
      "Customizable RGB lighting",
      "360° swivel design",
      "Height adjustable (42-46cm)"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "Portable Bluetooth Speaker - Waterproof",
    description: "High-quality portable speaker with 360° sound, waterproof design, and 24-hour battery life. Perfect for outdoor adventures and parties.",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&crop=center",
    rating: 4.4,
    reviews: 1456,
    category: "Electronics",
    tags: ["bluetooth", "speaker", "portable", "waterproof"],
    affiliateUrl: "https://example.com/affiliate/speaker-1",
    features: [
      "360° surround sound",
      "IPX7 waterproof rating",
      "24-hour battery life",
      "Wireless stereo pairing",
      "Built-in microphone"
    ],
    inStock: true
  },
  {
    id: "6",
    name: "Mechanical Gaming Keyboard - RGB Backlit",
    description: "Premium mechanical keyboard with tactile switches, customizable RGB backlighting, and programmable macro keys for gaming and productivity.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&crop=center",
    rating: 4.9,
    reviews: 2341,
    category: "Gaming",
    tags: ["keyboard", "mechanical", "gaming", "rgb"],
    affiliateUrl: "https://example.com/affiliate/keyboard-1",
    features: [
      "Cherry MX mechanical switches",
      "Per-key RGB backlighting",
      "Programmable macro keys",
      "USB-C connection",
      "Aluminum frame construction"
    ],
    inStock: true
  },
  {
    id: "7",
    name: "Wireless Charging Pad - Fast Charge",
    description: "Sleek wireless charging pad with fast charging support for Qi-enabled devices. Features LED indicator and non-slip surface.",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1588200618915-bb5fd23cd0e5?w=500&h=500&fit=crop&crop=center",
    rating: 4.3,
    reviews: 967,
    category: "Accessories",
    tags: ["wireless", "charging", "fast-charge", "qi"],
    affiliateUrl: "https://example.com/affiliate/charger-1",
    features: [
      "15W fast wireless charging",
      "Qi-certified compatibility",
      "LED charging indicator",
      "Non-slip silicone surface",
      "Foreign object detection"
    ],
    inStock: true
  },
  {
    id: "8",
    name: "HD Security Camera with Night Vision",
    description: "Smart home security camera with 1080p HD video, night vision, motion detection, and smartphone app control for complete peace of mind.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&crop=center",
    rating: 4.6,
    reviews: 1289,
    category: "Security",
    tags: ["security", "camera", "hd", "night-vision"],
    affiliateUrl: "https://example.com/affiliate/camera-1",
    features: [
      "1080p Full HD video",
      "Infrared night vision",
      "Motion detection alerts",
      "Two-way audio",
      "Cloud storage compatible"
    ],
    inStock: false
  }
];

export const categories = [
  "All",
  "Electronics",
  "Gaming",
  "Fitness",
  "Security",
  "Accessories"
];