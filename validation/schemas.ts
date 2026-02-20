import * as yup from "yup";
import {email, password, password_confirmation, phone, required, usdot} from "@/validation/common";

export const contactFormSchema = yup.object({
    fullName: required,
    companyName: required,
    phone,
    email,
    message: required,
});

export const loginSchema = yup.object({
    email,
    password
});

export const forgotPasswordSchema = yup.object({
    email,
});

export const resetPasswordSchema = yup.object({
    password,
    password_confirmation
});

export const registerSchema = yup.object({
    usdot_number: usdot,
    full_name: required,
    email,
    phone,
    password,
    password_confirmation
});

export const registerPageSchema = yup.object({
    full_name: required,
    phone,
    email,
    password,
    password_confirmation,
    usdot: usdot,
    cdd_account: required
});

export const monthlyMileageTaxReportSchema = yup.object({
    operation_type: yup
        .string()
        .oneOf(['monthly', 'quarterly'])
        .required('Please select reporting type'),
    select_month: yup.string().when('operation_type', {
        is: 'monthly',
        then: schema => schema.required('Please select month'),
        otherwise: schema => schema.notRequired(),
    }),
    select_quarter: yup.string().when('operation_type', {
        is: 'quarterly',
        then: schema => schema.required('Please select quarter'),
        otherwise: schema => schema.notRequired(),
    }),
    select_year: yup.string().required('Please select year'),
    same_as_physical_address: yup.boolean().default(false),
    business_name: required,
    mailing_address: required,
    location_address: required,
    city: required,
    state: required,
    zip_code: yup
        .string()
        .required('Please enter ZIP code')
        .matches(/^\d{5}(-\d{4})?$/, 'Please enter valid ZIP code'),
    phone,
    report_date: yup.string().required('Please select date'),
});
