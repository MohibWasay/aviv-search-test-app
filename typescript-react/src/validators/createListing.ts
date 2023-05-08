import { z } from 'zod';

export const ListingFormSchema = z.object({
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
