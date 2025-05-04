'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Imprint() {
  const t = useTranslations('imprint');
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">{t('title', { fallback: 'Impressum' })}</h1>
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('companyInfo.title', { fallback: 'Company Information' })}</h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('companyInfo.address', { fallback: 'TechConsult GmbH<br />Techstrasse 1<br />1010 Vienna<br />Austria' }) }} />
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('companyInfo.legal', { fallback: 'Commercial Register: FN XXXXXX x<br />Commercial Court: Vienna<br />VAT ID: ATU XXXXXXXX' }) }} />
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('contact.title', { fallback: 'Contact' })}</h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('contact.details', { fallback: 'Phone: +43 1 234 5678<br />Email: office@techconsult.at' }) }} />
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('management.title', { fallback: 'Management' })}</h2>
              <p className="mb-4">
                {t('management.director', { fallback: 'Managing Director: Dr. Max Mustermann' })}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('regulatory.title', { fallback: 'Regulatory Authority' })}</h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('regulatory.details', { fallback: 'Chamber of Commerce Vienna<br />Professional Law: Trade Regulations' }) }} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('disclaimer.title', { fallback: 'Disclaimer' })}</h2>
              <p className="mb-4">
                {t('disclaimer.text', { fallback: 'Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.' })}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}