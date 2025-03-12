import Legal from '@/components/layouts/policies/Legal'
import { legal } from '@/utils/Data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Legal title={"legal"} data={legal} type />
        </div>
    )
}

export default Page
