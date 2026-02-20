import React from 'react';
import {fetchRequest} from "@/lib/fetchRequest";
import {cookies} from "next/headers";
import StepsController from "@/components/forms/StepsController";
import Step3No from "@/components/forms/permit/Step3No";
import {getPermitOptions} from "@/lib/data";
import {redirect} from "next/navigation";

const OwnerInfo = async () => {
    const cookieStore = await cookies()
    const {value: id} = cookieStore.get('certificate_id') || {value: 0};
    const res = await fetchRequest(`certificate?id=${id}`);
    const options = await getPermitOptions();
    const {success, data} = res;
    if(!success) {
        redirect('/');
    }

    return (
        <div className='relative custom_container'>
            <StepsController nextStep={3}/>
            <Step3No data={{...data.company, officer: data.officer, id}} options={options} />
        </div>
    );
};

export default OwnerInfo;