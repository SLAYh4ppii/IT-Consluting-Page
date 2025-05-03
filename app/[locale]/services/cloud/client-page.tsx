"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Server, Globe, Database, Shield } from 'lucide-react';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Define types for our data
interface CloudServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

interface CloudServicesData {
  title: string;
  description: string;
  text5: string;
  text6: string;
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    subtitle: string;
    title: string;
    description: string;
    items: CloudServiceItem[];
  };
  approach: {
    subtitle: string;
    title: string;
    description: string;
    items: ApproachStep[];
  };
  providers: string[];
  stats: Stat[];
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

interface ClientCloudPageProps {
  locale: string;
  data: CloudServicesData;
}

export default function ClientCloudPage({ locale, data }: ClientCloudPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.hero.title || 'Cloud Solutions'}</h1>
            <p className="text-xl mb-8">{data.hero.description || 'Scalable cloud infrastructure and migration services for modern businesses.'}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href={`/${locale}/contact`}>{data.hero.primaryCta || 'Get Started'}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href={`/${locale}/services`}>{data.hero.secondaryCta || 'Learn More'}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{data.description}</p>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">{data.text5}</p>
              <p className="text-lg text-gray-700">{data.text6}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-blue-600 mb-2">{data.services.subtitle}</h3>
            <h2 className="text-3xl font-bold mb-4">{data.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.services.description}</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.services.items.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-blue-600 mb-2">{data.approach.subtitle}</h3>
            <h2 className="text-3xl font-bold mb-4">{data.approach.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.approach.description}</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.approach.items.map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-blue-600/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Cloud Platforms We Support</h2>
            <p className="text-xl text-gray-600">We have expertise across all major cloud platforms to provide you with the best solution for your needs.</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.providers.map((provider, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white rounded-lg shadow-md px-8 py-6 text-center min-w-[200px]"
              >
                <p className="text-xl font-bold text-gray-800">{provider}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">{data.cta.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{data.cta.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={`/${locale}/contact`}>{data.cta.primaryButton}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href={`/${locale}/services`}>{data.cta.secondaryButton}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
