import Card from "@/app/components/Card";


export default function Main() {
  return (
    <>
      <section className="home__section flex justify-center w-full">

        <div style={{ width: '75%' }} className="home__section--container flex items-center h-full  flex-col">

          <h1 className="home__title mt-10 " style={{ fontSize: '2.0rem', fontWeight: 700 }}  >
            Your <br />links <br />platform.
          </h1>

          <Card
            urlImageLink="https://images.vexels.com/media/users/3/136294/isolated/preview/4172fc9833fe18b5f8669b148713a189-link-icon.png"
            title="Create your link"
            buttonTitle="Create"
            href = '/createlink'
          />
          <Card
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
