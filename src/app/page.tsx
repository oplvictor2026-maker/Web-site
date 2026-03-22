import Link from 'next/link'
import { ArrowRight, Check, Play, Shield, Zap, Users, Workflow, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-radial" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative container-custom text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-400 font-medium">AI-OS v3.0 现已发布</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-white">下一代</span>
            <br />
            <span className="gradient-text">AI 自治组织</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            分层治理、角色分离、Sandbox 隔离、完整审计。
            <br className="hidden sm:block" />
            让 AI 协作更安全、更可控、更高效。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/register" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              免费开始使用
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/product" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              观看演示
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10,000+', label: '企业用户' },
              { value: '500K+', label: '任务完成' },
              { value: '99.9%', label: '可用性' },
              { value: '4.9/5', label: '用户评分' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-[#0a0a0f] border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              为什么选择 <span className="gradient-text">AI-OS</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              为 AI 协作而生的企业级操作系统，提供完整的安全治理和协作能力
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: '分层治理',
                description: 'Control Plane 统一管控，所有请求必须经过治理层审批，确保系统安全可控。',
              },
              {
                icon: Users,
                title: '多角色协作',
                description: 'Meta、Tech、Ops 多角色协作，任务驱动工作流，避免权限混乱。',
              },
              {
                icon: Zap,
                title: 'Sandbox 隔离',
                description: '隔离的执行环境，白名单机制确保只能访问授权资源。',
              },
              {
                icon: BarChart3,
                title: '完整审计',
                description: '每个操作都有详细记录，可追溯、可恢复，满足合规要求。',
              },
              {
                icon: Workflow,
                title: '任务驱动',
                description: '所有工作通过任务完成，状态清晰可见，进度实时跟踪。',
              },
              {
                icon: Check,
                title: '高可用性',
                description: '系统状态落盘存储，支持备份和恢复，确保业务连续性。',
              },
            ].map((feature, index) => (
              <div key={feature.title} className="card group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-[#0a0a0f] border-t border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              工作原理
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              清晰的工作流程，确保每个环节都可控可审计
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '请求进入', desc: '用户请求进入 Control Plane 进行登记和治理检查' },
              { step: '02', title: '任务创建', desc: 'Meta Agent 创建标准化任务，分派给合适角色' },
              { step: '03', title: '协作执行', desc: 'Tech/Ops Agent 通过 Sandbox 安全执行任务' },
              { step: '04', title: '审计记录', desc: '所有操作记录到审计日志，确保可追溯性' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-white/5 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-radial border-t border-white/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            立即开始使用 AI-OS，体验下一代 AI 协作平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              免费开始使用
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              查看定价
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
