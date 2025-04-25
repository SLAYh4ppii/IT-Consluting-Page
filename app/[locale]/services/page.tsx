"use client";

import * as CardComponents from '../../../components/ui/card';
import AnimatedSection from './AnimatedSection';
import { Cloud, Code, LineChart, Database, Shield, Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

const { Card, CardHeader, CardTitle, CardDescription, CardContent } = CardComponents;

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const t = useTranslations('services');
  console.log('German t(cloud.title):', t('cloud.title'));
  const services: Service[] = [
    {
      icon: Cloud,
      title: t('cloud.title'),
      description: t('cloud.description'),
      features: [
        t('cloud.features.0'),
        t('cloud.features.1'),
        t('cloud.features.2'),
      ],
    },
    {
      icon: Code,
      title: t('development.title'),
      description: t('development.description'),
      features: [
        t('development.features.0'),
        t('development.features.1'),
        t('development.features.2'),
      ],
    },
    {
      icon: LineChart,
      title: t('strategy.title'),
      description: t('strategy.description'),
      features: [
        t('strategy.features.0'),
        t('strategy.features.1'),
        t('strategy.features.2'),
      ],
    },
    {
      icon: Database,
      title: t('infrastructure.title'),
      description: t('infrastructure.description'),
      features: [
        t('infrastructure.features.0'),
        t('infrastructure.features.1'),
        t('infrastructure.features.2'),
        t('infrastructure.features.3'),
        t('infrastructure.features.4'),
      ],
    },
    {
      icon: Shield,
      title: t('cybersecurity.title'),
      description: t('cybersecurity.description'),
      features: [
        t('cybersecurity.features.0'),
        t('cybersecurity.features.1'),
        t('cybersecurity.features.2'),
      ],
    },
    {
      icon: Brain,
      title: t('ai.title'),
      description: t('ai.description'),
      features: [
        t('ai.features.0'),
        t('ai.features.1'),
        t('ai.features.2'),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center justify-center pb-2">
                      <span className="mb-4"><Icon className="h-12 w-12 text-primary" /></span>
                      <CardTitle className="text-2xl text-center mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-center mb-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}