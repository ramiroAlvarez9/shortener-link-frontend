import { NextPage } from "next";
import CreateLinkForm from "@/app/components/CreateLinkForm";
interface Props {}

const Createlink: NextPage<Props> = ({}) => {
  return (
    <>
      <section className="createlink__section flex justify-center">
        
        <div
          style={{ width: "75%", height: "100%" }}
          className="createlink__container flex flex-col justify-start mt-10 "
        >

          <h2 style={{ fontWeight: 700 ,fontSize: '30px' }} className="createlink__title ">
            Create new
          </h2>

          
          <CreateLinkForm />



        </div>
        
      </section>
    </>
  );
};

export default Createlink;
