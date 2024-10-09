import Image from "next/image";
export const PageNotFound = () => {
  return (
    <div className="error-404">
      <p>not-found</p>
      <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};
