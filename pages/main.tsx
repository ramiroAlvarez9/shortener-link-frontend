import HorizontalCard from "@/app/components/HorizontalCard";


export default function Main() {
  return (
    <>
      <section className="home__section flex justify-center w-screen h-screen lg:w-4/5" >

        <div  className="home__section--container h-full w-3/4 flex items-center flex-col sm:h-1/2  ">

          <h1 className="home__title mt-10 sm:mt-9" style={{ fontSize: '2.0rem', fontWeight: 700 }}  >
            Your <br />links <br />platform.
          </h1>
          
          <HorizontalCard
            urlImageLink="https://images.vexels.com/media/users/3/136294/isolated/preview/4172fc9833fe18b5f8669b148713a189-link-icon.png"
            title="Create your link"
            buttonTitle="Create"
            href = '/createlink'
          />
          <HorizontalCard
            urlImageLink="https://images.vexels.com/media/users/3/136294/isolated/preview/4172fc9833fe18b5f8669b148713a189-link-icon.png"
            title="See your links"
            buttonTitle="View "
            href = '/links'
          />
          

        </div>
      

      </section>


    </>
  );
}
