'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTypingEffect } from '@/app/hooks/useTypingEffect'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const typedText = useTypingEffect("All rights reserved.", 100)

  const sections = [
    {
      title: "Usage Rights",
      content: "No part of this website may be reproduced, distributed, or transmitted in any form or by any means without prior written permission."
    },
    {
      title: "Client Work",
      content: "Copyright ownership for client projects may vary. Please refer to individual agreements for details on usage rights and ownership."
    },
    {
      title: "Permissions",
      content: "For permission requests or questions about content usage, please reach out via email or phone."
    }
  ]

  const socialLinks = [
    { Icon: Instagram, href: "https://instagram.com/connect", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com/connect", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com/connect", label: "Facebook" },
    { Icon: Linkedin, href: "https://linkedin.com/company/connect", label: "LinkedIn" }
  ]

  return (
    <div className="min-h-5 bg-gradient-to-br mb-1 my-5 from-purple-700 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3 text-center">Copyright Infographic</h1>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-4">© {currentYear} Connect</h2>
          <p className="text-xl">{typedText}<span className="animate-blink"></span></p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
            >
              <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
              {activeSection === section.title && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  {section.content}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg mb-4">
            For more information, contact us at:
            <br />
            <a href="mailto:agraphicart02@gmail.com" className="underline hover:text-purple-300 transition-colors">
              agraphicart02@gmail.com
            </a>
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-100 hover:text-purple-300 transition-colors"
                aria-label={label}
              >
                <Icon size={24} className="social-icon" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
