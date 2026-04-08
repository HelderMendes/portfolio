'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import { EmailTemplate } from '@/components/email-template';

// Note: We initialize inside the action to ensure env vars are loaded
// or move it to a shared client file.

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
    // Validate data
    const validatedData = contactSchema.safeParse(formData);

    if (!validatedData.success) {
        return { error: 'Validation failed. Please check your inputs.' };
    }

    const { name, email, subject, message } = validatedData.data;

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = (process.env.EMAIL_ADDRESS || "onboarding@resend.dev").trim();
    
    if (!apiKey) {
        console.error('Missing RESEND_API_KEY');
        return { error: 'Server configuration error: Missing API Key.' };
    }

    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from: `Helder Design <${fromEmail}>`,
            to: ['info@helderdesign.nl'],
            subject: `New Contact Form: ${subject}`,
            react: (
                <EmailTemplate
                    name={name}
                    email={email}
                    subject={subject}
                    message={message}
                />
            ),
            replyTo: email,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return { error: error.message || 'Failed to send email via Resend.' };
        }

        return { success: true, data };
    } catch (err: any) {
        console.error('Server Action Exception:', err);
        return { 
            error: err instanceof Error ? err.message : 'An unexpected server error occurred.' 
        };
    }
}
