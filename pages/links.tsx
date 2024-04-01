import { NextPage } from "next";
import CTALinkCard from "@/app/components/CTALinkCard";

interface Props {}

const Links: NextPage<Props> = ({}) => {
  return (
    <>
      <section  className="section__links flex justify-center">
       
       <div style={{width: '75%', height: '100%'}} className="links__container">    
        <h2 style={{ fontWeight: 700 ,fontSize: '30px' }} className="createlink__title mt-10">
            Links
        </h2>
          <CTALinkCard />
        </div>
      </section>
    </>
  );
};

export default Links;
