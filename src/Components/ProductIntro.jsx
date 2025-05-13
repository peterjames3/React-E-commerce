
import ProductsOnOffer from './ProductsOnOffer'
const ProductIntro = () => {
  return (
    <section className="w-full">
      <div className="grid min-h-[15rem] grid-cols-1 gap-4 p-4 md:grid-cols-12">
        <div className="md:col-span-9">
          <ProductsOnOffer />
        </div>

        {/* Right Sidebar - Help Center, Return Policy, Call */}
        <div className="bg-cardBg font-Rubik flex flex-col justify-center space-y-6 p-4 shadow-md shadow-black md:col-span-3">
          <div className="rounded bg-white p-3 shadow-lg">
            <h2 className="text-xl font-bold">EXCLUSIVE OFFERS</h2>
            <p>Unbeatable prices on select products. Shop now and save big!</p>
          </div>
          <div className="rounded bg-white p-3 shadow-lg">
            <h2 className="text-xl font-bold">EASY INSTALLATION</h2>
            <p>
              We offer quick and professional delivery services with every
              purchase
            </p>
          </div>
          <div className="rounded bg-white p-3 shadow-lg">
            <h2 className="text-xl font-bold">SHOP WITH US</h2>
            <p>Discover a variety of quality products.</p>
          </div>
          <div className="rounded bg-white p-3 text-center shadow-lg">
            <h2 className="text-2xl font-bold">To order call</h2>
            <p className="text-3xl font-bold">+254 768283966</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductIntro
