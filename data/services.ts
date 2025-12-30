export type ServiceProcessStep = {
  title: string;
  desc: string;
};

export type ServiceCaseStudy = {
  title: string;
  desc: string;
  link: string;
  demo?: string;
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type TService = {
  slug: string;
  title: string;
  subtitle: string;

  problem: string[];
  solution: string;

  process: ServiceProcessStep[];

  caseStudy: ServiceCaseStudy[];
  faq: ServiceFAQ[];
};

export const services = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Website cepat, scalable, dan siap konversi",
    problem: [
      "Website lambat dan tidak SEO friendly",
      "Tampilan tidak profesional",
      "Sulit dikembangkan jangka panjang",
    ],
    solution:
      "Kami membangun website modern dengan pendekatan performance-first, SEO-ready, dan clean architecture.",
    process: [
      {
        title: "Discovery & Strategy",
        desc: "Memahami bisnis, target user, dan goal website.",
      },
      {
        title: "Design & Validation",
        desc: "UI clean, user-friendly, dan fokus konversi.",
      },
      {
        title: "Development",
        desc: "Build dengan teknologi modern & scalable.",
      },
      {
        title: "Testing & Launch",
        desc: "Performance, SEO, dan responsiveness check.",
      },
    ],
    caseStudy: [
      {
        title: "KratonStay - Hotel Booking Website",
        desc: "Website hotel booking dengan struktur yang jelas, fokus pada kemudahan reservasi dan kecepatan akses.",
        link: "/portfolio/kratonstay.png",
        demo: "https://kratonstay.vercel.app",
      },
      {
        title: "Growth2Up - Digital Marketing Landing Page",
        desc: "Landing page dengan struktur copywriting yang jelas, CTA kuat, dan flow konversi terarah.",
        link: "/portfolio/growth2up.png",
        demo: "https://growth2up.vercel.app",
      },
    ],
    faq: [
      {
        q: "Berapa lama pengerjaan?",
        a: "Rata-rata 1-3 minggu tergantung kompleksitas.",
      },
      {
        q: "Apakah bisa request custom?",
        a: "Bisa, semua service fleksibel sesuai kebutuhan bisnis.",
      },
    ],
  },

  "web-app-development": {
    slug: "web-app-development",
    title: "Web App Development",
    subtitle: "Sistem web yang scalable, rapi, dan siap tumbuh",
    problem: [
      "Proses bisnis masih manual",
      "Aplikasi sulit dikembangkan",
      "Performa buruk saat user bertambah",
    ],
    solution:
      "Kami membangun web application dengan arsitektur scalable, fokus pada efisiensi proses dan kemudahan pengembangan jangka panjang.",
    process: [
      {
        title: "Business Analysis",
        desc: "Memahami alur bisnis dan kebutuhan sistem.",
      },
      {
        title: "System Design",
        desc: "Merancang arsitektur dan user flow.",
      },
      {
        title: "Development",
        desc: "Build dashboard & fitur inti secara modular.",
      },
      {
        title: "Testing & Deployment",
        desc: "Uji performa, keamanan, dan deployment.",
      },
    ],
    caseStudy: [
      {
        title: "Internal Management System",
        desc: "Dashboard manajemen untuk operasional internal bisnis.",
        link: "/portfolio/webapp-dashboard.png",
        demo: "",
      },
    ],
    faq: [
      {
        q: "Apakah bisa dibuat bertahap (MVP)?",
        a: "Bisa, kami sangat menyarankan pengembangan bertahap.",
      },
      {
        q: "Apakah scalable untuk user besar?",
        a: "Ya, arsitektur dirancang untuk jangka panjang.",
      },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Desain yang jelas, meyakinkan, dan mudah digunakan",
    problem: [
      "User bingung menggunakan produk",
      "Desain terlihat bagus tapi tidak efektif",
      "Conversion rate rendah",
    ],
    solution:
      "Kami merancang UI/UX berbasis user behavior, clarity, dan tujuan bisnis — bukan sekadar estetika.",
    process: [
      {
        title: "User Research",
        desc: "Memahami user, pain point, dan kebutuhan.",
      },
      {
        title: "Wireframe & Flow",
        desc: "Menyusun struktur dan alur yang jelas.",
      },
      {
        title: "Visual Design",
        desc: "Desain modern, clean, dan konsisten.",
      },
      {
        title: "Design Handoff",
        desc: "Siap dikembangkan oleh tim dev.",
      },
    ],
    caseStudy: [
      {
        title: "UmrahEase - Travel Website UI/UX",
        desc: "Desain website travel umrah yang fokus pada trust dan kejelasan paket.",
        link: "/portfolio/umrahease.png",
        demo: "",
      },
    ],
    faq: [
      {
        q: "Apakah hanya desain tanpa development?",
        a: "Ya, UI/UX bisa berdiri sendiri.",
      },
      {
        q: "Apakah include design system?",
        a: "Ya, tergantung scope project.",
      },
    ],
  },

  "website-optimization-maintenance": {
    slug: "website-optimization-maintenance",
    title: "Website Optimization & Maintenance",
    subtitle: "Website tetap cepat, aman, dan relevan",
    problem: ["Website mulai lambat", "SEO stagnan", "Tidak ada support teknis"],
    solution:
      "Kami membantu menjaga dan meningkatkan performa website agar terus mendukung pertumbuhan bisnis.",
    process: [
      {
        title: "Audit Website",
        desc: "Analisis performa, SEO, dan teknis.",
      },
      {
        title: "Optimization",
        desc: "Perbaikan speed, SEO, dan struktur.",
      },
      {
        title: "Monitoring",
        desc: "Pemantauan performa rutin.",
      },
      {
        title: "Support",
        desc: "Maintenance & improvement berkelanjutan.",
      },
    ],
    caseStudy: [
      {
        title: "Landing Page Optimization",
        desc: "Optimasi landing page untuk peningkatan kecepatan & SEO.",
        link: "/portfolio/optimization.png",
        demo: "",
      },
    ],
    faq: [
      {
        q: "Apakah bisa langganan bulanan?",
        a: "Bisa, tersedia paket maintenance.",
      },
      {
        q: "Apakah termasuk update konten?",
        a: "Bisa disesuaikan dengan kebutuhan.",
      },
    ],
  },
};
