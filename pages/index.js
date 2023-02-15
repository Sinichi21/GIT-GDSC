import BaseLayout from '@/components/Layout/BaseLayout'
import LandingPage from '@/components/Layout/LandingPageLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title> SIC UNUD 2023 | Home </title>
      </Head>

      <BaseLayout>
        <LandingPage />
      </BaseLayout>
      
    </>
  )
}
