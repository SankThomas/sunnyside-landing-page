import arrow from "../images/icon-arrow-down.svg"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1 className="text-4xl uppercase text-white pt-20 text-center tracking-widest font-extrabold md:text-5xl xl:text-6xl">
            We are creatives
          </h1>
          <div>
            <img src={arrow} alt="" className="mx-auto mt-20" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
