# Formspree Setup Guide

## ✅ SUCCESS: Formspree Configured

The contact form is now working with your Formspree account (form ID: `xjkonzda`). You are receiving submissions successfully!

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create a New Form

1. After logging in, click "New Form"
2. Give your form a name: "TokenPulse Contact Form"
3. **Important**: Copy the form ID that Formspree provides (it will look like `xrgjabrg`)

## Step 3: Configure Email Settings

1. In your Formspree dashboard, go to your form settings
2. Set the email where you want to receive submissions: `enquiries@tokenpulse.co`
3. Customize the email subject line (optional)
4. Set up any additional notifications

## Step 4: Update Your Form

1. Open `website/src/app/contact/page.tsx`
2. Find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/xrgjabrg', {
   ```
3. Replace `xrgjabrg` with your actual Formspree form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
   ```

## Step 5: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email to confirm you received the submission

## Alternative: Environment Variable Setup

For better security, you can use an environment variable:

1. Create a `.env.local` file in your website directory:
   ```bash
   touch .env.local
   ```

2. Add your Formspree form ID:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your_actual_form_id
   ```

3. Update the code to use the environment variable:
   ```javascript
   const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xrgjabrg';
   const response = await fetch(`https://formspree.io/f/${formId}`, {
   ```

## Features Included

✅ **Form Validation**: Required fields are validated
✅ **Loading States**: Button shows "Sending..." while submitting
✅ **Success Message**: Shows confirmation when form is sent
✅ **Error Handling**: Shows error message if submission fails
✅ **Form Reset**: Clears form after successful submission
✅ **Accessibility**: Proper labels and ARIA attributes

## Troubleshooting

### Form Not Working?
- Make sure you've replaced the form ID with your actual Formspree form ID
- Check that your Formspree account is verified
- Ensure the email address is correctly set in Formspree settings

### Not Receiving Emails?
- Check your spam folder
- Verify the email address in Formspree settings
- Make sure your Formspree account is active

## Support

- Formspree Documentation: https://help.formspree.io/
- Formspree Support: https://formspree.io/support

## Current Setup Status

✅ **Formspree Account**: Configured and working
✅ **Form ID**: `xjkonzda` 
✅ **Email Reception**: You are receiving submissions
✅ **UI Feedback**: Success/error messages working correctly

The form is fully functional and ready for production use!
