import { Button } from "flowbite-react";
import Link from "next/link";

interface Props {
  urlImageLink: string;
  title: string;
  buttonTitle: string;
  href: string;
}

export default function Card({
  urlImageLink,
  title,
  buttonTitle,
  href,
}: Props) {
  return (
    <>
      <div
        //style={{ width: '85%', height: '20%' }}

        className="home__card border border-solid border-gray-300 shadow-sm h-1/5 w-5/6 rounded mt-10 flex sm:h-3/4 sm:w-2/3 sm:mt-7 sm:mb-4 "
      >
        <div
          style={{ borderRight: "1px solid #ede8e8" }}
          className="flex items-center justify-center w-3/4 "
        >
          <img src={urlImageLink} alt="img-link-short" className="w-10 h-10 " />
        </div>

        
          <div className="card__titleButtonContainer h-full w-full flex flex-col items-center justify-center ">
            <h3 className="card__title" style={{ fontWeight: 700 }}>
              {title}
            </h3>

            <Link href={`${href}`}>
              <Button
                outline
                gradientDuoTone="purpleToBlue"
                className="mt-10 sm:mt-2"
              >
                {buttonTitle}
              </Button>
            </Link>
          </div>
        
      </div>
    </>
  );
}
