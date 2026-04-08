import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

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
  <Html>
    <Head />
    <Preview>New message from {name}: {subject}</Preview>
    <Body style={{
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '40px 0',
    }}>
      <Container style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '48px',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        <Heading style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#2563eb',
          margin: '0 0 24px 0',
          textAlign: 'left' as const,
        }}>
          New Message from Portfolio
        </Heading>

        <Section style={{ marginBottom: '24px' }}>
          <Text style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>From</Text>
          <Text style={{ margin: '0', fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{name} ({email})</Text>
        </Section>

        <Section style={{ marginBottom: '24px' }}>
          <Text style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>Subject</Text>
          <Text style={{ margin: '0', fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{subject}</Text>
        </Section>

        <Hr style={{ borderColor: '#e2e8f0', margin: '24px 0' }} />

        <Section>
          <Text style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#64748b', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>Message</Text>
          <Text style={{ margin: '0', fontSize: '16px', color: '#334155', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

