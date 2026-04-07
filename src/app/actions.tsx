'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
        const fromEmail = process.env.EMAIL_ADDRESS || "onboarding@resend.dev";
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
            console.error('Resend Error:', error);
            return { error: 'Failed to send email. Please try again later.' };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Server Action Error:', err);
        return { error: 'An unexpected error occurred.' };
    }
}
