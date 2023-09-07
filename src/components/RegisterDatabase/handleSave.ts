'use server';

import { cookies } from 'next/headers';
import type { Connection } from '@/types';

export const handleSave = () => {
  console.log('p letter?');
};

export const tooManyNights = (form: FormData) => {
  const _ = cookies();
  const data = Object.fromEntries(form.entries()) as unknown as Connection;
  console.log('too many nights', data);
};
