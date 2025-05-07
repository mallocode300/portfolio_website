# Setting Up Email Functionality

This portfolio website includes a contact form that sends emails directly to your Outlook address. To make it work, you need to configure a few settings.

## Step 1: Create an App Password for Outlook

Since Microsoft accounts typically have two-factor authentication enabled, you'll need to create an app password for use with SMTP:

1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Sign in with your Microsoft account (mantomarchi300@outlook.com)
3. Go to "Security" > "Advanced security options"
4. Under "App passwords", click "Create a new app password"
5. Give it a name like "Portfolio Website" and copy the generated password

## Step 2: Configure Environment Variables

Create a `.env.local` file in the root of your project with the following content:

```
# Email configuration
EMAIL_USER=mantomarchi300@outlook.com
EMAIL_PASS=your_app_password_here
```

Replace `your_app_password_here` with the app password you generated in Step 1.

## Step 3: Deploy Your Project

When deploying your project, make sure to set these environment variables in your hosting provider:

- For Vercel: Add environment variables in the project settings
- For Netlify: Add environment variables in the site settings

## Troubleshooting

If emails aren't being sent:

1. Check that your app password is correct
2. Ensure your Outlook account allows for SMTP access
3. Check server logs for any error messages
4. Try using a different email service if Outlook consistently fails

## Alternative Email Services

If you encounter issues with Outlook SMTP, you can easily switch to another provider by modifying the `transporter` configuration in the `src/app/api/send-email/route.ts` file.

### Gmail Alternative

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your_app_password',
  },
});
``` 