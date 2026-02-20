import React from 'react';
import {fetchRequest} from "@/lib/fetchRequest";
import {cookies} from "next/headers";
import StepsController from "@/components/forms/StepsController";
import Step3Yes from "@/components/forms/permit/Step3Yes";
import {redirect} from "next/navigation";

const Verification = async () => {
    const cookieStore = await cookies()
    const {value: id} = cookieStore.get('certificate_id') || {value: 0};
    const res = await fetchRequest(`certificate?id=${id}`);
    const {success, data} = res;
    if(!success) {
        redirect('/');
    }

    return (
        <div className='relative custom_container'>
            <StepsController nextStep={3}/>
            <Step3Yes data={{...data.verification, id}} />
        </div>
    );
};

export default Verification;