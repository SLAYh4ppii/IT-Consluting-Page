import * as CardComponents from '../../../components/ui/card';
import AnimatedSection from './AnimatedSection';
import { Cloud, Code, LineChart, Database, Shield, Brain } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';

const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardComponents;

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export default async function Services({ params }: { params: { locale: string } }) {
  // Use getTranslations for server components with robust error handling
  const t = await getTranslations('services');
  
  // Log the locale and available translation keys for debugging
  console.log(`Services page loaded with locale: ${params.locale}`);
  
  const services: Service[] = [
    {
      icon: Cloud,
      title: t.raw('cloud.title') || "Cloud Solutions",
      description: t.raw('cloud.description') || "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        t.raw('cloud.features.0') || "Cloud Infrastructure",
        t.raw('cloud.features.1') || "Cloud Migration",
        t.raw('cloud.features.2') || "Cloud Storage",
      ],
    },
    {
      icon: Code,
      title: t.raw('development.title') || "Custom Software Development",
      description: t.raw('development.description') || "Modern web, mobile, and API solutions tailored to your business needs.",
      features: [
        t.raw('development.features.0') || "Web Applications",
        t.raw('development.features.1') || "Mobile Applications",
        t.raw('development.features.2') || "API Development",
      ],
    },
    {
      icon: LineChart,
      title: t.raw('strategy.title') || "IT Strategy & Advisory",
      description: t.raw('strategy.description') || "Align your technology with business goals. From digital transformation to roadmap planning.",
      features: [
        t.raw('strategy.features.0') || "Digital Transformation",
        t.raw('strategy.features.1') || "IT Roadmap Planning",
        t.raw('strategy.features.2') || "Technology Assessment",
      ],
    },
    {
      icon: Database,
      title: t.raw('datamanagement.title') || "Data Management",
      description: t.raw('datamanagement.description') || "Comprehensive data management solutions to organize, protect, and leverage your business data effectively.",
      features: [
        t.raw('datamanagement.features.0') || "Data Governance",
        t.raw('datamanagement.features.1') || "Data Integration",
        t.raw('datamanagement.features.2') || "Data Analytics",
      ],
    },
    {
      icon: Shield,
      title: t.raw('cybersecurity.title') || "Cybersecurity",
      description: t.raw('cybersecurity.description') || "Protect your business with comprehensive security solutions and best practices.",
      features: [
        t.raw('cybersecurity.features.0') || "Security Audits",
        t.raw('cybersecurity.features.1') || "Threat Protection",
        t.raw('cybersecurity.features.2') || "Compliance Solutions",
      ],
    },
    {
      icon: Brain,
      title: t.raw('ai.title') || "AI & Machine Learning",
      description: t.raw('ai.description') || "Leverage the power of AI to automate processes and gain competitive advantage.",
      features: [
        t.raw('ai.features.0') || "AI Integration",
        t.raw('ai.features.1') || "Machine Learning Models",
        t.raw('ai.features.2') || "Predictive Analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 border-b border-border overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-muted/30 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-12 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
          <div className="hidden md:block absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {t.raw('hero.subtitle') || 'Professional IT Services'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10">{t.raw('hero.title') || 'Our Services'}</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10 transform -rotate-1"></span>
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                {t.raw('hero.description') || 'Discover our comprehensive range of IT services designed to empower your business.'}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                  {t('hero.cta')}
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                  {t('hero.secondaryCta', { fallback: 'Learn More' })}
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">ISO 27001 Certified</p>
                    <p className="text-xs text-muted-foreground">Enterprise Security</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">500+ Enterprise Clients</p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="text-xs ml-1 text-muted-foreground">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              
              {/* Premium dashboard mockup */}
              <div className="relative bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                <div className="p-1 bg-muted/30">
                  <div className="flex space-x-1.5 px-2 py-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-sm font-medium">Enterprise Dashboard</h3>
                      <p className="text-xs text-muted-foreground">IT Infrastructure Overview</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">Server Uptime</div>
                      <div className="text-xl font-bold">99.98%</div>
                      <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[99.98%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="text-xs text-muted-foreground mb-1">Security Status</div>
                      <div className="text-xl font-bold text-green-500">Protected</div>
                      <div className="mt-2 flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-medium">System Performance</div>
                      <div className="text-xs text-muted-foreground">Last 24 hours</div>
                    </div>
                    <div className="h-24 flex items-end justify-between px-2">
                      {[35, 45, 30, 65, 40, 80, 60, 75, 65, 85, 90, 75].map((height, i) => (
                        <div key={i} className="w-[5%] bg-primary/80 rounded-t" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>23:59</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted/30 rounded p-2">
                      <div className="text-xs text-muted-foreground">CPU</div>
                      <div className="text-sm font-medium">24%</div>
                    </div>
                    <div className="bg-muted/30 rounded p-2">
                      <div className="text-xs text-muted-foreground">Memory</div>
                      <div className="text-sm font-medium">42%</div>
                    </div>
                    <div className="bg-muted/30 rounded p-2">
                      <div className="text-xs text-muted-foreground">Storage</div>
                      <div className="text-sm font-medium">68%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-xl font-semibold mb-3">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">We partner with leading enterprises to deliver exceptional IT solutions and drive digital transformation.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Microsoft */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center group">
              <svg className="h-8 w-auto" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M0 0h10.931v10.931H0zM12.069 0H23v10.931H12.069zM0 12.069h10.931V23H0zM12.069 12.069H23V23H12.069z"/>
              </svg>
              <span className="sr-only">Microsoft</span>
            </div>
            
            {/* Amazon */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <svg className="h-7 w-auto" viewBox="0 0 127 39" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M76.266 26.65c-5.354 3.936-13.137 6.037-19.832 6.037-9.38 0-17.818-3.459-24.205-9.221-.502-.455-.053-1.077.55-.726 6.905 4.015 15.447 6.436 24.269 6.436 5.947 0 12.487-1.23 18.5-3.79.906-.384 1.666.593.718 1.264zm2.246-2.556c-.682-.874-4.529-.414-6.26-.207-.526.063-.607-.394-.133-.727 3.066-2.156 8.091-1.533 8.672-.81.582.726-.152 5.772-3.033 8.178-.442.373-.863.174-.666-.316.646-1.61 2.09-5.215 1.42-6.118z"/>
                <path className="fill-foreground" d="M71.831 3.842V1.254c0-.38.288-.63.63-.63h11.184c.358 0 .645.256.645.63v2.22c-.004.358-.307.825-.843 1.564l-5.795 8.275c2.154-.05 4.432.27 6.357 1.366.433.249.55.618.583.98v2.77c0 .366-.404.793-.828.572-3.461-1.813-8.055-2.01-11.888.021-.39.205-.798-.211-.798-.577v-2.63c0-.407.006-.1.39-1.582l6.72-9.63H72.47c-.358 0-.645-.255-.64-.635zm-50.784 17.6h-3.397c-.323-.022-.582-.266-.605-.576V1.254c0-.349.293-.63.655-.63h3.166c.331.015.596.27.618.585v2.588h.063c.825-2.198 2.378-3.219 4.47-3.219 2.123 0 3.454 1.021 4.406 3.219.825-2.198 2.7-3.219 4.707-3.219 1.428 0 2.984.588 3.936 1.91 1.079 1.469.858 3.602.858 5.473l-.005 11.025c0 .349-.293.63-.655.63h-3.392c-.34-.022-.612-.292-.612-.63V9.604c-1.32 1.683-3.063 2.475-5.38 2.475-4.752 0-7.508-3.668-7.508-8.845 0-4.61 2.5-9.22 7.64-9.22 2.134 0 4.026.825 5.248 2.75V1.254c0-.349.297-.63.66-.63h3.426c.33.015.6.27.623.585v17.958h-.016zm-41.812 0c0 .297-.008.66-.14.99-.099.264-.264.429-.462.44h-3.063c-.305-.022-.561-.247-.594-.55V1.254c0-.349.297-.63.66-.63h3.426c.33.015.6.27.623.585v17.958h-.016z"/>
              </svg>
              <span className="sr-only">Amazon</span>
            </div>
            
            {/* Google */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <svg className="h-8 w-auto" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path className="fill-foreground" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path className="fill-foreground" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path className="fill-foreground" d="M225 3v65h-9.5V3h9.5z"/>
                <path className="fill-foreground" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm0-13c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1zm-30.9 21.1h13.6V0h-13.6v30.6zm3.426 8.274c0 .297-.008.66-.14.99-.099.264-.264.429-.462.44h-3.063c-.305-.022-.561-.247-.594-.55V18.4c-1.32 1.683-3.063 2.475-5.38 2.475-4.752 0-7.508-3.668-7.508-8.845 0-4.61 2.5-9.22 7.64-9.22 2.134 0 4.026.825 5.248 2.75V1.254c0-.349.297-.63.66-.63h3.458c.33.015.594.27.617.585v17.958h-.016zm-41.812 0c0 .297-.008.66-.14.99-.099.264-.264.429-.462.44h-3.063c-.305-.022-.561-.247-.594-.55V1.254c0-.349.297-.63.66-.63h3.426c.33.015.6.27.623.585v17.958h-.016z"/>
              </svg>
              <span className="sr-only">Google</span>
            </div>
            
            {/* IBM */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <svg className="h-12 w-auto" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M0 0v10.1h57.6V0H0zm71.5 0v10.1h57.3c0-3.4-2.7-6.7-6.1-8.4-1.6-.8-3.4-1.7-5.1-1.7H71.5zM143 0v10.1h45.4c-.5-5.6-4.7-10.1-10.2-10.1H143zm-71.5 20.1v10.1h57.6V20.1H71.5zm71.5 0v10.1h53c.5-5.3-2.5-7.5-5.8-10.1h-47.2zm-143 0v10.1h57.6V20.1H0zm0 20.2v10.1h57.6V40.3H0zm71.5 0v10.1h123c2.8-2.2 5.8-6.4 5.8-10.1H71.5zm71.5 0v10.1h35.2c5.6 0 9.7-4.6 10.2-10.1H143zm-71.5 20.2v10.1h57.6v-10.1H71.5zm-71.5 0v10.1h57.6v-10.1H0zm143 0v10.1h47.2c1.8 0 3.5-.9 5.1-1.7 3.4-1.7 6.1-5 6.1-8.4H143z"/>
              </svg>
              <span className="sr-only">IBM</span>
            </div>
            
            {/* Oracle */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <svg className="h-6 w-auto" viewBox="0 0 248 31" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M0 30.6h29.3c16.2 0 29.3-6.8 29.3-15.3C58.7 6.8 45.5 0 29.3 0H0v30.6zm21.5-7.1h-7.9V7.1h7.9c8.2 0 14.9 3.7 14.9 8.2 0 4.5-6.7 8.2-14.9 8.2zm66.4 7.1h13.6V7.1h-13.6v23.5zm61.5 0h13.6V7.1h-13.6v23.5zm-30.7 0h13.6V7.1h-13.6v23.5zm-31.9 0h13.6V18.9h16.9v-8.4h-16.9V7.1h18.2V0H86.8v30.6zm158.7-8.1c-3.2 0-5.9-2.6-5.9-5.9 0-3.2 2.6-5.9 5.9-5.9 3.2 0 5.9 2.6 5.9 5.9 0 3.3-2.6 5.9-5.9 5.9zm0-13c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1zm-30.9 21.1h13.6V0h-13.6v30.6zm3.426 8.274c0 .297-.008.66-.14.99-.099.264-.264.429-.462.44h-3.063c-.305-.022-.561-.247-.594-.55V18.4c-1.32 1.683-3.063 2.475-5.38 2.475-4.752 0-7.508-3.668-7.508-8.845 0-4.61 2.5-9.22 7.64-9.22 2.134 0 4.026.825 5.248 2.75V1.254c0-.349.297-.63.66-.63h3.458c.33.015.594.27.617.585v17.958h-.016zm-41.812 0c0 .297-.008.66-.14.99-.099.264-.264.429-.462.44h-3.063c-.305-.022-.561-.247-.594-.55V1.254c0-.349.297-.63.66-.63h3.426c.33.015.6.27.623.585v17.958h-.016z"/>
              </svg>
              <span className="sr-only">Oracle</span>
            </div>
            
            {/* SAP */}
            <div className="w-32 h-16 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <svg className="h-8 w-auto" viewBox="0 0 92 45" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-foreground" d="M91.4 33.5h-14V8.9h4.4v20.1h9.6v4.5zm-20.6-4.5c-1.6 1.8-4 2.9-6.4 2.9-2.6 0-4.8-1.1-4.8-3.9 0-4.8 7.1-5 11.6-5h.3v-.7c0-2.1-2.3-2.4-3.7-2.4-1.7 0-3.7.6-5.2 1.5l-1.8-3c2.2-1.4 5-1.9 7.5-1.9 3.2 0 7.4.9 7.4 5.2v11.9h-4.1l-.8-1.6zm-1.7-2.9c-1.5 0-5.9.2-5.9 2.4 0 1.2 1.2 1.5 2.2 1.5 1.7 0 3.3-1 3.7-2.5v-1.4zm-16.2-9.2c-1.3-.8-2.7-1.2-4.2-1.2-1.6 0-2.4.6-2.4 1.4 0 .9 1 1.2 1.5 1.3l2.3.5c3 .7 5.2 2.1 5.2 5.3 0 4.5-4.2 6.3-8.2 6.3-2.7 0-5.4-.7-7.7-2l1.9-3.4c1.6 1 3.5 1.8 5.5 1.8 1.3 0 3.1-.4 3.1-1.6 0-.9-1-1.3-2.2-1.6l-2.1-.5c-2.9-.7-4.8-2.3-4.8-5.2 0-4.2 4.1-5.9 7.8-5.9 2.2 0 4.4.4 6.4 1.4l-2.1 3.4zm-16.4 16.6h-4.8V8.9h4.8v24.6zm-10.6 0h-4.8V8.9h4.8v24.6zM11.3 16.9c-2.9 0-5.2 2.2-5.2 6.1 0 3.8 2.3 6.1 5.2 6.1 2.9 0 5.2-2.3 5.2-6.1 0-3.9-2.3-6.1-5.2-6.1m0 16.6c-6.1 0-10.5-4.1-10.5-10.5 0-6.5 4.4-10.5 10.5-10.5s10.5 4 10.5 10.5c0 6.4-4.4 10.5-10.5 10.5"/>
              </svg>
              <span className="sr-only">SAP</span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="text-sm text-primary hover:underline inline-flex items-center">
              View all client success stories
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {t('sectionSubtitle', { fallback: 'Enterprise Solutions' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('sectionTitle', { fallback: 'Our Services' })}</h2>
            <p className="text-lg text-muted-foreground">
              {t('sectionDescription', { fallback: 'We provide comprehensive IT solutions tailored to your business needs with industry-leading expertise and personalized service.' })}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              // Create an ID based on the service type
              const serviceId = service.title === t('cloud.title') ? 'cloud' :
                               service.title === t('development.title') ? 'development' :
                               service.title === t('cybersecurity.title') ? 'security' :
                               service.title === t('infrastructure.title') ? 'data' :
                               service.title === t('strategy.title') ? 'strategy' :
                               service.title === t('ai.title') ? 'ai' : `service-${idx}`;
              
              return (
                <AnimatedSection key={idx} delay={idx * 0.1} id={serviceId}>
                  <Card className="h-full border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-2">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <a href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-primary hover:underline inline-flex items-center group">
                          Learn more
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-muted/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] dark:opacity-[0.05]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {t('whyChooseUs.subtitle', { fallback: 'Our Difference' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('whyChooseUs.title', { fallback: 'Why Choose TechConsult' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('whyChooseUs.description', { fallback: 'We combine industry expertise with innovative solutions to deliver exceptional results for our clients.' })}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "chart",
                title: t('whyChooseUs.reasons.expertise.title', { fallback: 'Industry Expertise' }),
                description: t('whyChooseUs.reasons.expertise.description', { fallback: 'Our team brings decades of experience across various industries and technologies.' })
              },
              {
                icon: "solution",
                title: t('whyChooseUs.reasons.customized.title', { fallback: 'Customized Solutions' }),
                description: t('whyChooseUs.reasons.customized.description', { fallback: 'We develop tailored strategies that address your unique business challenges.' })
              },
              {
                icon: "support",
                title: t('whyChooseUs.reasons.support.title', { fallback: '24/7 Support' }),
                description: t('whyChooseUs.reasons.support.description', { fallback: 'Our dedicated support team is always available to assist you with any issues.' })
              },
              {
                icon: "innovation",
                title: t('whyChooseUs.reasons.innovation.title', { fallback: 'Continuous Innovation' }),
                description: t('whyChooseUs.reasons.innovation.description', { fallback: 'We stay at the forefront of technology to provide cutting-edge solutions.' })
              }
            ].map((reason, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full group">
                  <div className="mb-6">
                    {reason.icon === "chart" && (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                      </div>
                    )}
                    {reason.icon === "solution" && (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                        </svg>
                      </div>
                    )}
                    {reason.icon === "support" && (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                    )}
                    {reason.icon === "innovation" && (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('cta.title', { fallback: 'Ready to Transform Your IT Infrastructure?' })}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('cta.description', { fallback: 'Contact our team today to discuss how we can help you achieve your business goals through innovative IT solutions.' })}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-sm">Free initial consultation and assessment</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-sm">Customized solutions for your specific needs</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-sm">Dedicated account manager for your project</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    {t('cta.button', { fallback: 'Contact Us Now' })}
                  </Button>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-primary/20 hover:bg-primary/5">
                    {t('cta.secondaryButton', { fallback: 'Schedule a Demo' })}
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-primary/5">
                  <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-background rounded-xl shadow-lg border border-border p-8 w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-4">Request Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Company</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your Company" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 h-24" placeholder="Tell us about your project"></textarea>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Submit Request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}