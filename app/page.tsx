'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  FileText, 
  ShieldCheck, 
  Users, 
  MessageCircle, 
  ArrowRight, 
  Menu, 
  X, 
  BarChart3, 
  Search,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

// Types
interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Apakah berkas yang disusun sesuai dengan standar STARKES terbaru?",
    answer: "Ya, seluruh dokumen regulasi (SK, Pedoman, Panduan, SPO) dan dokumen bukti telusur yang kami susun sepenuhnya mengacu pada Standar Akreditasi Rumah Sakit (STARKES) terbaru sesuai Keputusan Menteri Kesehatan RI."
  },
  {
    question: "Bagaimana jika ada kendala saat survei berlangsung?",
    answer: "Kami tidak hanya memberikan dokumen, tetapi juga memberikan pendampingan selama proses koordinasi hingga simulasi survei. Tim kami akan membantu memastikan tim Anda paham bagaimana mempresentasikan dokumen tersebut di hadapan surveior."
  },
  {
    question: "Berapa lama durasi penyusunan berkas?",
    answer: "Durasi sangat bergantung pada jumlah Pokja yang dibantu dan kondisi awal dokumen di rumah sakit. Namun, rata-rata pengerjaan berkas intensif memakan waktu 1-3 bulan untuk sinkronisasi penuh."
  },
  {
    question: "Apakah layanan ini tersedia untuk seluruh Indonesia?",
    answer: "Tentu. Kami melayani pendampingan baik secara daring (online coaching) maupun luring (on-site visit) ke seluruh wilayah Indonesia."
  }
];

export default function HospitalAccreditationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                Mitra <span className="text-emerald-600">Fasyankes</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solusi" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Layanan</a>
              <a href="#proses" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Proses</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">FAQ</a>
              <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:scale-95">
                Konsultasi Sekarang
              </button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4"
            >
              <a href="#solusi" className="block text-base font-medium text-slate-600 py-2">Layanan</a>
              <a href="#proses" className="block text-base font-medium text-slate-600 py-2">Proses</a>
              <a href="#faq" className="block text-base font-medium text-slate-600 py-2">FAQ</a>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">
                Konsultasi WhatsApp
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-4 h-4" /> Solusi Akreditasi RS Terpercaya
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Lulus Akreditasi RS Tanpa <span className="text-emerald-600">Prahara Administratif.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Kami membantu penyusunan berkas akreditasi (STARKES) secara komprehensif. Mulai dari draft regulasi hingga sinkronisasi bukti telusur. Praktis, akurat, dan siap survei.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat Spesialis Kami
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Lihat Cakupan Layanan
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://picsum.photos/seed/medical/800/600" 
                  alt="Hospital Accreditation Team" 
                  width={800} 
                  height={600}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Compliance Rate</div>
                    <div className="text-lg font-bold text-slate-900">100% STARKES</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Total Berkas</div>
                    <div className="text-lg font-bold text-slate-900">1.000+ Dokumen</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Telah Dipercaya oleh Rumah Sakit & Fasyankes Seluruh Indonesia</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for hospital logos */}
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="h-8 w-32 bg-slate-200 rounded animate-pulse" />
               ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Akreditasi Bukan Sekadar Dokumen, Tapi Seringkali Menjadi <span className="text-red-500">Beban?</span></h2>
              <p className="text-lg text-slate-600">Banyak rumah sakit berjuang sendiri dalam labirin birokrasi dan regulasi yang terus berubah.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Tumpukan Berkas Berantakan", text: "Regulasi (SK, Pedoman) tidak sinkron dengan Bukti Telusur di lapangan.", color: "bg-red-50 text-red-600" },
                { title: "Kelelahan Tim Mutu", text: "Staf medis terbebani administrasi berlebih hingga mengganggu pelayanan pasien.", color: "bg-amber-50 text-amber-600" },
                { title: "Update Regulasi Kemenkes", text: "Sulit mengikuti perubahan standar akreditasi (STARKES) terbaru secara mandiri.", color: "bg-blue-50 text-blue-600" }
              ].map((item, id) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: id * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / Bento Grid */}
        <section id="solusi" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Solusi Kelengkapan Berkas <span className="text-emerald-600">All-in-One.</span></h2>
                <p className="text-slate-600 text-lg">Kami mendampingi Anda merapikan seluruh elemen dokumen untuk mencapai skor maksimal.</p>
              </div>
              <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Pelajari Detail Teknis <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-emerald-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden group">
                <div className="relative z-10 max-w-md">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Penyusunan Regulasi (Dokumen Internal)</h3>
                  <p className="text-emerald-50/80 mb-6 leading-relaxed">Penyusunan draf Kebijakan, SK, Pedoman, Panduan, dan SPO yang disesuaikan dengan profil dan kebutuhan operasional rumah sakit Anda.</p>
                  <ul className="space-y-3">
                    {['Sinkronisasi antar Pokja', 'Format standar Kemenkes', 'Mudah diimplementasikan'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-5 h-5 bg-white/20 rounded-full p-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-64 h-64" />
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="text-emerald-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Dokumen Bukti & Rekam Medis</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Membantu penyiapan bukti telusur (Observasi, Wawancara, Simulasi) untuk membuktikan kepatuhan tim di lapangan.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Support</span>
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-between group cursor-default">
                 <h3 className="text-xl font-bold mb-4">Bimbingan & Coaching Pokja</h3>
                 <p className="text-slate-600 text-sm mb-6">Pendampingan intensif untuk membekali staf agar paham isi dokumen dan siap menghadapi wawancara surveior.</p>
                 <div className="relative h-40 bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                    <Users className="w-16 h-16 text-slate-200 group-hover:text-emerald-200 transition-colors duration-500" />
                 </div>
              </div>

              <div className="md:col-span-2 bg-indigo-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-indigo-100">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Internal Audit & Simulasi Survei</h3>
                  <p className="text-slate-600 mb-6">Kami melakukan &ldquo;Mock Audit&rdquo; untuk menemukan celah (gap analysis) sebelum surveior asli datang. Meminimalisir temuan mayor.</p>
                  <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">Daftar Simulasi</button>
                </div>
                <div className="w-full md:w-1/3 aspect-video bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-indigo-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Workflow */}
        <section id="proses" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Alur Kerja yang <span className="text-emerald-400">Efisiensi Tinggi.</span></h2>
              <p className="text-slate-400">Kami bekerja secara terstruktur, memastikan setiap langkah memberikan dampak nyata pada kesiapan akreditasi.</p>
            </div>

            <div className="relative">
              {/* Desktop Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2" />
              
              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", title: "Diagnostic Assessment", desc: "Audit awal untuk memetakan dokumen yang sudah ada dan mencari celah data." },
                  { step: "02", title: "Penyusunan Draf", desc: "Tim ahli kami menyusun draf regulasi sesuai standar STARKES terbaru." },
                  { step: "03", title: "Sinkronisasi Bukti", desc: "Menyesuaikan dokumen di kantor dengan implementasi di ruang perawatan & medis." },
                  { step: "04", title: "Final Review", desc: "Simulasi survei dan pemantapan akhir sebelum kedatangan lembaga akreditasi." }
                ].map((item, id) => (
                  <div key={id} className="text-center group">
                    <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                      <span className="text-xl font-black text-emerald-400 group-hover:text-white">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Pertanyaan Seputar Layanan</h2>
              <p className="text-slate-600">Menjawab keraguan yang sering ditanyakan pengelola fasyankes.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className="font-bold text-slate-800">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-50 px-6 pb-6 overflow-hidden"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-slate-200">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-emerald-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 max-w-4xl mx-auto">Selesaikan Beban Akreditasi Rumah Sakit Anda Sekarang.</h2>
            <p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto opacity-90 italic">
              &ldquo;Kualitas layanan medis adalah prioritas Anda. Biar administrasi &amp; kepatuhan regulasi menjadi urusan kami.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-emerald-700 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center gap-3">
                Hubungi Spesialis Dokumentasi <MessageCircle className="w-6 h-6" />
              </button>
              <div className="text-emerald-100 font-medium">Atau hubungi kami di <span className="underline">+62 812-XXXX-XXXX</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-16 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-emerald-500 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                Mitra <span className="text-emerald-500">Fasyankes</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Konsultan manajemen mutu & akreditasi fasilitas kesehatan terpercaya di Indonesia. Membantu Rumah Sakit, Puskesmas, dan Kilink mencapai standar mutu tertinggi.
            </p>
            <div className="flex gap-4">
              {/* Fake Socials */}
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-white">FB</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-white">IG</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Menu Layanan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Akreditasi RS</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Akreditasi Puskesmas</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Manajemen Mutu</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Diklat & Pelatihan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li>Jakarta, Indonesia</li>
              <li>info@mitrafasyankes.com</li>
              <li>+62 812-XXXX-XXXX</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          © 2026 Mitra Fasyankes. All rights reserved. Hospital Accreditation Specialist.
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <button className="bg-emerald-600 text-white p-4 rounded-full shadow-2xl border-4 border-white active:scale-90 transition-transform">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
