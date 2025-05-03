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
  
  // Case studies data
  const caseStudies = [
    {
      title: "Financial Services Firm",
      description: "Implemented comprehensive disaster recovery plan, reducing potential downtime from days to hours",
      tags: ["Finance", "Disaster Recovery", "Data Protection"]
    },
    {
      title: "Manufacturing Company",
      description: "Developed business continuity strategy that maintained operations during major facility outage",
      tags: ["Manufacturing", "Business Continuity", "Risk Management"]
    },
    {
      title: "Healthcare Provider",
      description: "Created robust backup and recovery systems ensuring patient data availability during system failures",
      tags: ["Healthcare", "Data Recovery", "Compliance"]
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
                {t('continuity.hero.title', { fallback: 'Disaster Recovery and Business Continuity Planning' })}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
                {t('continuity.hero.description', { fallback: 'Ensure your business can continue operating during and after disasters with comprehensive continuity and recovery planning.' })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('continuity.hero.primaryCta', { fallback: 'Schedule Consultation' })}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('continuity.hero.secondaryCta', { fallback: 'Learn About Our Approach' })}
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
              {t('continuity.benefits.subtitle', { fallback: 'Why Business Continuity Matters' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.benefits.title', { fallback: 'Protect Your Business from the Unexpected' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.benefits.description', { fallback: 'Our business continuity and disaster recovery solutions help you prepare for, respond to, and recover from disruptions that could impact your operations.' })}
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
                icon: <AlertTriangle className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.0.title', { fallback: "Minimize Downtime" }),
                description: t('continuity.benefits.items.0.description', { fallback: "Reduce the impact of disruptions on your business operations and maintain service continuity." })
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.1.title', { fallback: "Protect Your Reputation" }),
                description: t('continuity.benefits.items.1.description', { fallback: "Maintain customer trust by ensuring consistent service delivery even during disruptions." })
              },
              {
                icon: <HardDrive className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.2.title', { fallback: "Safeguard Critical Data" }),
                description: t('continuity.benefits.items.2.description', { fallback: "Ensure your critical business data is protected and recoverable in the event of a disaster." })
              },
              {
                icon: <FileCheck className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.3.title', { fallback: "Ensure Compliance" }),
                description: t('continuity.benefits.items.3.description', { fallback: "Meet regulatory requirements for business continuity and disaster recovery planning." })
              },
              {
                icon: <RefreshCw className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.4.title', { fallback: "Rapid Recovery" }),
                description: t('continuity.benefits.items.4.description', { fallback: "Quickly restore operations after a disruption with well-defined recovery procedures." })
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: t('continuity.benefits.items.5.title', { fallback: "Peace of Mind" }),
                description: t('continuity.benefits.items.5.description', { fallback: "Gain confidence knowing your business is prepared to handle unexpected disruptions." })
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

      {/* Our Approach Section */}
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
              {t('continuity.approach.subtitle', { fallback: 'Our Methodology' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.approach.title', { fallback: 'Comprehensive Business Continuity Approach' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.approach.description', { fallback: 'We follow a proven methodology to develop and implement effective business continuity and disaster recovery plans.' })}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {/* Timeline items */}
              {[
                {
                  title: t('continuity.approach.steps.0.title', { fallback: "Business Impact Analysis" }),
                  description: t('continuity.approach.steps.0.description', { fallback: "We identify critical business functions, assess potential impacts of disruptions, and determine recovery priorities." })
                },
                {
                  title: t('continuity.approach.steps.1.title', { fallback: "Risk Assessment" }),
                  description: t('continuity.approach.steps.1.description', { fallback: "We evaluate potential threats and vulnerabilities that could disrupt your business operations." })
                },
                {
                  title: t('continuity.approach.steps.2.title', { fallback: "Strategy Development" }),
                  description: t('continuity.approach.steps.2.description', { fallback: "We develop recovery strategies and solutions to address identified risks and ensure business continuity." })
                },
                {
                  title: t('continuity.approach.steps.3.title', { fallback: "Plan Development" }),
                  description: t('continuity.approach.steps.3.description', { fallback: "We create comprehensive business continuity and disaster recovery plans with detailed procedures." })
                },
                {
                  title: t('continuity.approach.steps.4.title', { fallback: "Implementation" }),
                  description: t('continuity.approach.steps.4.description', { fallback: "We implement the necessary technologies, processes, and training to support your continuity plans." })
                },
                {
                  title: t('continuity.approach.steps.5.title', { fallback: "Testing & Maintenance" }),
                  description: t('continuity.approach.steps.5.description', { fallback: "We regularly test and update your plans to ensure they remain effective as your business evolves." })
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="relative flex flex-col md:flex-row items-start mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 md:text-right ml-12 md:ml-0 mb-4 md:mb-0">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </>
                    ) : null}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-12 md:ml-0">
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </>
                    ) : null}
                  </div>
                </motion.div>
              ))}
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
              {t('continuity.services.subtitle', { fallback: 'Our Services' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('continuity.services.title', { fallback: 'Comprehensive Business Continuity Solutions' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('continuity.services.description', { fallback: 'We offer a full range of business continuity and disaster recovery services to protect your business.' })}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: t('continuity.services.items.0.title', { fallback: "Business Continuity Planning" }),
                description: t('continuity.services.items.0.description', { fallback: "Develop comprehensive plans to maintain critical business functions during disruptions." }),
                features: [
                  t('continuity.services.items.0.features.0', { fallback: "Business impact analysis" }),
                  t('continuity.services.items.0.features.1', { fallback: "Recovery strategy development" }),
                  t('continuity.services.items.0.features.2', { fallback: "Plan documentation" }),
                  t('continuity.services.items.0.features.3', { fallback: "Staff training and awareness" })
                ]
              },
              {
                title: t('continuity.services.items.1.title', { fallback: "Disaster Recovery Solutions" }),
                description: t('continuity.services.items.1.description', { fallback: "Implement robust disaster recovery solutions to ensure rapid recovery of IT systems and data." }),
                features: [
                  t('continuity.services.items.1.features.0', { fallback: "Backup and recovery systems" }),
                  t('continuity.services.items.1.features.1', { fallback: "Cloud-based disaster recovery" }),
                  t('continuity.services.items.1.features.2', { fallback: "Recovery site setup" }),
                  t('continuity.services.items.1.features.3', { fallback: "Recovery testing" })
                ]
              },
              {
                title: t('continuity.services.items.2.title', { fallback: "Risk Assessment & Management" }),
                description: t('continuity.services.items.2.description', { fallback: "Identify and mitigate risks that could impact your business continuity." }),
                features: [
                  t('continuity.services.items.2.features.0', { fallback: "Threat identification" }),
                  t('continuity.services.items.2.features.1', { fallback: "Vulnerability assessment" }),
                  t('continuity.services.items.2.features.2', { fallback: "Risk mitigation strategies" }),
                  t('continuity.services.items.2.features.3', { fallback: "Ongoing risk monitoring" })
                ]
              },
              {
                title: t('continuity.services.items.3.title', { fallback: "Business Continuity Testing" }),
                description: t('continuity.services.items.3.description', { fallback: "Regularly test and validate your business continuity and disaster recovery plans." }),
                features: [
                  t('continuity.services.items.3.features.0', { fallback: "Tabletop exercises" }),
                  t('continuity.services.items.3.features.1', { fallback: "Functional testing" }),
                  t('continuity.services.items.3.features.2', { fallback: "Full-scale simulations" }),
                  t('continuity.services.items.3.features.3', { fallback: "Test result analysis" })
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
                      {t('continuity.services.learnMore', { fallback: 'Learn more' })} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('continuity.cta.title', { fallback: 'Ready to Protect Your Business?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('continuity.cta.description', { fallback: 'Contact our team of experts today to discuss how our business continuity solutions can help protect your business from disruptions.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.0', { fallback: 'Customized continuity plans tailored to your business needs' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.1', { fallback: 'Expert guidance from experienced continuity professionals' })}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <p className="text-sm">{t('continuity.cta.benefits.2', { fallback: 'Ongoing support and plan maintenance' })}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('continuity.cta.primaryButton', { fallback: 'Contact Us Now' })}
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                    <Link href={`/${locale}/solutions`}>
                      {t('continuity.cta.secondaryButton', { fallback: 'Explore Other Solutions' })}
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
                    <h3 className="text-xl font-semibold mb-4">{t('continuity.cta.formTitle', { fallback: 'Request Information' })}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('continuity.cta.form.name', { fallback: 'Your Name' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('continuity.cta.form.email', { fallback: 'Email Address' })}</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('continuity.cta.form.company', { fallback: 'Company' })}</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('continuity.cta.form.message', { fallback: 'Message' })}</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder={t('continuity.cta.form.messagePlaceholder', { fallback: 'Tell us about your business continuity needs' })}></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {t('continuity.cta.form.submit', { fallback: 'Submit Request' })}
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
