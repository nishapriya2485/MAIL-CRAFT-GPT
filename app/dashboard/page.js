'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import EmailGenerator from '@/components/email/EmailGenerator';
import EmailHistory from '@/components/email/EmailHistory';
import { useEmailHistory } from '@/hooks/useEmailHistory';

export default function DashboardPage() {
  const router = useRouter();
  const [emailType, setEmailType] = useState('');
  const [emailTone, setEmailTone] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToHistory } = useEmailHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: emailType,
          tone: emailTone,
          prompt: prompt
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      const data = await response.json();
      setGeneratedEmail(data.content);
      
      // Save to history
      addToHistory({
        type: emailType,
        tone: emailTone,
        prompt: prompt,
        content: data.content,
        wordCount: data.wordCount || 0
      });
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </button>
        </div>
        
        <div className="space-y-8">
          <div className="bg-black/50 border border-white/10 backdrop-blur-lg rounded-xl p-6">
            <EmailGenerator 
              emailType={emailType} 
              setEmailType={setEmailType} 
              emailTone={emailTone} 
              setEmailTone={setEmailTone} 
              prompt={prompt} 
              setPrompt={setPrompt} 
              generatedEmail={generatedEmail} 
              handleSubmit={handleSubmit} 
              loading={loading} 
              error={error} 
            />
          </div>
          
          <div className="bg-black/50 border border-white/10 backdrop-blur-lg rounded-xl">
            <EmailHistory />
          </div>
        </div>
      </div>
    </div>
  );
}