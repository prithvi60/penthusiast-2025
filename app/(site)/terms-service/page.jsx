import Legal from '@/components/layouts/policies/Legal'
import { TOS } from '@/utils/Data'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Legal title={"terms of service"} data={TOS} />
        </div>
    )
}

export default Page
