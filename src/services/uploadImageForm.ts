type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => void;

export const onChangeUser = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: SetFieldValue,
  setNameImage: (value: string) => void
): void => {
  const files = event.currentTarget.files;
  if (!files) return;
  files[0]?.name && setNameImage(files[0].name);
  setFieldValue("photo", files[0]);
};
