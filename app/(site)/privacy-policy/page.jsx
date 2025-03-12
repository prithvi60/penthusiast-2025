import Legal from '@/components/layouts/policies/Legal'
import { privacyPolicy } from '@/utils/Data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Legal title={"privacy policy"} data={privacyPolicy} />
        </div>
    )
}

export default Page
