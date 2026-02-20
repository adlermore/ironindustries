import React from 'react';
import {cookies} from "next/headers";
import {fetchRequest} from "@/lib/fetchRequest";
import {getPermitOptions} from "@/lib/data";
import {redirect} from "next/navigation";
import PermitSteps from "@/components/forms/permit/PermitSteps";

const Permit = async () => {
    const cookieStore = await cookies()
    const {value: id} = cookieStore.get('certificate_id') || {value: 0};
    const res = await fetchRequest(`certificate?id=${id}`);
    const options = await getPermitOptions();
    if (!res.success) {
        redirect('/')
    }

    return (
        <div className='relative custom_container'>
           <PermitSteps data={{...res.data, id}} states={options?.states || []} />
        </div>
    );
};

export default Permit;