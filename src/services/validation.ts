import * as yup from "yup";
import { checkSizeImage } from "./checkImage";

const nameRegexEmail =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const nameRegexPhone = /^[\+]{0,1}380([0-9]{9})$/;

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg"];
const FILE_SIZE = 5242880;

export let schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name is too short")
    .max(60, "Name is too long"),
  email: yup
    .string()
    .required("E-mail is required")
    .min(2, "E-mail is too short")
    .max(100, "E-mail is too long")
    .email("Invalid E-mail")
    .matches(nameRegexEmail, "E-mail is not valid"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(nameRegexPhone, "Phone is not valid"),
  photo: yup
    .mixed()
    .required("Photo is required")
    .test(
      "fileSize",
      "File Size is too large",
      (value: any) => value.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported File Format", (value: any) =>
      SUPPORTED_FORMATS.includes(value.type)
    )
    .test("minSize", "min size image must be at least 70х70", (value: any) => {
      return checkSizeImage(value);
    }),
  position_id: yup.string().required("Position is required"),
});
