import React from 'react';
import { FormikErrors, FormikTouched, useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ListingData } from '../types/listing';

import { ListingFormSchema } from '@/validators/createListing';

type UseListingFormHookInput = {
  onSubmit: (values: ListingData) => Promise<void>;
  initialValues?: Partial<ListingData>;
};

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

export const useListingForm: UseListingFormHook = ({
  initialValues,
  onSubmit,
}) => {
  const formik = useFormik<ListingData>({
    onSubmit: async (values) => {
      await onSubmit(values);
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
