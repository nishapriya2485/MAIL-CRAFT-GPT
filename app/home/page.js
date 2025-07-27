'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Sparkles, Zap, History, Wand2 } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="min-h-[90vh] flex flex-col justify-center py-16 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-white/5 rounded-full filter blur-2xl animate-pulse delay-500" />
          </div>

          <div className="relative z-10 text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-lg border border-white/10">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span className="text-sm font-medium text-white">
                Powered by Advanced AI
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Craft Perfect Emails
              </h1>
              <p className="text-4xl md:text-5xl text-white/80 font-light">
                in Seconds with AI
              </p>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-xl text-white/70 leading-relaxed">
              Transform your email communication with our intelligent AI assistant. 
              <span className="block mt-2 font-light italic">
                Professional, personalized, and perfectly crafted every time.
              </span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
              {[
                { number: '100+', label: 'Email Templates' },
                { number: '10x', label: 'Faster Writing' },
                { number: '24/7', label: 'AI Assistance' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center">
              <button
                onClick={() => router.push('/dashboard')}
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center"
              >
                <div className="relative flex items-center justify-center">
                    Start Writing
                    <Zap className="w-5 h-5 ml-2 text-black" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
              </button>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-white/80" />,
                  title: 'Smart Email Generation',
                  description: 'Generate professional emails in seconds with AI assistance',
                  delay: '0'
                },
                {
                  icon: <Wand2 className="w-6 h-6 text-white/80" />,
                  title: 'Multiple Tones',
                  description: 'Choose from various tones to match your communication style',
                  delay: '100'
                },
                {
                  icon: <History className="w-6 h-6 text-white/80" />,
                  title: 'Custom Templates',
                  description: 'Access pre-built templates for common email scenarios',
                  delay: '200'
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
                  style={{
                    animationDelay: `${feature.delay}ms`,
                  }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Removed Trust Section Below */}
          </div>
        </div>
      </div>
    </main>
  );
}
