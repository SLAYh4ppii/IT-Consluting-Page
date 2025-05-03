"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, User, Clock, Headphones, Settings, BarChart, Shield } from 'lucide-react';
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

export default function ManagedServices() {
  const t = useTranslations('solutions');
  const { locale } = useParams();
  
  // Service levels
  const serviceLevels = [
    {
      title: t('managed.levels.0.title', { fallback: "Essential Support" }),
      description: t('managed.levels.0.description', { fallback: "Basic monitoring and support for small businesses." }),
      features: [
        t('managed.levels.0.features.0', { fallback: "8/5 helpdesk support" }),
        t('managed.levels.0.features.1', { fallback: "Basic system monitoring" }),
        t('managed.levels.0.features.2', { fallback: "Monthly health reports" }),
        t('managed.levels.0.features.3', { fallback: "Remote troubleshooting" })
      ],
      recommended: false
    },
    {
      title: t('managed.levels.1.title', { fallback: "Business Plus" }),
      description: t('managed.levels.1.description', { fallback: "Comprehensive support for growing businesses." }),
      features: [
        t('managed.levels.1.features.0', { fallback: "12/7 helpdesk support" }),
        t('managed.levels.1.features.1', { fallback: "Advanced monitoring & alerts" }),
        t('managed.levels.1.features.2', { fallback: "Weekly health reports" }),
        t('managed.levels.1.features.3', { fallback: "Proactive maintenance" }),
        t('managed.levels.1.features.4', { fallback: "Quarterly strategy reviews" })
      ],
      recommended: true
    },
    {
      title: t('managed.levels.2.title', { fallback: "Enterprise" }),
      description: t('managed.levels.2.description', { fallback: "Full-scale IT management for enterprises." }),
      features: [
        t('managed.levels.2.features.0', { fallback: "24/7 helpdesk support" }),
        t('managed.levels.2.features.1', { fallback: "Comprehensive monitoring" }),
        t('managed.levels.2.features.2', { fallback: "Daily health reports" }),
        t('managed.levels.2.features.3', { fallback: "Proactive maintenance" }),
        t('managed.levels.2.features.4', { fallback: "Monthly strategy reviews" }),
        t('managed.levels.2.features.5', { fallback: "Dedicated account manager" }),
        t('managed.levels.2.features.6', { fallback: "On-site support" })
      ],
      recommended: false
    }
  ];

  // Managed service benefits
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: t('managed.benefits.0.title', { fallback: "24/7 Support & Monitoring" }),
      description: t('managed.benefits.0.description', { fallback: "Round-the-clock monitoring and support to ensure your systems are always running optimally." })
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t('managed.benefits.1.title', { fallback: "Enhanced Security" }),
      description: t('managed.benefits.1.description', { fallback: "Proactive security management to protect your business from evolving threats." })
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: t('managed.benefits.2.title', { fallback: "Predictable Costs" }),
      description: t('managed.benefits.2.description', { fallback: "Fixed monthly fees make budgeting easier and eliminate unexpected IT expenses." })
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: t('managed.benefits.3.title', { fallback: "Proactive Maintenance" }),
      description: t('managed.benefits.3.description', { fallback: "Regular updates and maintenance to prevent issues before they impact your business." })
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
                <User className="w-4 h-4 mr-2" />
                {t('managed.title', { fallback: 'Managed Services' })}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('managed.hero.title', { fallback: 'Focus on Your Business, Leave IT to Us' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('managed.hero.description', { fallback: 'Comprehensive managed IT services that provide 24/7 support, monitoring, and maintenance for your entire technology infrastructure.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('managed.hero.primaryCta', { fallback: 'Get Started' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('managed.hero.secondaryCta', { fallback: 'View Service Plans' })}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              {t('managed.benefits.subtitle', { fallback: 'Why Choose Our Managed Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('managed.benefits.title', { fallback: 'The Benefits of Managed IT Services' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('managed.benefits.description', { fallback: 'Our managed services provide comprehensive IT support, allowing you to focus on your core business while we handle your technology needs.' })}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Plans Section */}
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
              {t('managed.plans.subtitle', { fallback: 'Flexible Service Plans' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('managed.plans.title', { fallback: 'Choose the Right Plan for Your Business' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('managed.plans.description', { fallback: 'We offer flexible service plans designed to meet the unique needs of your business, from small startups to large enterprises.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceLevels.map((level, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`bg-background border rounded-xl overflow-hidden transition-all duration-300 ${level.recommended ? 'border-primary shadow-lg' : 'border-border hover:border-primary/20 hover:shadow-md'}`}
              >
                {level.recommended && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    {t('managed.plans.recommended', { fallback: 'Most Popular' })}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
                  <p className="text-muted-foreground mb-6">{level.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${level.recommended ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                    {t('managed.plans.getStarted', { fallback: 'Get Started' })}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('managed.cta.title', { fallback: 'Ready to Transform Your IT Management?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('managed.cta.description', { fallback: 'Contact our team today to discuss how our managed services can help you reduce costs, improve efficiency, and focus on your core business.' })}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.0', { fallback: 'No long-term contracts required' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.1', { fallback: 'Transparent pricing with no hidden fees' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.2', { fallback: 'Dedicated account manager for personalized service' })}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                      {t('managed.cta.primaryButton', { fallback: 'Contact Us Now' })}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/solutions`}>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                      {t('managed.cta.secondaryButton', { fallback: 'Explore All Solutions' })} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-muted/30 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Headphones className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t('managed.cta.support.title', { fallback: 'Need Immediate Support?' })}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('managed.cta.support.description', { fallback: 'Our support team is available 24/7' })}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-background rounded-lg border border-border">
                    <div className="mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t('managed.cta.support.hours', { fallback: 'Support Hours' })}</p>
                      <p className="text-sm text-muted-foreground">{t('managed.cta.support.hoursValue', { fallback: '24 hours / 7 days a week' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-background rounded-lg border border-border">
                    <div className="mr-4">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t('managed.cta.support.phone', { fallback: 'Support Hotline' })}</p>
                      <p className="text-sm text-muted-foreground">+43 1 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-background rounded-lg border border-border">
                    <div className="mr-4">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t('managed.cta.support.portal', { fallback: 'Client Portal' })}</p>
                      <p className="text-sm text-muted-foreground">{t('managed.cta.support.portalDescription', { fallback: 'Log in for priority support' })}</p>
                    </div>
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
