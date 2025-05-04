"use client";

import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">{t('title', { fallback: 'About TechConsult' })}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('subtitle', { fallback: 'Leading digital transformation in Austria and beyond since 2010.' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('story.title', { fallback: 'Our Story' })}</h2>
              <p className="text-muted-foreground mb-4">
                {t('story.paragraph1', { fallback: 'Founded in 2010, TechConsult has grown from a small IT consultancy to a leading digital transformation partner in Austria. Our journey has been marked by continuous innovation and a commitment to excellence.' })}
              </p>
              <p className="text-muted-foreground">
                {t('story.paragraph2', { fallback: 'Today, we help organizations across Europe navigate the complexities of modern technology and drive successful digital transformations.' })}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">{t('values.title', { fallback: 'Our Values' })}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('values.clientCentric.title', { fallback: 'Client-Centric' })}</h3>
              <p className="text-muted-foreground">{t('values.clientCentric.description', { fallback: 'We put our clients at the center of everything we do, focusing on delivering solutions that address their unique challenges.' })}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('values.excellence.title', { fallback: 'Excellence' })}</h3>
              <p className="text-muted-foreground">{t('values.excellence.description', { fallback: 'We strive for excellence in all aspects of our work, from technical implementation to client communication.' })}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('values.integrity.title', { fallback: 'Integrity' })}</h3>
              <p className="text-muted-foreground">{t('values.integrity.description', { fallback: 'We operate with honesty, transparency, and ethical standards in all our business relationships.' })}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}