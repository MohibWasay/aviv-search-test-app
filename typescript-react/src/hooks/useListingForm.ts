import React from 'react';
import { FormikErrors, FormikTouched, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ListingData } from '../types/listing';

import { useListingsStore } from '@/stores/useListingStore';

type UseListingFormHookInput = {
  initialValues?: Partial<ListingData>;
};

const { createListing } = useListingsStore.getState();

type UseListingFormHook = (p: UseListingFormHookInput) => {
  values: ListingData;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  errors: FormikErrors<ListingData>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<ListingData>>;
  touched: FormikTouched<ListingData>;
  isValid: boolean;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

const ListingFormSchema = z.object({
  name: z
    .string({ required_error: 'Name is Required' })
    .max(50, 'Must be maxiumum 50 characters long')
    .min(1, 'There is no name with only one alphabet'),

  postal_address: z.object({
    street_address: z
      .string({ required_error: 'Street Address is Required' })
      .max(200, 'This is a very long address'),

    postal_code: z
      .string({ required_error: 'Postal Code is Required' })
      .regex(/\d{5}/, 'This is not a valid postal code'),

    city: z
      .string({ required_error: 'City Name is Required' })
      .regex(
        /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
        'This is not a valid city name',
      ),

    country: z
      .string({ required_error: 'Country Name is Required' })
      .regex(
        /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
        'This is not a valid country name',
      ),
  }),

  description: z.string(),
  latest_price_eur: z.number(),
  surface_area_m2: z.number(),
  rooms_count: z.number(),
  contact_phone_number: z.string(),
  building_type: z.string(),
});

export const useListingForm: UseListingFormHook = ({ initialValues }) => {
  const navigate = useNavigate();

  const formik = useFormik<ListingData>({
    onSubmit: async (values) => {
      await createListing(values);
      navigate('/listings');
    },
    validationSchema: toFormikValidationSchema(ListingFormSchema),
    initialValues: initialValues ?? {
      name: '',
      postal_address: {
        street_address: '',
        postal_code: '',
        city: '',
        country: '',
      },
      description: '',
      building_type: 'STUDIO',
      latest_price_eur: 0,
      surface_area_m2: 0,
      rooms_count: 0,
      bedrooms_count: 0,
      contact_phone_number: '',
    },
  });

  return formik;
};
