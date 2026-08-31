import { BlogPost } from '../../types/blog';

export const xyzdomainBlog: BlogPost = {
  slug: 'xyzdomain',
  title: 'Free .XYZ Domain Claim Guide',
  subtitle: 'Step-by-Step Promo Code Registration, Add-on Configuration, & DNS Setup',
  description:
    'Register a free 1-year promotional .xyz domain via Gen.xyz without entering credit card details, configure WHOIS and DNS settings, and pass ICANN verification.',
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTime: '4 min read',
  tags: ['Domains', 'Web', 'DNS', 'Gen.xyz', 'Promo', 'Guide'],
  author: {
    name: 'Monojit Goswami',
    url: 'https://mgbuilds.in',
  },
  notice: {
    type: 'info',
    title: 'Promotional Registration Notice',
    content:
      'Promotional codes grant a 100% discount for a 1-year registration of standard .xyz domains ($15.00 domain + $1.00 WHOIS privacy). Most promo codes are strictly First-Come, First-Served (FCFS) with limited redemption quotas and can expire rapidly once claims are exhausted. Promo codes do not apply to premium tier domains or multi-year terms. ICANN email verification must be completed within 15 days of registration.',
  },
  sections: [
    {
      id: 'account-registration',
      title: '1. Account Registration',
      orderedList: [
        '**Access Registration Portal**: Open the Gen.xyz account registration portal at [https://gen.xyz/account/register.php](https://gen.xyz/account/register.php).',
        '**Complete Required Profile Fields**: Fill in your First Name, Last Name, Street Address, City, State/Region, Country, Zip Code, Phone Number, and Password.',
        '**Contact Information Accuracy**: Ensure you enter a reachable email address and legitimate address details. ICANN regulations mandate valid registrant contact data, and inaccurate entries can trigger anti-fraud account holds.',
      ],
      actionButton: {
        text: 'Create Gen.xyz Account →',
        url: 'https://gen.xyz/account/register.php',
      },
    },
    {
      id: 'domain-search-addons',
      title: '2. Domain Search & Term Configuration',
      orderedList: [
        '**Open Domain Search**: In the top navigation bar of your dashboard, click "Register" or navigate directly to the cart at [https://gen.xyz/account/cart.php?a=add&domain=register&tld=.xyz](https://gen.xyz/account/cart.php?a=add&domain=register&tld=.xyz).',
        '**Search for Domain**: Enter your preferred domain name (e.g., `myproject.xyz`). If the domain is available at the standard $15.00 tier, click "Add to Cart". If unavailable, try an alternative name.',
        '**Change Registration Term to 1 Year (Critical)**: By default, Gen.xyz selects a 3-year term. You must change the duration dropdown to **1 Year** ($15.00 USD). Promotional codes only apply to 1-year registration terms.',
        '**Proceed to Recommended Add-ons**: Click the "Next: Recommended Add-Ons" button.',
        '**Review Add-on Settings**: Leave the add-ons as default: keep "Turn WHOIS Privacy ON" selected ($1.00/yr, covered by the promo discount), keep Google Workspace set to "No Thanks", and keep the Weebly Free Website Builder plan selected.',
        '**Navigate to Checkout**: Click "Next: Information & Checkout".',
      ],
      notice: {
        type: 'warning',
        title: 'Term Duration Requirement',
        content:
          'Promotional codes strictly apply to 1-year terms. If your cart total shows more than $16.00 ($15.00 domain + $1.00 privacy), return to the cart and confirm the term is set to 1 year.',
      },
    },
    {
      id: 'checkout-promo',
      title: '3. Applying Promo Code & Zero-Cost Checkout',
      orderedList: [
        '**Apply Promo Code**: In the "Promotional Code" input field, enter your promotional code and click "Apply Code". Because promo codes are strictly FCFS (First-Come, First-Served) with limited redemption allocations, claim yours promptly before available spots run out.',
        '**Verify Zero-Dollar Total**: Confirm that the $16.00 discount applies, bringing the "Total Due" to **$0.00 USD**.',
        '**Select Paypal Payment Method (Important)**: In the "Default Payment Method" section, do NOT enter credit card numbers. Click the **Paypal** tab instead. Because the invoice balance is $0.00 USD, selecting Paypal allows order completion without entering credit card details or redirecting to PayPal.',
        '**Accept Terms & Submit**: Check the box for "I agree to the Domain Registration Terms & Conditions..." and click "Submit Order". Your domain order will be processed and assigned to your account immediately.',
      ],
      notice: {
        type: 'tip',
        title: 'Zero-Dollar Checkout & FCFS Tip',
        content:
          'Selecting Paypal avoids saving credit card information on file while allowing zero-dollar promotional orders to finalize automatically. Note that promotional codes operate on a strict first-come, first-served basis; if a code fails to apply on an eligible 1-year domain, its redemption limit has likely been reached.',
      },
    },
    {
      id: 'email-verification',
      title: '4. ICANN Email Verification (Mandatory)',
      lead: 'ICANN mandates that domain registrants verify their email address within 15 days of registration. If left unverified, your domain will be suspended.',
      orderedList: [
        '**Locate Verification Email**: Check the email inbox associated with your Gen.xyz account. The email is sent from `supportteam@gen.xyz` or `whois@gen.xyz` with the subject starting with "E-mail address verification initiated".',
        '**Check Spam / Junk Folder**: Approximately 90% of Gen.xyz verification emails land in the spam folder. Be sure to check spam and mark the sender as safe.',
        '**Resend Verification (If Needed)**: If you do not receive the email after several minutes, navigate to your Gen.xyz account dashboard, go to your domain details, and click "Resend verification email".',
        '**Click Verification Link**: Open the link in the email to confirm ownership and remove any registration holds.',
      ],
      notice: {
        type: 'warning',
        title: 'Feature Not Supported Error',
        content:
          'If you encounter a "Feature not supported" error or domain hold notice in your dashboard, it indicates that ICANN email verification is still pending. Verifying your email clears this status.',
      },
    },
    {
      id: 'dns-management',
      title: '5. DNS Configuration & Custom Nameservers',
      lead: 'You can manage DNS records directly through Gen.xyz or point your domain to external providers such as Cloudflare, Vercel, or GitHub Pages.',
      subsections: [
        {
          id: 'custom-nameservers',
          title: 'Pointing Nameservers to Cloudflare or External DNS',
          description:
            'To route DNS through Cloudflare or an external provider, follow these steps in your Gen.xyz account:',
          collapsible: {
            title: 'Step-by-Step: Updating Nameservers',
            orderedList: [
              'Log into your [Gen.xyz Dashboard](https://gen.xyz/account/clientarea.php) and click "Domains".',
              'Click "Manage" next to your active .xyz domain.',
              'In the left navigation menu, select "Nameservers".',
              'Select "Use custom nameservers (enter below)" and enter your provider nameservers (e.g. `alice.ns.cloudflare.com` and `bob.ns.cloudflare.com`).',
              'Click "Change Nameservers". Note: DNS propagation typically takes between 15 minutes and 24 hours to resolve globally.',
            ],
          },
        },
        {
          id: 'weebly-records',
          title: 'Default Weebly Builder DNS Records',
          description:
            'If you are using the free bundled Weebly website builder, ensure the following A records are configured in your DNS zone:',
          codeBlock: {
            language: 'text',
            filename: 'Weebly DNS Zone Records',
            content: 'Host: @ (Root)   Type: A   Address: 199.34.228.55\nHost: www        Type: A   Address: 199.34.228.55',
          },
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: '6. Troubleshooting & FAQs',
      lead: 'Common issues and solutions encountered during promotional registration and domain configuration:',
      unorderedList: [
        '**Promo Code Rejected / Expired**: Promo codes operate on a strict First-Come, First-Served (FCFS) basis and expire once all allocation spots are claimed. Also verify that the term length is set strictly to "1 Year" and the domain is a standard $15.00 USD tier (premium domains and multi-year terms are ineligible).',
        '**Order Flagged for Fraud**: Automated risk filters may occasionally flag new accounts or registrations. If your order is placed on review, send an email to `support@gen.xyz` detailing the issue to request manual approval.',
        '**Domain Suspended**: Caused by uncompleted ICANN email verification within 15 days. Check your spam folder for the verification link or request a resend from the client area.',
        '**DNS Propagation Delays**: DNS record changes or initial website publishing can take up to 24 hours to resolve globally across all ISP resolvers.',
      ],
    },
  ],
};
