'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Monitor, Menu, X, ChevronDown, Phone, Mail, Clock, User, Shield, Database, Code, LineChart, ExternalLink, Cloud } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { 
      name: t('services'), 
      href: `/${locale}/services`,
      hasDropdown: true,
      isServices: true
    },
    { 
      name: t('solutions'), 
      href: `/${locale}/solutions`,
      hasDropdown: true,
      isSolutions: true
    },
    { name: t('contact'), href: `/${locale}/contact` },
  ];
  
  const serviceItems = [
    { icon: Cloud, name: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services', href: `/${locale}/services/cloud` },
    { icon: Code, name: 'Software Development', description: 'Custom software solutions for your business needs', href: `/${locale}/services/software-development` },
    { icon: Database, name: 'Data Management', description: 'Enterprise data solutions and analytics', href: `/${locale}/services/data-management` },
    { icon: Shield, name: 'Cybersecurity', description: 'Protect your business with advanced security', href: `/${locale}/services/security` },
  ];
  
  const solutionItems = [
    { icon: LineChart, name: 'Digital Transformation', description: 'Comprehensive digital strategy and execution', href: `/${locale}/solutions/transformation` },
    { icon: Monitor, name: 'IT Infrastructure', description: 'Reliable and scalable IT infrastructure solutions', href: `/${locale}/solutions/infrastructure` },
    { icon: User, name: 'Managed Services', description: '24/7 support and maintenance for your systems', href: `/${locale}/solutions/managed` },
    { icon: Clock, name: 'Business Continuity', description: 'Disaster recovery and business continuity planning', href: `/${locale}/solutions/continuity` },
  ];
  
  const isActive = (href: string) => {
    if (href === `/${locale}` && pathname === `/${locale}`) return true;
    if (href !== `/${locale}` && pathname.startsWith(href)) return true;
    return false;
  };
  
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    if (solutionsOpen) setSolutionsOpen(false);
  };
  
  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-muted py-2 border-b border-border hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Phone className="h-3.5 w-3.5 text-primary mr-2" />
                <span>+43 1 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3.5 w-3.5 text-primary mr-2" />
                <span>info@techconsult.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 text-primary mr-2" />
                <span>Mon-Fri: 9:00-18:00</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm flex items-center hover:text-primary transition-colors">
                <User className="h-3.5 w-3.5 mr-1.5" />
                Client Portal
              </a>
              <div className="h-4 w-px bg-border mx-1"></div>
              <ThemeToggle />
              <div className="h-4 w-px bg-border mx-1"></div>
              <Link href={pathname.replace(/^\/[^\/]+/, '/en')}>
                <span className={cn("text-sm px-2 py-1 rounded-md transition-colors", 
                  locale === 'en' ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted-foreground/10")}>
                  EN
                </span>
              </Link>
              <Link href={pathname.replace(/^\/[^\/]+/, '/de')}>
                <span className={cn("text-sm px-2 py-1 rounded-md transition-colors", 
                  locale === 'de' ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted-foreground/10")}>
                  DE
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={cn(
        "sticky top-0 z-50 bg-background transition-all duration-300", 
        scrolled ? "shadow-md backdrop-blur-sm bg-background/95" : "border-b border-border"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={`/${locale}`} className="flex items-center group">
                <div className="bg-primary/10 p-2.5 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-bold block leading-none">TechConsult</span>
                  <span className="text-xs text-muted-foreground">IT Solutions & Consulting</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex md:justify-center md:flex-1 md:items-center">
              <div className="flex space-x-1">
                {navigation.map((item) => {
                  if (item.hasDropdown && item.isServices) {
                    return (
                      <div key={item.href} className="relative" ref={servicesRef}>
                        <button
                          onClick={toggleServices}
                          className={cn(
                            "px-5 py-2 mx-1 text-sm font-medium rounded-md transition-colors duration-200 flex items-center",
                            (isActive(item.href) || servicesOpen) 
                              ? "text-primary bg-primary/5" 
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            servicesOpen ? "rotate-180" : ""
                          )} />
                        </button>
                        
                        {/* Services Dropdown */}
                        {servicesOpen && (
                          <div className="absolute top-full left-0 mt-1 w-[280px] bg-card rounded-md shadow-lg border border-border overflow-hidden z-50">
                            <div className="p-4">
                              <h3 className="font-medium mb-2">Our Services</h3>
                              <div className="space-y-3">
                                {serviceItems.map((service) => {
                                  const Icon = service.icon;
                                  return (
                                    <Link 
                                      key={service.href} 
                                      href={service.href}
                                      className="flex p-2 rounded-md hover:bg-muted transition-colors"
                                      onClick={() => setServicesOpen(false)}
                                    >
                                      <div className="mr-3 mt-0.5">
                                        <Icon className="h-5 w-5 text-primary" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-sm">{service.name}</div>
                                        <div className="text-xs text-muted-foreground">{service.description}</div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-3 pt-3 border-t border-border">
                                <Link 
                                  href={`/${locale}/services`}
                                  className="text-xs flex items-center text-primary hover:underline"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  View all services
                                  <ChevronDown className="ml-1 h-3 w-3 rotate-270" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  } else if (item.hasDropdown && item.isSolutions) {
                    return (
                      <div key={item.href} className="relative" ref={solutionsRef}>
                        <button
                          onClick={toggleSolutions}
                          className={cn(
                            "px-5 py-2 mx-1 text-sm font-medium rounded-md transition-colors duration-200 flex items-center",
                            (isActive(item.href) || solutionsOpen) 
                              ? "text-primary bg-primary/5" 
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            solutionsOpen ? "rotate-180" : ""
                          )} />
                        </button>
                        
                        {/* Solutions Dropdown */}
                        {solutionsOpen && (
                          <div className="absolute top-full left-0 mt-1 w-[280px] bg-card rounded-md shadow-lg border border-border overflow-hidden z-50">
                            <div className="p-4">
                              <h3 className="font-medium mb-2">Business Solutions</h3>
                              <div className="space-y-3">
                                {solutionItems.map((solution) => {
                                  const Icon = solution.icon;
                                  return (
                                    <Link 
                                      key={solution.href} 
                                      href={solution.href}
                                      className="flex p-2 rounded-md hover:bg-muted transition-colors"
                                      onClick={() => setSolutionsOpen(false)}
                                    >
                                      <div className="mr-3 mt-0.5">
                                        <Icon className="h-5 w-5 text-primary" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-sm">{solution.name}</div>
                                        <div className="text-xs text-muted-foreground">{solution.description}</div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-3 pt-3 border-t border-border">
                                <Link 
                                  href={`/${locale}/solutions`}
                                  className="text-xs flex items-center text-primary hover:underline"
                                  onClick={() => setSolutionsOpen(false)}
                                >
                                  View all solutions
                                  <ChevronDown className="ml-1 h-3 w-3 rotate-270" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "px-5 py-2 mx-1 text-sm font-medium rounded-md transition-colors duration-200",
                          isActive(item.href) 
                            ? "text-primary bg-primary/5" 
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a 
                href="#" 
                className="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                Partner Portal
              </a>
              <Button 
                size="sm" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 shadow-sm"
              >
                {t('contact')}
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="relative"
              >
                <div className={cn(
                  "absolute inset-0 rounded-md transition-opacity duration-300",
                  isMenuOpen ? "bg-primary/10 opacity-100" : "opacity-0"
                )}></div>
                {isMenuOpen ? (
                  <X className="h-5 w-5 relative z-10" />
                ) : (
                  <Menu className="h-5 w-5 relative z-10" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden border-t border-border overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => {
              if (item.hasDropdown && (item.isServices || item.isSolutions)) {
                const isServiceItem = item.isServices;
                const dropdownItems = isServiceItem ? serviceItems : solutionItems;
                const isOpen = isServiceItem ? servicesOpen : solutionsOpen;
                const toggleDropdown = isServiceItem ? toggleServices : toggleSolutions;
                
                return (
                  <div key={item.href} className="space-y-2">
                    <button
                      onClick={toggleDropdown}
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md",
                        isActive(item.href) || isOpen
                          ? "text-primary bg-primary/5" 
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <div className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all duration-200",
                      isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {dropdownItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start p-2 rounded-md hover:bg-muted/50 transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              if (isServiceItem) setServicesOpen(false);
                              else setSolutionsOpen(false);
                            }}
                          >
                            <Icon className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href) 
                        ? "text-primary bg-primary/5" 
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
            
            <div className="pt-4 mt-4 border-t border-border/30 space-y-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm">+43 1 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm">info@techconsult.com</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex space-x-2">
                  <Link href={pathname.replace(/^\/[^\/]+/, '/en')}>
                    <Button 
                      variant={locale === 'en' ? "secondary" : "ghost"} 
                      size="sm"
                    >
                      EN
                    </Button>
                  </Link>
                  <Link href={pathname.replace(/^\/[^\/]+/, '/de')}>
                    <Button 
                      variant={locale === 'de' ? "secondary" : "ghost"} 
                      size="sm"
                    >
                      DE
                    </Button>
                  </Link>
                </div>
                <ThemeToggle />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                {t('contact')}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
