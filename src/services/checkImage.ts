export function checkSizeImage(value: Blob): any {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(value);
    reader.onload = function (value) {
      const img = new Image();
      const temp = value?.target?.result;

      if (typeof temp === "string") {
        !temp.includes("image") && resolve(true);
        img.src = temp;
      }

      img.onload = function () {
        const minWidth = img.width;
        const minHeight = img.height;
        resolve(minWidth > 70 && minHeight > 70);
      };
    };
  });
}
