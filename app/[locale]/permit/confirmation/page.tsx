import StepsController from '@/components/forms/StepsController'
import {fetchRequest} from "@/lib/fetchRequest";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import Step4 from "@/components/forms/permit/Step4";

export default async function Confirmation() {
    const cookieStore = await cookies()
    const {value: id} = cookieStore.get('certificate_id') || {value: 0};
    const res = await fetchRequest(`certificate?id=${id}`);
    const {success, data} = res;
    if (!success) {
        redirect('/');
    }

    return (
        <div className='relative'>
            <StepsController nextStep={4}/>
            <Step4 data={{...data.company, ...data}}/>
        </div>
    )
}