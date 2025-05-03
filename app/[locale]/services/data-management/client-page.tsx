"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Database, Server, BarChart, GitMerge, FileText, Shield } from 'lucide-react';
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
interface DataServiceItem {
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

interface DataManagementData {
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
    items: DataServiceItem[];
  };
  approach: {
    subtitle: string;
    title: string;
    description: string;
    items: ApproachStep[];
  };
  technologies: {
    subtitle: string;
    title: string;
    description: string;
    databases: string[];
    integration: string[];
    analytics: string[];
    bigdata: string[];
    ai: string[];
  };
  stats: Stat[];
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

interface ClientDataManagementPageProps {
  locale: string;
  data: DataManagementData;
}

export default function ClientDataManagementPage({ locale, data }: ClientDataManagementPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.hero.title}</h1>
            <p className="text-xl mb-8">{data.hero.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <Link href={`/${locale}/contact`}>{data.hero.primaryCta}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href={`/${locale}/solutions`}>{data.hero.secondaryCta}</Link>
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
            <h3 className="text-lg font-medium text-purple-600 mb-2">{data.services.subtitle}</h3>
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
            <h3 className="text-lg font-medium text-purple-600 mb-2">{data.approach.subtitle}</h3>
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
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-purple-600/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-purple-600 mb-2">{data.technologies.subtitle}</h3>
            <h2 className="text-3xl font-bold mb-4">{data.technologies.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.technologies.description}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div 
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="font-bold text-lg mb-4">Databases</h4>
              <ul className="space-y-2">
                {data.technologies.databases.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="font-bold text-lg mb-4">Integration</h4>
              <ul className="space-y-2">
                {data.technologies.integration.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="font-bold text-lg mb-4">Analytics</h4>
              <ul className="space-y-2">
                {data.technologies.analytics.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="font-bold text-lg mb-4">Big Data</h4>
              <ul className="space-y-2">
                {data.technologies.bigdata.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="font-bold text-lg mb-4">AI & ML</h4>
              <ul className="space-y-2">
                {data.technologies.ai.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-purple-500 mr-2" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeIn}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">{data.cta.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{data.cta.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href={`/${locale}/contact`}>{data.cta.primaryButton}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link href={`/${locale}/services`}>{data.cta.secondaryButton}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
