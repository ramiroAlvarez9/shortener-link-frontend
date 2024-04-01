import { Button } from "flowbite-react";
import Link from "next/link";

interface Props {

    urlImageLink: string;
    title: string;
    buttonTitle: string;
    href: string;

}

export default function Card({ urlImageLink, title, buttonTitle, href }: Props) {
    return (
        <>
            <div style={{ width: '85%', height: '20%' }} className="home__card border border-solid border-gray-300 shadow-sm rounded mt-10 flex ">

                <div className="flex items-center justify-center w-1/2">
                    <img src={urlImageLink} alt="img-link-short" className="w-1/2 h-1/2 " />
                </div>
                <div >

                    <div className="card__titleButtonContainer h-full flex flex-col items-center justify-center">
                        <h3 className="card__title" style={{ fontWeight: 700 }}>
                            {title}
                        </h3>
                        <Link href={ `${href}` } >
                            <Button outline gradientDuoTone="purpleToBlue" className="mt-10">
                                {buttonTitle}
                            </Button>
                        </Link>
                    </div>
                </div>


            </div>


        </>
    );
}
