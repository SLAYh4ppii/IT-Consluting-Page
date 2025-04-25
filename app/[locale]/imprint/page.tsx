'use client';
import { motion } from 'framer-motion';

export default function Imprint() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <p className="mb-4">
                TechConsult GmbH<br />
                Techstrasse 1<br />
                1010 Vienna<br />
                Austria
              </p>
              <p className="mb-4">
                Commercial Register: FN XXXXXX x<br />
                Commercial Court: Vienna<br />
                VAT ID: ATU XXXXXXXX
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="mb-4">
                Phone: +43 1 234 5678<br />
                Email: office@techconsult.at
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Management</h2>
              <p className="mb-4">
                Managing Director: Dr. Max Mustermann
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Regulatory Authority</h2>
              <p className="mb-4">
                Chamber of Commerce Vienna<br />
                Professional Law: Trade Regulations
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="mb-4">
                Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}