import Management from '@/components/about/Management';
import PageLayout from '@/layout';
import React from 'react'
export const metadata = {
  title: "The Board - Clearline HMO",
  alternates: {
    canonical: "/theboard/",
  },
};
function TheManagement() {
  return (
    <PageLayout>
      <div className="lg:px-12 pt-32 max-md:pt-24 min-h-screen">
        <Management/>
      </div>
    </PageLayout>
  )
}

export default TheManagement