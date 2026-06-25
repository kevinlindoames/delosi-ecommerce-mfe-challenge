export type CheckoutFormValues = {
  fullName: string;
  email: string;
  address: string;
};

export type CheckoutFormProps = {
  isSubmitting?: boolean;
  onSubmit: (values: CheckoutFormValues) => void;
};