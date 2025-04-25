"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Code, LineChart } from 'lucide-react';
import Carousel, {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

console.log('DEBUG: Carousel', Carousel);
console.log('DEBUG: CarouselContent', CarouselContent);
console.log('DEBUG: CarouselItem', CarouselItem);
console.log('DEBUG: CarouselNext', CarouselNext);
console.log('DEBUG: CarouselPrevious', CarouselPrevious);
console.log('DEBUG: Button', Button);
console.log('DEBUG: ArrowRight', ArrowRight);
console.log('DEBUG: Cloud', Cloud);
console.log('DEBUG: Code', Code);
console.log('DEBUG: LineChart', LineChart);

export default function Home() {
  const t = useTranslations('home');

  const partners = [
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=300&h=150&fit=crop' },
    { name: 'AWS', logo: 'https://images.unsplash.com/photo-1702055894943-1f4012fae96c?q=80&w=300&h=150&fit=crop' },
    { name: 'Google Cloud', logo: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=300&h=150&fit=crop' },
    { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300&h=150&fit=crop' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" className="group">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel - fallback to test default export only */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full max-w-4xl mx-auto">
            <div className="flex">
              {partners.map((partner, index) => (
                <div key={index} className="md:basis-1/3 p-2">
                  <img src={partner.logo} alt={partner.name} className="w-full h-24 object-contain bg-white rounded shadow" />
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <Cloud className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('services.cloud.title')}</h3>
              <p className="text-muted-foreground">{t('services.cloud.description')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <Code className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('services.development.title')}</h3>
              <p className="text-muted-foreground">{t('services.development.description')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <LineChart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('services.strategy.title')}</h3>
              <p className="text-muted-foreground">{t('services.strategy.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}