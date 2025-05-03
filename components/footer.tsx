"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monitor, Mail, MapPin, Phone, ChevronRight, ExternalLink, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Award, CheckCircle, Clock, Shield, Users, Globe, FileCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Footer() {
  const navT = useTranslations('navigation');
  const footerT = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [email, setEmail] = useState('');

  const mainLinks = [
    { name: navT('home'), href: `/${locale}` },
    { name: navT('about'), href: `/${locale}/about` },
    { name: navT('services'), href: `/${locale}/services` },
    { name: navT('solutions'), href: `/${locale}/solutions` },
    { name: navT('contact'), href: `/${locale}/contact` },
  ];

  const serviceLinks = [
    { name: footerT('serviceLinks.cloud'), href: `/${locale}/services#cloud` },
    { name: footerT('serviceLinks.software'), href: `/${locale}/services#development` },
    { name: footerT('serviceLinks.strategy'), href: `/${locale}/services#strategy` },
    { name: footerT('serviceLinks.security'), href: `/${locale}/services#security` },
    { name: footerT('serviceLinks.data'), href: `/${locale}/services#data` },
    { name: footerT('serviceLinks.ai'), href: `/${locale}/services#ai` },
  ];
  
  const solutionLinks = [
    { name: footerT('solutionLinks.transformation'), href: `/${locale}/solutions/transformation` },
    { name: footerT('solutionLinks.infrastructure'), href: `/${locale}/solutions/infrastructure` },
    { name: footerT('solutionLinks.managed'), href: `/${locale}/solutions/managed` },
    { name: footerT('solutionLinks.continuity'), href: `/${locale}/solutions/continuity` },
  ];

  const resourceLinks = [
    { name: footerT('resourceLinks.caseStudies'), href: `/${locale}/resources/case-studies` },
    { name: footerT('resourceLinks.blog'), href: `/${locale}/resources/blog` },
    { name: footerT('resourceLinks.whitepapers'), href: `/${locale}/resources/white-papers` },
    { name: footerT('resourceLinks.webinars'), href: `/${locale}/resources/webinars` },
  ];

  const legalLinks = [
    { name: navT('privacy'), href: `/${locale}/privacy` },
    { name: navT('terms'), href: `/${locale}/terms` },
    { name: navT('imprint'), href: `/${locale}/imprint` },
    { name: 'Cookies', href: `/${locale}/cookies` },
  ];
  
  const achievements = [
    { number: footerT('stats.clients'), label: footerT('stats.clientsLabel') },
    { number: footerT('stats.experience'), label: footerT('stats.experienceLabel') },
    { number: footerT('stats.satisfaction'), label: footerT('stats.satisfactionLabel') },
    { number: footerT('stats.support'), label: footerT('stats.supportLabel') },
  ];
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // Show success message or handle errors
  };

  return (
    <footer className="bg-background">
      {/* Stats section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">{item.number}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pre-footer CTA section */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{footerT('cta.title')}</h3>
              <p className="text-muted-foreground max-w-xl">{footerT('cta.description')}</p>
            </div>
            <div className="flex-shrink-0">
              <Link href={`/${locale}/contact`}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium shadow-sm">
                  {footerT('cta.button')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">{footerT('newsletter.title')}</h3>
            <p className="text-muted-foreground mb-6">{footerT('newsletter.description')}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerT('newsletter.placeholder')} 
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                {footerT('newsletter.button')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company info and social */}
            <div className="lg:col-span-4">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-bold block leading-none">TechConsult</span>
                  <span className="text-xs text-muted-foreground">IT Solutions & Consulting</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                {footerT('companyInfo')}
              </p>
              
              <div className="flex items-center space-x-2 mb-6">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{footerT('certification')}</span>
              </div>
              
              <div className="flex space-x-3 mb-8">
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link 
                  href={pathname.replace(/^\/[^\/]+/, '/en')} 
                  className={cn("text-sm px-3 py-1 rounded-md transition-colors", 
                    locale === 'en' ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/80")}
                >
                  EN
                </Link>
                <Link 
                  href={pathname.replace(/^\/[^\/]+/, '/de')} 
                  className={cn("text-sm px-3 py-1 rounded-md transition-colors", 
                    locale === 'de' ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/80")}
                >
                  DE
                </Link>
              </div>
            </div>

            {/* Company links */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-foreground">{footerT('sections.company')}</h3>
              <ul className="space-y-3">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-foreground">{footerT('sections.services')}</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-foreground">{footerT('sections.solutions')}</h3>
              <ul className="space-y-3">
                {solutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-foreground">{footerT('sections.resources')}</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-foreground">{footerT('sections.contact')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {footerT('contactInfo.address')}
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <a href="tel:+4312345678" className="text-sm text-muted-foreground hover:text-primary">{footerT('contactInfo.phone')}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <a href="mailto:info@techconsult.com" className="text-sm text-muted-foreground hover:text-primary">{footerT('contactInfo.email')}</a>
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{footerT('contactInfo.hours')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certifications bar */}
      <div className="border-t border-border bg-muted/30 py-8 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">{footerT('certifications.iso')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">{footerT('certifications.gdpr')}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">{footerT('certifications.award')}</span>
            </div>
            <div className="flex items-center">
              <FileCheck className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">{footerT('certifications.microsoft')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center">
              <p className="text-xs text-muted-foreground mb-2 md:mb-0 md:mr-6">
                {footerT('copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex space-x-4 mb-4 md:mb-0">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors">
                <ExternalLink className="h-3 w-3 mr-1.5" /> {footerT('quickLinks.partner')}
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors">
                <Users className="h-3 w-3 mr-1.5" /> {footerT('quickLinks.client')}
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors">
                <Globe className="h-3 w-3 mr-1.5" /> {footerT('quickLinks.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}