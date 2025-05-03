"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monitor, Mail, MapPin, Phone, ChevronRight, ExternalLink, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Award, CheckCircle, Clock, Shield, Users, Globe, FileCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function Footer() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const mainLinks = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('solutions'), href: `/${locale}/solutions` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const serviceLinks = [
    { name: 'Cloud Solutions', href: `/${locale}/services#cloud` },
    { name: 'Software Development', href: `/${locale}/services#development` },
    { name: 'IT Strategy', href: `/${locale}/services#strategy` },
    { name: 'Cybersecurity', href: `/${locale}/services#security` },
    { name: 'Data Management', href: `/${locale}/services#data` },
    { name: 'AI & Machine Learning', href: `/${locale}/services#ai` },
  ];
  
  const solutionLinks = [
    { name: 'Digital Transformation', href: `/${locale}/solutions#transformation` },
    { name: 'IT Infrastructure', href: `/${locale}/solutions#infrastructure` },
    { name: 'Managed Services', href: `/${locale}/solutions#managed` },
    { name: 'Business Continuity', href: `/${locale}/solutions#continuity` },
  ];

  const resourceLinks = [
    { name: 'Case Studies', href: `/${locale}/resources/case-studies` },
    { name: 'Blog', href: `/${locale}/resources/blog` },
    { name: 'White Papers', href: `/${locale}/resources/white-papers` },
    { name: 'Webinars', href: `/${locale}/resources/webinars` },
  ];

  const legalLinks = [
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('terms'), href: `/${locale}/terms` },
    { name: t('imprint'), href: `/${locale}/imprint` },
    { name: 'Cookies', href: `/${locale}/cookies` },
  ];
  
  const achievements = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

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
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your business?</h3>
              <p className="text-muted-foreground max-w-xl">Get in touch with our experts to discuss your IT needs and discover how we can help you achieve your goals.</p>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium shadow-sm">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Stay Updated with Industry Insights</h3>
            <p className="text-muted-foreground mb-6">Subscribe to our newsletter to receive the latest news, insights, and exclusive content.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                Subscribe
              </Button>
            </div>
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
                Your trusted partner in digital transformation. We provide innovative IT solutions to help businesses thrive in the digital age with industry-leading expertise and personalized service.
              </p>
              
              <div className="flex items-center space-x-2 mb-6">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">ISO 27001 Certified</span>
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
              <h3 className="text-base font-semibold mb-4 text-foreground">Company</h3>
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
              <h3 className="text-base font-semibold mb-4 text-foreground">Services</h3>
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
              <h3 className="text-base font-semibold mb-4 text-foreground">Solutions</h3>
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
              <h3 className="text-base font-semibold mb-4 text-foreground">Resources</h3>
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
              <h3 className="text-base font-semibold mb-4 text-foreground">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Techstrasse 1<br />
                    1010 Vienna, Austria
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <a href="tel:+4312345678" className="text-sm text-muted-foreground hover:text-primary">+43 1 234 5678</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <a href="mailto:info@techconsult.com" className="text-sm text-muted-foreground hover:text-primary">info@techconsult.com</a>
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Mon-Fri: 9:00-18:00</span>
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
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Top IT Provider 2024</span>
            </div>
            <div className="flex items-center">
              <FileCheck className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm font-medium">Certified Microsoft Partner</span>
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
                © {new Date().getFullYear()} TechConsult GmbH. All rights reserved.
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
                <ExternalLink className="h-3 w-3 mr-1.5" /> Partner Portal
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors">
                <Users className="h-3 w-3 mr-1.5" /> Client Login
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary flex items-center transition-colors">
                <Globe className="h-3 w-3 mr-1.5" /> Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}