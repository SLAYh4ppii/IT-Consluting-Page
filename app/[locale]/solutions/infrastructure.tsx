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
  
  // Case studies data
  const caseStudies = [
    {
      title: "Healthcare Provider",
      description: "Modernized IT infrastructure, improving system reliability by 99.9% and reducing operational costs by 35%",
      tags: ["Healthcare", "Network Infrastructure", "Cloud Migration"]
    },
    {
      title: "Financial Institution",
      description: "Implemented secure, scalable infrastructure supporting 10,000+ users with enhanced security and compliance",
      tags: ["Finance", "Security", "Scalability"]
    },
    {
      title: "Retail Chain",
      description: "Deployed hybrid cloud infrastructure, enabling rapid expansion and improving customer experience",
      tags: ["Retail", "Hybrid Cloud", "Scalability"]
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
                {t('infrastructure.hero.title', { fallback: 'Reliable and Scalable IT Infrastructure Solutions' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('infrastructure.hero.description', { fallback: 'Build and maintain a robust, secure, and scalable IT infrastructure that supports your business goals and drives growth.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('infrastructure.hero.primaryCta', { fallback: 'Schedule Consultation' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('infrastructure.hero.secondaryCta', { fallback: 'View Case Studies' })}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
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
              {t('infrastructure.benefits.subtitle', { fallback: 'Why Choose Our IT Infrastructure Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('infrastructure.benefits.title', { fallback: 'Build a Strong Foundation for Your Business' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('infrastructure.benefits.description', { fallback: 'Our IT infrastructure solutions provide the reliable foundation your business needs to operate efficiently and securely in today\'s digital environment.' })}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Server className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.0.title', { fallback: "Reliable Systems" }),
                description: t('infrastructure.benefits.items.0.description', { fallback: "Minimize downtime with robust, redundant systems designed for high availability." })
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.1.title', { fallback: "Enhanced Security" }),
                description: t('infrastructure.benefits.items.1.description', { fallback: "Protect your business with comprehensive security measures and best practices." })
              },
              {
                icon: <Cloud className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.2.title', { fallback: "Scalable Architecture" }),
                description: t('infrastructure.benefits.items.2.description', { fallback: "Easily scale your infrastructure to accommodate growth and changing business needs." })
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.3.title', { fallback: "Optimized Performance" }),
                description: t('infrastructure.benefits.items.3.description', { fallback: "Improve system performance and user experience with optimized infrastructure." })
              },
              {
                icon: <Network className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.4.title', { fallback: "Seamless Integration" }),
                description: t('infrastructure.benefits.items.4.description', { fallback: "Integrate your systems and applications for improved efficiency and data flow." })
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: t('infrastructure.benefits.items.5.title', { fallback: "Cost Efficiency" }),
                description: t('infrastructure.benefits.items.5.description', { fallback: "Reduce operational costs through optimized resource allocation and management." })
              }
            ].map((benefit, index) => (
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

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-border">
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
              {t('infrastructure.services.subtitle', { fallback: 'Our Infrastructure Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('infrastructure.services.title', { fallback: 'Comprehensive IT Infrastructure Solutions' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('infrastructure.services.description', { fallback: 'We offer a full range of IT infrastructure services to meet your business needs, from network design to cloud migration.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('infrastructure.services.items.0.title', { fallback: "Network Design & Implementation" }),
                description: t('infrastructure.services.items.0.description', { fallback: "Design and implement secure, high-performance networks tailored to your business requirements." }),
                features: [
                  t('infrastructure.services.items.0.features.0', { fallback: "LAN/WAN architecture" }),
                  t('infrastructure.services.items.0.features.1', { fallback: "Wireless network design" }),
                  t('infrastructure.services.items.0.features.2', { fallback: "Network security" }),
                  t('infrastructure.services.items.0.features.3', { fallback: "Performance optimization" })
                ]
              },
              {
                title: t('infrastructure.services.items.1.title', { fallback: "Server Infrastructure" }),
                description: t('infrastructure.services.items.1.description', { fallback: "Build and maintain reliable server infrastructure to support your business applications and services." }),
                features: [
                  t('infrastructure.services.items.1.features.0', { fallback: "Server virtualization" }),
                  t('infrastructure.services.items.1.features.1', { fallback: "High-availability solutions" }),
                  t('infrastructure.services.items.1.features.2', { fallback: "Server consolidation" }),
                  t('infrastructure.services.items.1.features.3', { fallback: "Performance monitoring" })
                ]
              },
              {
                title: t('infrastructure.services.items.2.title', { fallback: "Cloud Infrastructure" }),
                description: t('infrastructure.services.items.2.description', { fallback: "Leverage the power of cloud computing with our comprehensive cloud infrastructure services." }),
                features: [
                  t('infrastructure.services.items.2.features.0', { fallback: "Cloud migration" }),
                  t('infrastructure.services.items.2.features.1', { fallback: "Hybrid cloud solutions" }),
                  t('infrastructure.services.items.2.features.2', { fallback: "Cloud security" }),
                  t('infrastructure.services.items.2.features.3', { fallback: "Cost optimization" })
                ]
              },
              {
                title: t('infrastructure.services.items.3.title', { fallback: "Infrastructure Security" }),
                description: t('infrastructure.services.items.3.description', { fallback: "Protect your IT infrastructure with comprehensive security measures and best practices." }),
                features: [
                  t('infrastructure.services.items.3.features.0', { fallback: "Security assessments" }),
                  t('infrastructure.services.items.3.features.1', { fallback: "Firewall implementation" }),
                  t('infrastructure.services.items.3.features.2', { fallback: "Intrusion detection" }),
                  t('infrastructure.services.items.3.features.3', { fallback: "Security monitoring" })
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Card className="h-full border-border hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {t('infrastructure.services.learnMore', { fallback: 'Learn more' })} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('infrastructure.cta.title', { fallback: 'Ready to Build a Robust IT Infrastructure?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('infrastructure.cta.description', { fallback: 'Contact our team of experts today to discuss how our IT infrastructure solutions can help your business thrive.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('infrastructure.cta.benefits.0', { fallback: 'Customized infrastructure solutions tailored to your business needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('infrastructure.cta.benefits.1', { fallback: 'Expert consultation and implementation support' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('infrastructure.cta.benefits.2', { fallback: 'Ongoing maintenance and optimization' })}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('infrastructure.cta.primaryButton', { fallback: 'Contact Us Now' })}
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                    <Link href={`/${locale}/solutions`}>
                      {t('infrastructure.cta.secondaryButton', { fallback: 'Explore Other Solutions' })}
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-primary/5">
                  <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-background rounded-xl shadow-lg border border-border p-8 w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-4">{t('infrastructure.cta.formTitle', { fallback: 'Request Information' })}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('infrastructure.cta.form.name', { fallback: 'Your Name' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('infrastructure.cta.form.email', { fallback: 'Email Address' })}</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('infrastructure.cta.form.company', { fallback: 'Company' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('infrastructure.cta.form.message', { fallback: 'Message' })}</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder={t('infrastructure.cta.form.messagePlaceholder', { fallback: 'Tell us about your IT infrastructure needs' })}></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {t('infrastructure.cta.form.submit', { fallback: 'Submit Request' })}
                      </Button>
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
