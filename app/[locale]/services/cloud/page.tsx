import { getTranslations } from 'next-intl/server';
import { Server, Globe, Database, Shield } from 'lucide-react';

// Import the client component
import ClientCloudPage from './client-page';

export default async function CloudServicesPage({ params }: { params: { locale: string } }) {
  // Use the correct namespace that matches the translation files
  const t = await getTranslations('solutions.cloud');
  // Properly await params before destructuring locale
  const { locale } = await params;
  
  // Cloud services
  const cloudServices = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: t.raw('services.0.title') || 'Cloud Infrastructure',
      description: t.raw('services.0.description') || 'Scalable and secure cloud infrastructure solutions tailored to your business needs.',
      features: [
        t.raw('services.0.features.0') || 'Infrastructure as a Service (IaaS)',
        t.raw('services.0.features.1') || 'Virtual Private Cloud (VPC)',
        t.raw('services.0.features.2') || 'Hybrid Cloud Solutions'
      ]
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t.raw('services.1.title') || 'Cloud Migration',
      description: t.raw('services.1.description') || 'Seamless migration of your applications and data to the cloud with minimal disruption.',
      features: [
        t.raw('services.1.features.0') || 'Workload Assessment',
        t.raw('services.1.features.1') || 'Migration Planning',
        t.raw('services.1.features.2') || 'Post-Migration Support'
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t.raw('services.2.title') || 'Cloud Storage & Databases',
      description: t.raw('services.2.description') || 'Reliable cloud storage and database solutions for your critical data.',
      features: [
        t.raw('services.2.features.0') || 'Object Storage Solutions',
        t.raw('services.2.features.1') || 'Database as a Service (DBaaS)',
        t.raw('services.2.features.2') || 'Data Backup & Recovery'
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t.raw('services.3.title') || 'Cloud Security',
      description: t.raw('services.3.description') || 'Comprehensive security solutions to protect your cloud environment.',
      features: [
        t.raw('services.3.features.0') || 'Identity & Access Management',
        t.raw('services.3.features.1') || 'Encryption & Data Protection',
        t.raw('services.3.features.2') || 'Security Monitoring & Compliance'
      ]
    }
  ];

  // Cloud approach steps
  const approachSteps = [
    {
      number: "01",
      title: t.raw('approach.items.0.title') || "Assessment",
      description: t.raw('approach.items.0.description') || "Evaluate your current infrastructure and identify cloud migration opportunities."
    },
    {
      number: "02",
      title: t.raw('approach.items.1.title') || "Planning",
      description: t.raw('approach.items.1.description') || "Develop a comprehensive cloud strategy and migration roadmap."
    },
    {
      number: "03",
      title: t.raw('approach.items.2.title') || "Design",
      description: t.raw('approach.items.2.description') || "Design scalable, secure, and cost-effective cloud architecture."
    },
    {
      number: "04",
      title: t.raw('approach.items.3.title') || "Migration",
      description: t.raw('approach.items.3.description') || "Execute migration with minimal disruption to your business operations."
    },
    {
      number: "05",
      title: t.raw('approach.items.4.title') || "Optimization",
      description: t.raw('approach.items.4.description') || "Continuously optimize your cloud environment for performance and cost."
    },
    {
      number: "06",
      title: t.raw('approach.items.5.title') || "Management",
      description: t.raw('approach.items.5.description') || "Provide ongoing management, monitoring, and support for your cloud infrastructure."
    }
  ];

  // Cloud providers
  const cloudProviders = [
    "AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud"
  ];

  // Stats
  const stats = [
    {
      number: t.raw('stats.0.number') || "99.9%",
      label: t.raw('stats.0.label') || "uptime guarantee"
    },
    {
      number: t.raw('stats.1.number') || "40%",
      label: t.raw('stats.1.label') || "cost reduction"
    },
    {
      number: t.raw('stats.2.number') || "500+",
      label: t.raw('stats.2.label') || "successful cloud migrations"
    },
    {
      number: t.raw('stats.3.number') || "24/7",
      label: t.raw('stats.3.label') || "monitoring and support"
    }
  ];

  // Prepare the translated data to pass to the client component
  const cloudServicesData = {
    title: t.raw('title') || 'Cloud Solutions',
    description: t.raw('description') || 'Scalable cloud infrastructure and migration services for modern businesses.',
    text5: t.raw('text5') || 'Leverage the power of cloud computing to drive innovation, enhance scalability, and reduce operational costs with our comprehensive cloud solutions.',
    text6: t.raw('text6') || 'Our cloud experts design, implement, and manage secure cloud environments that align with your business objectives and compliance requirements.',
    hero: {
      title: t.raw('hero.title') || 'Enterprise Cloud Solutions',
      description: t.raw('hero.description') || 'Scalable, secure, and cost-effective cloud infrastructure and migration services tailored to your business needs.',
      primaryCta: t.raw('hero.primaryCta') || 'Get Started',
      secondaryCta: t.raw('hero.secondaryCta') || 'Explore Services'
    },
    services: {
      subtitle: t.raw('services.subtitle') || 'Our Cloud Services',
      title: t.raw('services.title') || 'Comprehensive Cloud Solutions',
      description: t.raw('services.description') || 'We provide end-to-end cloud services to help you harness the full potential of cloud computing.',
      items: cloudServices,
    },
    approach: {
      subtitle: t.raw('approach.subtitle') || 'Our Cloud Approach',
      title: t.raw('approach.title') || 'Cloud Transformation Methodology',
      description: t.raw('approach.description') || 'Our proven methodology ensures a smooth transition to the cloud with minimal disruption to your business.',
      items: approachSteps
    },
    providers: cloudProviders,
    stats: stats,
    cta: {
      title: t.raw('cta.title') || 'Ready to Transform Your Business with Cloud?',
      description: t.raw('cta.description') || 'Contact our cloud experts today to discuss how we can help you leverage the power of cloud computing.',
      primaryButton: t.raw('cta.primaryButton') || 'Schedule Consultation',
      secondaryButton: t.raw('cta.secondaryButton') || 'Explore More Services'
    }
  };

  // Return the client component with the translated data
  return (
    <ClientCloudPage 
      locale={locale} 
      data={cloudServicesData} 
    />
  );
}
