"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Monitor, Server, Network, Database, Shield, Cloud } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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

export default function ITInfrastructure() {
  const t = useTranslations('solutions');
  const { locale } = useParams();
  
  // Infrastructure services
  const infrastructureServices = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: t('infrastructure.services.0.title', { fallback: "Server Infrastructure" }),
      description: t('infrastructure.services.0.description', { fallback: "Design, implementation, and management of on-premises and cloud server environments." }),
      features: [
        t('infrastructure.services.0.features.0', { fallback: "Server virtualization and consolidation" }),
        t('infrastructure.services.0.features.1', { fallback: "High-availability clustering" }),
        t('infrastructure.services.0.features.2', { fallback: "Server monitoring and maintenance" })
      ]
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: t('infrastructure.services.1.title', { fallback: "Network Solutions" }),
      description: t('infrastructure.services.1.description', { fallback: "Comprehensive networking services from design to implementation and support." }),
      features: [
        t('infrastructure.services.1.features.0', { fallback: "LAN/WAN design and implementation" }),
        t('infrastructure.services.1.features.1', { fallback: "Network security and optimization" }),
        t('infrastructure.services.1.features.2', { fallback: "Wireless network solutions" })
      ]
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: t('infrastructure.services.2.title', { fallback: "Cloud Infrastructure" }),
      description: t('infrastructure.services.2.description', { fallback: "Secure and scalable cloud infrastructure solutions for your business." }),
      features: [
        t('infrastructure.services.2.features.0', { fallback: "Public, private, and hybrid cloud architectures" }),
        t('infrastructure.services.2.features.1', { fallback: "Cloud migration and optimization" }),
        t('infrastructure.services.2.features.2', { fallback: "Multi-cloud management" })
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t('infrastructure.services.3.title', { fallback: "Data Storage & Backup" }),
      description: t('infrastructure.services.3.description', { fallback: "Reliable data storage, backup, and recovery solutions." }),
      features: [
        t('infrastructure.services.3.features.0', { fallback: "SAN/NAS storage solutions" }),
        t('infrastructure.services.3.features.1', { fallback: "Automated backup and recovery" }),
        t('infrastructure.services.3.features.2', { fallback: "Data archiving and compliance" })
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Monitor className="w-4 h-4 mr-2" />
                {t('infrastructure.title', { fallback: 'IT Infrastructure' })}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('infrastructure.hero.title', { fallback: 'Robust IT Infrastructure for Modern Businesses' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('infrastructure.hero.description', { fallback: 'Build a reliable, secure, and scalable IT foundation that supports your business goals and drives operational excellence.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('infrastructure.hero.primaryCta', { fallback: 'Request Assessment' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('infrastructure.hero.secondaryCta', { fallback: 'Explore Services' })}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {t('infrastructure.services.subtitle', { fallback: 'Comprehensive IT Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('infrastructure.services.title', { fallback: 'Our Infrastructure Solutions' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('infrastructure.services.description', { fallback: 'We provide end-to-end IT infrastructure solutions designed to optimize performance, enhance security, and support your business growth.' })}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {infrastructureServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {t('infrastructure.benefits.subtitle', { fallback: 'Why Choose Us' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('infrastructure.benefits.title', { fallback: 'The Benefits of Our Infrastructure Solutions' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('infrastructure.benefits.description', { fallback: 'Our IT infrastructure solutions are designed to deliver tangible business benefits and provide a solid foundation for your digital initiatives.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t('infrastructure.benefits.items.0.title', { fallback: "Improved Reliability" }),
                description: t('infrastructure.benefits.items.0.description', { fallback: "Minimize downtime with redundant systems and proactive monitoring." })
              },
              {
                title: t('infrastructure.benefits.items.1.title', { fallback: "Enhanced Security" }),
                description: t('infrastructure.benefits.items.1.description', { fallback: "Protect your critical data and systems with multi-layered security solutions." })
              },
              {
                title: t('infrastructure.benefits.items.2.title', { fallback: "Scalable Architecture" }),
                description: t('infrastructure.benefits.items.2.description', { fallback: "Easily adapt your infrastructure to changing business needs and growth." })
              },
              {
                title: t('infrastructure.benefits.items.3.title', { fallback: "Cost Optimization" }),
                description: t('infrastructure.benefits.items.3.description', { fallback: "Reduce operational costs through efficient resource utilization and management." })
              },
              {
                title: t('infrastructure.benefits.items.4.title', { fallback: "Performance Improvement" }),
                description: t('infrastructure.benefits.items.4.description', { fallback: "Enhance system performance for better user experience and productivity." })
              },
              {
                title: t('infrastructure.benefits.items.5.title', { fallback: "Expert Support" }),
                description: t('infrastructure.benefits.items.5.description', { fallback: "Access to certified IT professionals for ongoing support and optimization." })
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('infrastructure.cta.title', { fallback: 'Ready to Build a Robust IT Foundation?' })}
                </h2>
                <p className="text-muted-foreground mb-8 md:text-lg">
                  {t('infrastructure.cta.description', { fallback: 'Contact our team of infrastructure experts today to discuss your IT needs and discover how we can help you build a reliable, secure, and scalable IT foundation.' })}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                      {t('infrastructure.cta.primaryButton', { fallback: 'Contact Us Now' })}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/solutions`}>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                      {t('infrastructure.cta.secondaryButton', { fallback: 'Explore All Solutions' })} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
