"use client";

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Code, LineChart, Server, HardDrive, Network } from 'lucide-react';
import Carousel, {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
console.log('DEBUG: Server', Server);
console.log('DEBUG: HardDrive', HardDrive);
console.log('DEBUG: Network', Network);

export default function Home() {
  const t = useTranslations('home');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

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

      {/* Featured Services Section */}
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
            {/* On-Premise Support */}
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Server className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('services.onPremise.title')}</h3>
              <p className="text-muted-foreground">{t('services.onPremise.description')}</p>
              <Link href={`${locale}/services#onPremise`} className="text-primary hover:underline mt-4 inline-block">
                Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Web Admin */}
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <HardDrive className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('services.webAdmin.title')}</h3>
              <p className="text-muted-foreground">{t('services.webAdmin.description')}</p>
              <Link href={`${locale}/services#webAdmin`} className="text-primary hover:underline mt-4 inline-block">
                Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Consulting */}
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Network className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('services.consulting.title')}</h3>
              <p className="text-muted-foreground">{t('services.consulting.description')}</p>
              <Link href={`${locale}/services#consulting`} className="text-primary hover:underline mt-4 inline-block">
                Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}