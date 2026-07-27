"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IWFM on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
    </motion.a>
  );
}
