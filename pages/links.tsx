import { NextPage } from "next";
import CTALinkCard from "@/app/components/CTALinkCard";

interface Props {}

const Links: NextPage<Props> = ({}) => {
  return (
    <>
      <section  className="section__links flex justify-center">
       
       <div className="links__container w-3/4 h-full">    
        <h2 style={{ fontWeight: 700 ,fontSize: '30px' }} className="createlink__title mt-10 lg:hidden
">
            Links
        </h2>
          <CTALinkCard />
        </div>
      </section>
    </>
  );
};

export default Links;
