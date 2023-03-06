import './reset.scss'

export const metadata = {
  title: 'Facebook-clone',
  description: 'group " We can " ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
