import { useState } from "react";

export function useForm() {
  const [nameImage, setNameImage] = useState("");
  const [successSignUp, setSuccessSignUp] = useState(false);
  let inputBase = "paragraph field-user";
  let uploadFile = "label-file_upload";
  let nameFile = "label-file_clue";
  let buttonBase = "button-sign-up";
  return {
    setNameImage,
    setSuccessSignUp,
    successSignUp,
    inputBase,
    uploadFile,
    nameFile,
    nameImage,
    buttonBase,
  };
}
