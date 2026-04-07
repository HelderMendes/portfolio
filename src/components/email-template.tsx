import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: '1.6',
    color: '#1a1a1b',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px'
  }}>
    <div style={{
      backgroundColor: '#ffffff',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#2563eb',
        marginTop: '0'
      }}>New Message from Portfolio</h1>
      
      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>From</p>
        <p style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>{name} ({email})</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>Subject</p>
        <p style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>{subject}</p>
      </div>

      <div style={{ paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>Message</p>
        <p style={{ margin: '0', whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
    </div>
  </div>
);
