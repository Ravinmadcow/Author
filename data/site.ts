// Everything here is shown on the page. Empty values are left out.
export const site = {
  author: "Charles Birkett",
  tagline: "Stories of hope, magic, and destiny",
  // One string per paragraph.
  bio: [
    "I’m a writer and advocate for the knowledge that we humans can do anything we put our minds to doing. In my life, I’ve been told many times there were things I couldn’t accomplish. I have cerebral palsy and epilepsy, but I see no reason to allow that to hold me back.",
    "I have travelled all over the UK and other countries. I enjoy cycling and walking, but my main hobby is gaming with my family and friends. I love immersing myself in a wonderful story and exciting plot. I draw inspiration from the games I play and all the experiences life throws at me. When I discovered writing, it was another way to give my imagination free rein.",
  ] as string[],
  email: "cgbwriter@hotmail.com",
  // Signup page from a newsletter service (Mailchimp, MailerLite, Substack...).
  // While it is empty, the newsletter button opens an email to the address above.
  newsletterUrl: "",
  socials: [] as { label: string; url: string }[],
};
