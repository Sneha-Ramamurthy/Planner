import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [step, setStep] = useState('mobile')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()

  const handleContinue = (e) => {
    e.preventDefault()
    if (step === 'mobile' && mobile.trim().length >= 10) {
      setStep('otp')
    } else if (step === 'otp' && otp.trim().length >= 4) {
      // Mock authentication — replace with a real auth call later.
      navigate('/home')
    }
  }

  return (
    <div className="grid min-h-screen pt-20 lg:grid-cols-2 lg:pt-0">
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-4xl text-charcoal">Welcome back.</h1>
          <p className="mt-3 font-body text-sm text-charcoal/60">
            {step === 'mobile'
              ? 'Sign in with your mobile number to continue planning.'
              : `We\u2019ve sent a code to ${mobile}.`}
          </p>

          <form onSubmit={handleContinue} className="mt-10 space-y-5">
            {step === 'mobile' ? (
              <label className="block">
                <span className="mb-1.5 block font-body text-[13px] text-charcoal/50">
                  Mobile Number
                </span>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="98765 43210"
                  className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:border-burgundy"
                />
              </label>
            ) : (
              <label className="block">
                <span className="mb-1.5 block font-body text-[13px] text-charcoal/50">OTP</span>
                <input
                  type="text"
                  inputMode="numeric"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the 4-digit code"
                  className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:border-burgundy"
                />
              </label>
            )}

            <button
              type="submit"
              className="w-full border border-burgundy bg-burgundy px-6 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
            >
              {step === 'mobile' ? 'Send OTP →' : 'Verify & Continue →'}
            </button>
          </form>

          <p className="mt-8 font-body text-sm text-charcoal/60">
            New here?{' '}
            <Link to="/start-planning" className="text-burgundy hover:underline">
              Start planning →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
