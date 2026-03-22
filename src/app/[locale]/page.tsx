import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-OS Enterprise Infrastructure",
  description: "Enterprise AI-OS governance and memory infrastructure.",
  alternates: {
    languages: {
      en: "/en",
      zh: "/zh",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">

      {/* ENTERPRISE HERO (CN Default) */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-[#0b0f19] to-[#111827]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          企业级 AI‑OS 基础设施
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          面向自治 AI 组织的治理与记忆操作系统
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-12 text-lg">
          AI‑OS 为企业提供可治理、可审计、具备持久记忆能力的多智能体运行框架，
          支持策略控制、组织分层、执行协议与长期知识沉淀，
          构建真正可控的 AI 组织基础设施。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold inline-block"
          >
            预约企业演示
          </a>
          <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-xl font-semibold">
            查看系统架构
          </button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 bg-[#0f172a] text-center">
        <h3 className="text-4xl font-bold mb-12">当前企业 AI 系统的结构性缺陷</h3>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-gray-300">
          <div>
            <h4 className="text-xl font-semibold mb-4">缺乏治理框架</h4>
            <p>大多数 AI 工具没有明确的策略控制、权限边界或人工干预机制。</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">缺乏长期记忆</h4>
            <p>系统无法形成机构级知识沉淀，导致重复试错与决策断层。</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">缺乏组织结构</h4>
            <p>单一 Agent 运作，无法构建分层协作与可扩展的 AI 组织体系。</p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE WITH SVG */}
      <section className="py-24 px-6 bg-[#0b0f19] text-center">
        <h3 className="text-4xl font-bold mb-12">AI‑OS 企业架构分层</h3>

        <div className="max-w-4xl mx-auto mb-16">
          <svg viewBox="0 0 800 400" className="w-full">
            <rect x="150" y="40" width="500" height="60" fill="#1f2937" rx="8" />
            <text x="400" y="75" textAnchor="middle" fill="#ffffff" fontSize="18">
              Governance Layer · 策略治理层
            </text>

            <rect x="150" y="130" width="500" height="60" fill="#111827" rx="8" />
            <text x="400" y="165" textAnchor="middle" fill="#ffffff" fontSize="18">
              Memory Kernel · 结构化记忆核心
            </text>

            <rect x="150" y="220" width="500" height="60" fill="#1f2937" rx="8" />
            <text x="400" y="255" textAnchor="middle" fill="#ffffff" fontSize="18">
              Agent Runtime · 多智能体运行层
            </text>

            <rect x="150" y="310" width="500" height="60" fill="#111827" rx="8" />
            <text x="400" y="345" textAnchor="middle" fill="#ffffff" fontSize="18">
              Execution Protocol · 执行与回滚协议
            </text>
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-gray-300 space-y-4 text-lg">
          <p>通过分层治理结构，企业可以对 AI 行为进行实时监控、审计与回溯。</p>
          <p>Memory Kernel 提供可度量的组织级知识沉淀与决策记忆。</p>
          <p>多 Agent Runtime 支持角色分工、任务分派与跨层协作。</p>
        </div>
      </section>

      {/* GOVERNANCE & MEMORY */}
      <section className="py-24 px-6 bg-[#0f172a] text-center">
        <h3 className="text-4xl font-bold mb-12">治理与组织记忆体系</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 text-gray-300 text-left">
          <div>
            <h4 className="text-2xl font-semibold mb-4">可审计决策链</h4>
            <p>
              所有关键决策与执行路径均被记录与结构化存储，
              支持回溯、风险评估与合规审计。
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">机构级知识沉淀</h4>
            <p>
              构建跨项目、跨时间维度的长期组织记忆，
              将经验转化为可复用的决策资产。
            </p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE USE CASES */}
      <section className="py-24 px-6 bg-[#0b0f19] text-center">
        <h3 className="text-4xl font-bold mb-12">企业应用场景</h3>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto text-gray-300 text-left">
          <div>
            <h4 className="text-2xl font-semibold mb-4">自治 AI 团队</h4>
            <p>构建具备明确角色分工与协作机制的 AI 组织单元。</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">AI 运营基础设施</h4>
            <p>为企业内部 AI 系统提供统一治理与执行控制框架。</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">金融与合规场景</h4>
            <p>实现可追溯、可审计的自动化决策流程。</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">大型研发组织</h4>
            <p>支持跨部门、多角色的 AI 协作实验体系。</p>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="/en/case-studies"
            className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-xl font-semibold inline-block"
          >
            查看企业案例
          </a>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-[#0b0f19] to-[#111827]">
        <h3 className="text-5xl font-bold mb-8">构建可治理的 AI 企业组织</h3>
        <p className="text-gray-400 mb-12 text-lg">
          与我们合作，部署企业级 AI‑OS 基础设施，
          打造具备记忆、结构与治理能力的下一代 AI 组织。
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold text-lg inline-block"
        >
          Book Enterprise Demo
        </a>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm bg-[#0b0f19] border-t border-gray-800 space-y-4">
        <div className="flex justify-center gap-6">
          <a href="/privacy" className="hover:text-gray-300">Privacy</a>
          <a href="/terms" className="hover:text-gray-300">Terms</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div>
          AI‑OS © 2026 · Enterprise Autonomous AI Infrastructure
        </div>
      </footer>

    </main>
  );
}
