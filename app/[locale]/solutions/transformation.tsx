"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, LineChart, BarChart3, TrendingUp, Zap, Globe, Lightbulb } from 'lucide-react';
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

export default function DigitalTransformation() {
  const t = useTranslations('solutions');
  const { locale } = useParams();
  
  // Case studies data
  const caseStudies = [
    {
      title: "Global Retail Chain",
      description: "Transformed customer experience with omnichannel digital strategy, increasing online sales by 45%",
      tags: ["Retail", "E-commerce", "Customer Experience"]
    },
    {
      title: "Financial Services Provider",
      description: "Implemented digital transformation roadmap, reducing operational costs by 30% and improving customer satisfaction",
      tags: ["Finance", "Process Optimization", "Customer Satisfaction"]
    },
    {
      title: "Manufacturing Company",
      description: "Digitized production processes and supply chain, resulting in 25% efficiency improvement",
      tags: ["Manufacturing", "Supply Chain", "Efficiency"]
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
                <LineChart className="w-4 h-4 mr-2" />
                {t('digital.title', { fallback: 'Digital Transformation' })}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('digital.hero.title', { fallback: 'Transform Your Business for the Digital Age' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('digital.hero.description', { fallback: 'Comprehensive digital transformation strategies and solutions to help your business thrive in today\'s rapidly evolving digital landscape.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('digital.hero.primaryCta', { fallback: 'Schedule Consultation' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('digital.hero.secondaryCta', { fallback: 'View Case Studies' })}
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
              {t('digital.benefits.subtitle', { fallback: 'Why Choose Digital Transformation' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('digital.benefits.title', { fallback: 'Unlock New Business Potential' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('digital.benefits.description', { fallback: 'Our digital transformation solutions help you reimagine your business processes, customer experiences, and business models in the digital age.' })}
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
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.0.title', { fallback: "Enhanced Customer Experience" }),
                description: t('digital.benefits.items.0.description', { fallback: "Create seamless, personalized customer journeys across all digital touchpoints." })
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.1.title', { fallback: "Increased Operational Efficiency" }),
                description: t('digital.benefits.items.1.description', { fallback: "Streamline processes, reduce costs, and improve productivity through digital solutions." })
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.2.title', { fallback: "Data-Driven Decision Making" }),
                description: t('digital.benefits.items.2.description', { fallback: "Leverage advanced analytics to gain insights and make informed business decisions." })
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.3.title', { fallback: "Accelerated Innovation" }),
                description: t('digital.benefits.items.3.description', { fallback: "Rapidly develop and deploy new products, services, and business models." })
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.4.title', { fallback: "Competitive Advantage" }),
                description: t('digital.benefits.items.4.description', { fallback: "Stay ahead of the competition by embracing digital technologies and trends." })
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: t('digital.benefits.items.5.title', { fallback: "Improved Agility" }),
                description: t('digital.benefits.items.5.description', { fallback: "Adapt quickly to changing market conditions and customer expectations." })
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

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('digital.cta.title', { fallback: 'Ready to Start Your Digital Transformation Journey?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('digital.cta.description', { fallback: 'Contact our team of experts today to discuss how our digital transformation solutions can help you achieve your business goals.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('digital.cta.benefits.0', { fallback: 'Customized transformation strategy tailored to your business needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('digital.cta.benefits.1', { fallback: 'Expert consultation and implementation support' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('digital.cta.benefits.2', { fallback: 'Ongoing optimization and continuous improvement' })}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('digital.cta.primaryButton', { fallback: 'Contact Us Now' })}
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                    <Link href={`/${locale}/solutions`}>
                      {t('digital.cta.secondaryButton', { fallback: 'Explore Other Solutions' })}
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
                    <h3 className="text-xl font-semibold mb-4">{t('digital.cta.formTitle', { fallback: 'Request Information' })}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('digital.cta.form.name', { fallback: 'Your Name' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('digital.cta.form.email', { fallback: 'Email Address' })}</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('digital.cta.form.company', { fallback: 'Company' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('digital.cta.form.message', { fallback: 'Message' })}</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder={t('digital.cta.form.messagePlaceholder', { fallback: 'Tell us about your digital transformation needs' })}></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {t('digital.cta.form.submit', { fallback: 'Submit Request' })}
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
