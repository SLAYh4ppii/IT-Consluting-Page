"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight, Server, Database, Shield, Cloud, Code, LineChart } from 'lucide-react';

// Animation component for staggered animations
const AnimatedSection = ({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Solutions() {
  const t = useTranslations('solutions');

  // Solutions data
  const solutions = [
    {
      id: 'cloud',
      icon: Cloud,
      title: t('cloud.title', { fallback: 'Cloud Transformation' }),
      description: t('cloud.description', { fallback: 'Migrate and optimize your infrastructure with our comprehensive cloud solutions.' }),
      features: [
        t('cloud.features.0', { fallback: 'Cloud Migration & Strategy' }),
        t('cloud.features.1', { fallback: 'Multi-Cloud Management' }),
        t('cloud.features.2', { fallback: 'Cloud Cost Optimization' }),
        t('cloud.features.3', { fallback: 'Cloud Security & Compliance' })
      ]
    },
    {
      id: 'data',
      icon: Database,
      title: t('data.title', { fallback: 'Data & Analytics' }),
      description: t('data.description', { fallback: 'Transform your data into actionable insights with our advanced analytics solutions.' }),
      features: [
        t('data.features.0', { fallback: 'Data Warehousing' }),
        t('data.features.1', { fallback: 'Business Intelligence' }),
        t('data.features.2', { fallback: 'Big Data Processing' }),
        t('data.features.3', { fallback: 'Predictive Analytics' })
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: t('security.title', { fallback: 'Cybersecurity' }),
      description: t('security.description', { fallback: 'Protect your business with our comprehensive security solutions and best practices.' }),
      features: [
        t('security.features.0', { fallback: 'Security Assessment' }),
        t('security.features.1', { fallback: 'Threat Detection & Response' }),
        t('security.features.2', { fallback: 'Compliance Management' }),
        t('security.features.3', { fallback: 'Security Training' })
      ]
    },
    {
      id: 'digital',
      icon: Code,
      title: t('digital.title', { fallback: 'Digital Transformation' }),
      description: t('digital.description', { fallback: 'Modernize your business with cutting-edge digital solutions and strategies.' }),
      features: [
        t('digital.features.0', { fallback: 'Process Automation' }),
        t('digital.features.1', { fallback: 'Legacy System Modernization' }),
        t('digital.features.2', { fallback: 'Digital Experience Platforms' }),
        t('digital.features.3', { fallback: 'API Integration' })
      ]
    },
    {
      id: 'infrastructure',
      icon: Server,
      title: t('infrastructure.title', { fallback: 'IT Infrastructure' }),
      description: t('infrastructure.description', { fallback: 'Build and maintain a robust, scalable IT infrastructure for your business.' }),
      features: [
        t('infrastructure.features.0', { fallback: 'Network Design & Implementation' }),
        t('infrastructure.features.1', { fallback: 'Server Management' }),
        t('infrastructure.features.2', { fallback: 'Disaster Recovery' }),
        t('infrastructure.features.3', { fallback: 'IT Support & Maintenance' })
      ]
    },
    {
      id: 'business',
      icon: LineChart,
      title: t('business.title', { fallback: 'Business Intelligence' }),
      description: t('business.description', { fallback: 'Make data-driven decisions with our comprehensive business intelligence solutions.' }),
      features: [
        t('business.features.0', { fallback: 'Data Visualization' }),
        t('business.features.1', { fallback: 'Performance Dashboards' }),
        t('business.features.2', { fallback: 'Market Analysis' }),
        t('business.features.3', { fallback: 'Reporting Automation' })
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
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {t('hero.subtitle', { fallback: 'Enterprise Solutions' })}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title', { fallback: 'Innovative Solutions for Modern Businesses' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('hero.description', { fallback: 'We deliver cutting-edge solutions designed to transform your business operations and drive sustainable growth.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('hero.cta', { fallback: 'Explore Solutions' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('hero.secondaryCta', { fallback: 'Schedule Consultation' })}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {t('sectionSubtitle', { fallback: 'Our Expertise' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('sectionTitle', { fallback: 'Enterprise Solutions' })}</h2>
            <p className="text-lg text-muted-foreground">
              {t('sectionDescription', { fallback: 'Discover our comprehensive range of enterprise solutions designed to address your most complex business challenges.' })}
            </p>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-base text-muted-foreground mb-2">
                {t('text5')}
              </p>
              <p className="text-base text-muted-foreground">
                {t('text6')}
              </p>
            </div>
          </div>

          <Tabs defaultValue="cloud" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12">
              {solutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id} className="flex flex-col items-center gap-2 py-3 px-4">
                  <solution.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{solution.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-0">
                <Card className="border border-border hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-semibold">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-lg">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">{t('keyFeatures', { fallback: 'Key Features' })}</h3>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                          {t('learnMore', { fallback: 'Learn More' })}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="bg-muted/30 rounded-lg p-6 border border-border">
                        <h3 className="text-lg font-medium mb-4">{t('businessBenefits', { fallback: 'Business Benefits' })}</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{t(`${solution.id}.benefits.0`, { fallback: 'Increased operational efficiency' })}</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{t(`${solution.id}.benefits.1`, { fallback: 'Reduced costs and resource optimization' })}</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{t(`${solution.id}.benefits.2`, { fallback: 'Enhanced security and compliance' })}</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{t(`${solution.id}.benefits.3`, { fallback: 'Improved scalability and flexibility' })}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('cta.title', { fallback: 'Ready to Transform Your Business?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('cta.description', { fallback: 'Contact our team of experts today to discuss how our solutions can help you achieve your business goals.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('cta.benefit1', { fallback: 'Customized solutions for your specific needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('cta.benefit2', { fallback: 'Expert consultation and implementation' })}</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('cta.benefit3', { fallback: 'Ongoing support and optimization' })}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('cta.button', { fallback: 'Contact Us Now' })}
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-primary/5">
                  <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-background rounded-xl shadow-lg border border-border p-8 w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-4">{t('cta.formTitle', { fallback: 'Request Information' })}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('cta.form.name', { fallback: 'Your Name' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('cta.form.email', { fallback: 'Email Address' })}</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('cta.form.solution', { fallback: 'Solution of Interest' })}</label>
                        <select className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30">
                          <option value="">{t('cta.form.selectSolution', { fallback: 'Select a solution' })}</option>
                          {solutions.map((solution) => (
                            <option key={solution.id} value={solution.id}>{solution.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('cta.form.message', { fallback: 'Message' })}</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder={t('cta.form.messagePlaceholder', { fallback: 'Tell us about your project requirements' })}></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {t('cta.form.submit', { fallback: 'Submit Request' })}
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
