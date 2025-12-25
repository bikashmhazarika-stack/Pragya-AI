import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';

interface DynamicImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const DynamicImage: React.FC<DynamicImageProps> = ({ prompt, alt, className, fallbackSrc }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      // Small delay to allow UI to settle before heavy API call
      await new Promise(r => setTimeout(r, 100));
      
      const generated = await generateImage(prompt);
      if (isMounted) {
        if (generated) {
          setImageUrl(generated);
        } else {
          // Fallback to picsum if API fails or no key
          setImageUrl(fallbackSrc || `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`);
        }
        setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt, fallbackSrc]);

  return (
    <div className={`relative overflow-hidden ${className} bg-pragya-darker`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-pragya-midnight animate-pulse">
           <span className="text-pragya-gold/50 font-serif italic">Generating vision...</span>
        </div>
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-pragya-darker/60 to-transparent pointer-events-none" />
    </div>
  );
};
