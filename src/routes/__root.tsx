import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Breezent AI & ICT Training | Learn AI, ICT & Digital Skills in Abuja',
      },
      {
        name: 'description',
        content:
          "Master AI tools, website creation, graphic design, WhatsApp Business and social media management through practical ICT training in Abuja.",
      },
      {
        name: 'keywords',
        content:
          'AI Training Abuja, ICT Training, Website Design, Graphic Design, WhatsApp Business, Digital Skills, Artificial Intelligence Nigeria',
      },
      {
        property: 'og:title',
        content: 'Breezent AI & ICT Training',
      },
      {
        property: 'og:description',
        content:
          'Learn Today. Apply Tomorrow. Lead Forever. Practical AI and ICT training in Abuja, Nigeria.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
