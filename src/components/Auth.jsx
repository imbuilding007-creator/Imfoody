import React, { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Auth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('PHONE'); // 'PHONE' or 'OTP'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    // Initialize reCAPTCHA when component mounts
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible'
      });
    }
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setError(null);
    setLoading(true);

    const phoneNumber = `+91${phone}`;
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
      setStep('OTP');
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP. " + err.message);
      // Reset reCAPTCHA on failure
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.render().then(widgetId => {
          grecaptcha.reset(widgetId);
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await confirmationResult.confirm(otp);
      // User is logged in! App.jsx listener will catch it.
    } catch (err) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--saffron)' }}>
          {step === 'PHONE' ? 'Login with Phone' : 'Verify OTP'}
        </h2>
        
        {error && (
          <div style={{ background: '#ffebee', color: '#c62828', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        {/* Hidden reCAPTCHA container required by Firebase Phone Auth */}
        <div id="recaptcha-container"></div>

        {step === 'PHONE' ? (
          <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone Number</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ 
                  padding: '0.8rem', 
                  borderRadius: '8px', 
                  border: '1px solid #ddd', 
                  background: 'var(--surface-color)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  +91
                </div>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit number"
                  required
                  style={{
                    flex: 1,
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
              disabled={loading || phone.length !== 10}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Enter 6-digit OTP</label>
              <input 
                type="text" 
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  outline: 'none',
                  fontFamily: 'inherit',
                  letterSpacing: '5px',
                  textAlign: 'center',
                  fontSize: '1.2rem'
                }}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
              disabled={loading || otp.length !== 6}
            >
              {loading ? 'Verifying...' : 'Verify & Login'}
            </button>

            <button 
              type="button" 
              onClick={() => {
                setStep('PHONE');
                setOtp('');
                setError(null);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--saffron)', 
                marginTop: '1rem', 
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Change Phone Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
