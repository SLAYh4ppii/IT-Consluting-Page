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
  
  // Case studies data
  const caseStudies = [
    {
      title: "Regional Hospital Network",
      description: "Implemented 24/7 managed IT services, reducing system downtime by 98% and improving patient care",
      tags: ["Healthcare", "IT Support", "System Monitoring"]
    },
    {
      title: "Law Firm",
      description: "Provided comprehensive managed services, ensuring security compliance and 99.9% uptime for critical systems",
      tags: ["Legal", "Compliance", "Security"]
    },
    {
      title: "E-commerce Platform",
      description: "Delivered managed cloud services, supporting 300% growth while maintaining optimal performance",
      tags: ["E-commerce", "Cloud Management", "Scalability"]
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
                {t('managed.hero.title', { fallback: '24/7 Support and Maintenance for Your Systems' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('managed.hero.description', { fallback: 'Comprehensive managed IT services to keep your business running smoothly, securely, and efficiently at all times.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('managed.hero.primaryCta', { fallback: 'Schedule Consultation' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('managed.hero.secondaryCta', { fallback: 'View Service Plans' })}
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
              {t('managed.benefits.subtitle', { fallback: 'Why Choose Our Managed Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('managed.benefits.title', { fallback: 'Focus on Your Business, Not Your IT' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('managed.benefits.description', { fallback: 'Our managed services provide comprehensive IT support and maintenance, allowing you to focus on your core business activities.' })}
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
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.0.title', { fallback: "24/7 Monitoring & Support" }),
                description: t('managed.benefits.items.0.description', { fallback: "Round-the-clock monitoring and support to ensure your systems are always running optimally." })
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.1.title', { fallback: "Enhanced Security" }),
                description: t('managed.benefits.items.1.description', { fallback: "Proactive security measures to protect your systems and data from threats." })
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.2.title', { fallback: "Predictable Costs" }),
                description: t('managed.benefits.items.2.description', { fallback: "Fixed monthly fees make budgeting easier and eliminate unexpected IT expenses." })
              },
              {
                icon: <Headphones className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.3.title', { fallback: "Expert Support" }),
                description: t('managed.benefits.items.3.description', { fallback: "Access to a team of IT professionals with expertise across various technologies." })
              },
              {
                icon: <Settings className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.4.title', { fallback: "Proactive Maintenance" }),
                description: t('managed.benefits.items.4.description', { fallback: "Regular maintenance and updates to prevent issues before they impact your business." })
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: t('managed.benefits.items.5.title', { fallback: "Scalable Solutions" }),
                description: t('managed.benefits.items.5.description', { fallback: "Flexible services that grow with your business and adapt to your changing needs." })
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

      {/* Service Plans Section */}
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
              {t('managed.plans.subtitle', { fallback: 'Service Plans' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('managed.plans.title', { fallback: 'Choose the Right Plan for Your Business' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('managed.plans.description', { fallback: 'We offer flexible managed service plans designed to meet the unique needs of your business.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t('managed.plans.items.0.title', { fallback: "Essential" }),
                description: t('managed.plans.items.0.description', { fallback: "Basic managed services for small businesses" }),
                price: t('managed.plans.items.0.price', { fallback: "€999" }),
                period: t('managed.plans.items.0.period', { fallback: "per month" }),
                features: [
                  t('managed.plans.items.0.features.0', { fallback: "24/7 system monitoring" }),
                  t('managed.plans.items.0.features.1', { fallback: "Help desk support (business hours)" }),
                  t('managed.plans.items.0.features.2', { fallback: "Security patch management" }),
                  t('managed.plans.items.0.features.3', { fallback: "Backup management" }),
                  t('managed.plans.items.0.features.4', { fallback: "Quarterly IT review" })
                ],
                popular: false
              },
              {
                title: t('managed.plans.items.1.title', { fallback: "Professional" }),
                description: t('managed.plans.items.1.description', { fallback: "Comprehensive managed services for growing businesses" }),
                price: t('managed.plans.items.1.price', { fallback: "€1,999" }),
                period: t('managed.plans.items.1.period', { fallback: "per month" }),
                features: [
                  t('managed.plans.items.1.features.0', { fallback: "24/7 system monitoring" }),
                  t('managed.plans.items.1.features.1', { fallback: "24/7 help desk support" }),
                  t('managed.plans.items.1.features.2', { fallback: "Security patch management" }),
                  t('managed.plans.items.1.features.3', { fallback: "Backup management" }),
                  t('managed.plans.items.1.features.4', { fallback: "Monthly IT review" }),
                  t('managed.plans.items.1.features.5', { fallback: "Proactive maintenance" }),
                  t('managed.plans.items.1.features.6', { fallback: "Security monitoring" })
                ],
                popular: true
              },
              {
                title: t('managed.plans.items.2.title', { fallback: "Enterprise" }),
                description: t('managed.plans.items.2.description', { fallback: "Advanced managed services for larger organizations" }),
                price: t('managed.plans.items.2.price', { fallback: "€3,999" }),
                period: t('managed.plans.items.2.period', { fallback: "per month" }),
                features: [
                  t('managed.plans.items.2.features.0', { fallback: "24/7 system monitoring" }),
                  t('managed.plans.items.2.features.1', { fallback: "24/7 priority help desk support" }),
                  t('managed.plans.items.2.features.2', { fallback: "Security patch management" }),
                  t('managed.plans.items.2.features.3', { fallback: "Advanced backup & recovery" }),
                  t('managed.plans.items.2.features.4', { fallback: "Weekly IT review" }),
                  t('managed.plans.items.2.features.5', { fallback: "Proactive maintenance" }),
                  t('managed.plans.items.2.features.6', { fallback: "Advanced security monitoring" }),
                  t('managed.plans.items.2.features.7', { fallback: "Dedicated account manager" }),
                  t('managed.plans.items.2.features.8', { fallback: "Strategic IT consulting" })
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`relative rounded-xl overflow-hidden border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
                    {t('managed.plans.popularLabel', { fallback: 'Most Popular' })}
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? 'bg-primary/5' : 'bg-background'}`}>
                  <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {t('managed.plans.selectButton', { fallback: 'Select Plan' })}
                  </Button>
                </div>
                <div className="p-6 border-t border-border bg-background">
                  <h4 className="font-medium mb-4">{t('managed.plans.featuresTitle', { fallback: 'What\'s included:' })}</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              {t('managed.plans.customPlanText', { fallback: 'Need a custom plan tailored to your specific requirements?' })}
            </p>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              {t('managed.plans.contactButton', { fallback: 'Contact us for a custom quote' })} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                  {t('managed.cta.title', { fallback: 'Ready to Get Started with Managed Services?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('managed.cta.description', { fallback: 'Contact our team today to discuss how our managed services can help your business operate more efficiently and securely.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.0', { fallback: 'No long-term contracts required' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.1', { fallback: 'Flexible service options to meet your needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('managed.cta.benefits.2', { fallback: 'Seamless transition from your current IT support' })}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('managed.cta.primaryButton', { fallback: 'Contact Us Now' })}
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                    <Link href={`/${locale}/solutions`}>
                      {t('managed.cta.secondaryButton', { fallback: 'Explore Other Solutions' })}
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
                    <h3 className="text-xl font-semibold mb-4">{t('managed.cta.formTitle', { fallback: 'Request Information' })}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('managed.cta.form.name', { fallback: 'Your Name' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('managed.cta.form.email', { fallback: 'Email Address' })}</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('managed.cta.form.company', { fallback: 'Company' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('managed.cta.form.message', { fallback: 'Message' })}</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder={t('managed.cta.form.messagePlaceholder', { fallback: 'Tell us about your managed services needs' })}></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {t('managed.cta.form.submit', { fallback: 'Submit Request' })}
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
