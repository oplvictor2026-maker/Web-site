"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { name: "功能特性", href: "/product" },
      { name: "解决方案", href: "/solutions" },
      { name: "定价方案", href: "/pricing" },
      { name: "更新日志", href: "/changelog" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { name: "开发文档", href: "/docs" },
      { name: "API 参考", href: "/docs/api" },
      { name: "博客", href: "/blog" },
      { name: "社区", href: "/community" },
    ],
  },
  company: {
    title: "公司",
    links: [
      { name: "关于我们", href: "/about" },
      { name: "加入我们", href: "/careers" },
      { name: "联系我们", href: "/contact" },
      { name: "合作伙伴", href: "/partners" },
    ],
  },
  legal: {
    title: "法律",
    links: [
      { name: "隐私政策", href: "/privacy" },
      { name: "服务条款", href: "/terms" },
      { name: "安全", href: "/security" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/ai-os" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/ai_os" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ai-os" },
  { name: "Email", icon: Mail, href: "mailto:victor@fengfan.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-accent-cyan/5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-blue rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gradient">AI-OS</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                下一代智能操作系统，专为 AI 时代打造。让每个人都能轻松使用人工智能的力量。
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI-OS. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by{" "}
              <a
                href="mailto:victor@fengfan.com"
                className="text-accent-cyan hover:underline"
              >
                Victor
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
