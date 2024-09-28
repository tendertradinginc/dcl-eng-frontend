const uploadImageToImgBB = async (imageFile) => {
  if (!imageFile) {
    return;
  }

  const apiKeys = [
    "5a7a802c2424f1614a4f152452915832",
    "9e1b81ca81cbceacdcca8a447cc16d02",
    "0da602928a1b35b2309686a881ab0557",
    "0d3061733aec759522fb2c6746aa447d",
  ];

  const formData = new FormData();
  formData.append("image", imageFile);

  for (let apiKey of apiKeys) {
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();
      if (data.status === 200) {
        const imageUrl = data.data.url;
        return imageUrl;
      } else {
        console.error("Image upload failed for API key:", apiKey);
      }
    } catch (error) {
      console.error("Error uploading image with API key:", apiKey, error);
    }
  }

  // If all API keys fail
  console.error("All API keys failed. Could not upload the image.");
  return null;
};

export { uploadImageToImgBB };

// const uploadImageToImgBB = async (imageFile) => {
//   if (!imageFile) {
//     return;
//   }
//   const apiKey = "493b024a5f0d80b1f356d2614eb2d9cd";
//   const formData = new FormData();
//   formData.append("image", imageFile);

//   try {
//     const response = await fetch(
//       "https://api.imgbb.com/1/upload?key=" + apiKey,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await response.json();
//     if (data.status === 200) {
//       const imageUrl = data.data.url;
//       return imageUrl;
//     } else {
//       console.error("Image upload failed");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error uploading image: ", error);
//     return null;
//   }
// };

// export { uploadImageToImgBB };
