"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, FileWarning, Database, Server } from 'lucide-react';
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

export default function Cybersecurity() {
  // Use the correct namespace for translations
  const t = useTranslations('services');
  const { locale } = useParams();
  
  // Security services
  const securityServices = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t.raw('cybersecurity.services.0.title') || "Security Assessment",
      description: t.raw('cybersecurity.services.0.description') || "Comprehensive evaluation of your security posture to identify vulnerabilities and risks.",
      features: [
        t.raw('cybersecurity.services.0.features.0') || "Vulnerability scanning and penetration testing",
        t.raw('cybersecurity.services.0.features.1') || "Security architecture review",
        t.raw('cybersecurity.services.0.features.2') || "Risk assessment and compliance evaluation"
      ]
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: t.raw('cybersecurity.services.1.title') || "Network Security",
      description: t.raw('cybersecurity.services.1.description') || "Protect your network infrastructure from unauthorized access and cyber threats.",
      features: [
        t.raw('cybersecurity.services.1.features.0') || "Firewall implementation and management",
        t.raw('cybersecurity.services.1.features.1') || "Intrusion detection and prevention",
        t.raw('cybersecurity.services.1.features.2') || "VPN and secure remote access"
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t.raw('cybersecurity.services.2.title') || "Data Protection",
      description: t.raw('cybersecurity.services.2.description') || "Safeguard your critical data with advanced protection measures.",
      features: [
        t.raw('cybersecurity.services.2.features.0') || "Data encryption solutions",
        t.raw('cybersecurity.services.2.features.1') || "Data loss prevention (DLP)",
        t.raw('cybersecurity.services.2.features.2') || "Secure backup and recovery"
      ]
    },
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: t.raw('cybersecurity.services.3.title') || "Security Monitoring",
      description: t.raw('cybersecurity.services.3.description') || "24/7 monitoring and threat detection to identify and respond to security incidents.",
      features: [
        t.raw('cybersecurity.services.3.features.0') || "Security information and event management (SIEM)",
        t.raw('cybersecurity.services.3.features.1') || "Continuous threat monitoring",
        t.raw('cybersecurity.services.3.features.2') || "Incident response and remediation"
      ]
    }
  ];

  // Security statistics
  const securityStats = [
    { number: "43%", label: t.raw('cybersecurity.stats.0.label') || "of cyber attacks target small businesses" },
    { number: "€4.35M", label: t.raw('cybersecurity.stats.1.label') || "average cost of a data breach in Europe" },
    { number: "280", label: t.raw('cybersecurity.stats.2.label') || "days average time to identify a breach" },
    { number: "94%", label: t.raw('cybersecurity.stats.3.label') || "of malware is delivered via email" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                {t.raw('cybersecurity.title') || 'Cybersecurity'}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Security Services
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t.raw('cybersecurity.hero.description') || 'Comprehensive cybersecurity solutions to safeguard your data, systems, and reputation in an increasingly complex threat landscape.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t.raw('cybersecurity.hero.primaryCta') || 'Get Security Assessment'}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t.raw('cybersecurity.hero.secondaryCta') || 'Learn More'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
            {securityStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
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
              {t.raw('cybersecurity.services.subtitle') || 'Our Security Services'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.raw('cybersecurity.services.title') || 'Comprehensive Cybersecurity Solutions'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.raw('cybersecurity.services.description') || 'We provide end-to-end security solutions designed to protect your business from evolving cyber threats and ensure regulatory compliance.'}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {securityServices.map((service, index) => (
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

      {/* Approach Section */}
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
              {t('security.approach.subtitle', { fallback: 'Our Approach' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('security.approach.title', { fallback: 'Proactive Security Framework' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('security.approach.description', { fallback: 'Our comprehensive security framework is designed to protect your business at every level, from infrastructure to end-user training.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.0.title', { fallback: "Identify" }),
                description: t('security.approach.items.0.description', { fallback: "Comprehensive assessment to identify vulnerabilities, assets, and potential threats to your organization." })
              },
              {
                icon: <Lock className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.1.title', { fallback: "Protect" }),
                description: t('security.approach.items.1.description', { fallback: "Implementation of security controls and safeguards to protect critical systems and data." })
              },
              {
                icon: <Eye className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.2.title', { fallback: "Detect" }),
                description: t('security.approach.items.2.description', { fallback: "Continuous monitoring and threat detection to identify security events and incidents." })
              },
              {
                icon: <FileWarning className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.3.title', { fallback: "Respond" }),
                description: t('security.approach.items.3.description', { fallback: "Rapid incident response to contain, analyze, and mitigate security breaches." })
              },
              {
                icon: <Server className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.4.title', { fallback: "Recover" }),
                description: t('security.approach.items.4.description', { fallback: "Business continuity and disaster recovery planning to restore normal operations." })
              },
              {
                icon: <Database className="h-12 w-12 text-primary" />,
                title: t('security.approach.items.5.title', { fallback: "Improve" }),
                description: t('security.approach.items.5.description', { fallback: "Continuous improvement through lessons learned and security posture enhancement." })
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
                  {t('security.cta.title', { fallback: 'Ready to Secure Your Business?' })}
                </h2>
                <p className="text-muted-foreground mb-8 md:text-lg">
                  {t('security.cta.description', { fallback: 'Contact our security experts today to discuss how we can help protect your business from evolving cyber threats and ensure compliance with regulatory requirements.' })}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                      {t('security.cta.primaryButton', { fallback: 'Contact Us Now' })}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/services`}>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                      {t('security.cta.secondaryButton', { fallback: 'Explore All Services' })} <ArrowRight className="ml-2 h-4 w-4" />
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
