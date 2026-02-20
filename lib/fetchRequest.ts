'use server';

import { API_URL } from "@/utils/constants";

export const fetchRequest = async (endpoint: string, options: RequestInit = {}) => {

  const isFormData = options.body instanceof FormData;

  const response = await fetch(API_URL + endpoint, {
    method: options.method || 'GET',
    ...options,
    headers: {
      Accept: 'application/json',
      ...(!isFormData && { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  });

  const textResponse = await response.text();

  let parsed;
  try {
    parsed = textResponse ? JSON.parse(textResponse) : {};
  } catch {
    parsed = { message: textResponse };
  }

  if (!response.ok) {
    return {
      success: false,
      status: response.status,
      errors: parsed.errors || parsed.message,
      message: parsed.message,
    };
  }

  return parsed;
};
