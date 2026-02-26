import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { translate } from '../translations/index.js';

export const AboutPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: '#008080',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateX(-4px)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 128, 128, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateX(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <ArrowLeft size={20} />
          {translate('backToHome', language)}
        </button>
        <div style={{ background: 'white', padding: '50px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#0f4c4c', fontSize: '2rem', marginBottom: '24px', borderBottom: '3px solid #008080', paddingBottom: '12px' }}>{translate('aboutTitle', language)}</h1>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ color: '#008080', fontSize: '1.4rem', marginBottom: '16px' }}>{translate('ourMission', language)}</h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
            {translate('aboutMissionText1', language)}
          </p>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            {translate('aboutMissionText2', language)}
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ color: '#008080', fontSize: '1.4rem', marginBottom: '16px' }}>{translate('keyFeatures', language)}</h2>
          <ul style={{ color: '#555', lineHeight: 2, paddingLeft: '24px' }}>
            <li>{translate('aboutFeature1', language)}</li>
            <li>{translate('aboutFeature2', language)}</li>
            <li>{translate('aboutFeature3', language)}</li>
            <li>{translate('aboutFeature4', language)}</li>
            <li>{translate('aboutFeature5', language)}</li>
            <li>{translate('aboutFeature6', language)}</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: '#008080', fontSize: '1.4rem', marginBottom: '16px' }}>{translate('vision', language)}</h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            {translate('aboutVisionText', language)}
          </p>
        </section>

        <div style={{ marginTop: '40px', padding: '20px', background: '#e0f2f1', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
          <p style={{ color: '#0f4c4c', fontStyle: 'italic', margin: 0 }}>
            {translate('aboutQuote', language)}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
