"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Clock, Shield, RefreshCw, HardDrive, FileCheck, AlertTriangle } from 'lucide-react';
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

export default function BusinessContinuity() {
  const t = useTranslations('solutions');
  const { locale } = useParams();
  
  // Continuity services
  const continuityServices = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: t('continuity.services.0.title', { fallback: "Risk Assessment" }),
      description: t('continuity.services.0.description', { fallback: "Comprehensive analysis of potential threats and vulnerabilities to your business operations." })
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: t('continuity.services.1.title', { fallback: "Business Continuity Planning" }),
      description: t('continuity.services.1.description', { fallback: "Development of detailed plans to maintain essential functions during and after a disaster." })
    },
    {
      icon: <HardDrive className="h-10 w-10 text-primary" />,
      title: t('continuity.services.2.title', { fallback: "Backup & Recovery Solutions" }),
      description: t('continuity.services.2.description', { fallback: "Robust data backup and recovery systems to protect your critical information." })
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: t('continuity.services.3.title', { fallback: "Disaster Recovery" }),
      description: t('continuity.services.3.description', { fallback: "Comprehensive strategies to quickly restore IT systems and data after a disruption." })
    }
  ];

  // Implementation process
  const implementationSteps = [
    {
      number: "01",
      title: t('continuity.process.0.title', { fallback: "Assessment" }),
      description: t('continuity.process.0.description', { fallback: "Comprehensive analysis of your business processes, critical systems, and potential risks." })
    },
    {
      number: "02",
      title: t('continuity.process.1.title', { fallback: "Strategy Development" }),
      description: t('continuity.process.1.description', { fallback: "Creation of tailored business continuity and disaster recovery strategies." })
    },
    {
      number: "03",
      title: t('continuity.process.2.title', { fallback: "Implementation" }),
      description: t('continuity.process.2.description', { fallback: "Deployment of necessary systems, tools, and procedures to support your continuity plan." })
    },
    {
      number: "04",
      title: t('continuity.process.3.title', { fallback: "Testing & Training" }),
      description: t('continuity.process.3.description', { fallback: "Regular testing of recovery procedures and staff training to ensure readiness." })
    },
    {
      number: "05",
      title: t('continuity.process.4.title', { fallback: "Maintenance & Updates" }),
      description: t('continuity.process.4.description', { fallback: "Ongoing review and updates to keep your continuity plan aligned with business changes." })
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
                <Clock className="w-4 h-4 mr-2" />
                {t('continuity.title', { fallback: 'Business Continuity' })}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('continuity.hero.title', { fallback: 'Ensure Your Business Operates Without Interruption' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('continuity.hero.description', { fallback: 'Comprehensive business continuity and disaster recovery solutions to protect your operations, data, and reputation from unexpected disruptions.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('continuity.hero.primaryCta', { fallback: 'Get Risk Assessment' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('continuity.hero.secondaryCta', { fallback: 'Learn More' })}
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
              {t('continuity.servicesSection.subtitle', { fallback: 'Our Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.servicesSection.title', { fallback: 'Comprehensive Business Continuity Solutions' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.servicesSection.description', { fallback: 'We provide end-to-end business continuity and disaster recovery solutions to ensure your business can withstand and quickly recover from any disruption.' })}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {continuityServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
              {t('continuity.benefits.subtitle', { fallback: 'Why It Matters' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.benefits.title', { fallback: 'The Benefits of Business Continuity Planning' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.benefits.description', { fallback: 'Investing in business continuity planning provides numerous benefits that extend beyond just disaster recovery.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t('continuity.benefits.items.0.title', { fallback: "Minimize Downtime" }),
                description: t('continuity.benefits.items.0.description', { fallback: "Reduce the impact of disruptions with rapid recovery procedures." })
              },
              {
                title: t('continuity.benefits.items.1.title', { fallback: "Protect Revenue" }),
                description: t('continuity.benefits.items.1.description', { fallback: "Maintain business operations and revenue streams during critical events." })
              },
              {
                title: t('continuity.benefits.items.2.title', { fallback: "Safeguard Reputation" }),
                description: t('continuity.benefits.items.2.description', { fallback: "Demonstrate reliability to customers and partners even in challenging times." })
              },
              {
                title: t('continuity.benefits.items.3.title', { fallback: "Ensure Compliance" }),
                description: t('continuity.benefits.items.3.description', { fallback: "Meet regulatory requirements for data protection and business continuity." })
              },
              {
                title: t('continuity.benefits.items.4.title', { fallback: "Competitive Advantage" }),
                description: t('continuity.benefits.items.4.description', { fallback: "Gain an edge over competitors who may not be as well prepared." })
              },
              {
                title: t('continuity.benefits.items.5.title', { fallback: "Employee Confidence" }),
                description: t('continuity.benefits.items.5.description', { fallback: "Build staff confidence with clear procedures for emergency situations." })
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

      {/* Implementation Process */}
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
              {t('continuity.processSection.subtitle', { fallback: 'Our Approach' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.processSection.title', { fallback: 'Implementation Process' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.processSection.description', { fallback: 'Our structured approach ensures a comprehensive and effective business continuity solution tailored to your specific needs.' })}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {implementationSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col md:flex-row items-start mb-8 md:mb-12 relative"
              >
                {index < implementationSteps.length - 1 && (
                  <div className="absolute left-[2.25rem] top-16 bottom-0 w-px bg-border hidden md:block"></div>
                )}
                <div className="flex-shrink-0 bg-primary/10 text-primary font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  {step.number}
                </div>
                <div className="md:pt-3">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-2xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('continuity.cta.title', { fallback: 'Ready to Protect Your Business?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('continuity.cta.description', { fallback: 'Contact our team today to discuss how our business continuity solutions can help protect your organization from unexpected disruptions.' })}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.0', { fallback: 'Free initial consultation and risk assessment' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.1', { fallback: 'Customized solutions tailored to your business needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.2', { fallback: 'Ongoing support and regular plan updates' })}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                      {t('continuity.cta.primaryButton', { fallback: 'Contact Us Now' })}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/solutions`}>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                      {t('continuity.cta.secondaryButton', { fallback: 'Explore All Solutions' })} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-muted/30 p-8 md:p-12 flex flex-col justify-center">
                <div className="bg-background border border-border rounded-xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">
                      {t('continuity.cta.stats.title', { fallback: 'Did You Know?' })}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">40%</span>
                      <span className="text-sm text-muted-foreground">
                        {t('continuity.cta.stats.item1', { fallback: 'of businesses never reopen after a major disaster' })}
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">€120K+</span>
                      <span className="text-sm text-muted-foreground">
                        {t('continuity.cta.stats.item2', { fallback: 'average cost of downtime per hour for mid-sized businesses' })}
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">93%</span>
                      <span className="text-sm text-muted-foreground">
                        {t('continuity.cta.stats.item3', { fallback: 'of companies with a recovery plan survive major incidents' })}
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">
                      {t('continuity.cta.compliance.title', { fallback: 'Compliance Ready' })}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('continuity.cta.compliance.description', { fallback: 'Our solutions help you meet regulatory requirements for:' })}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">GDPR</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ISO 27001</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ISO 22301</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">PCI DSS</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">HIPAA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
