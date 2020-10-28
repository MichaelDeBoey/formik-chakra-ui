import { Button, ButtonProps } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type SubmitButtonProps = ButtonProps & { disableIfError?: boolean };

export const SubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, colorScheme = 'teal', disableIfError, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      type="submit"
      isLoading={isSubmitting}
      {...rest}
      colorScheme={colorScheme}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
