import { BsArrowUpRight } from 'react-icons/bs';
import ProductCard from './ProductCard';
import { ProductType } from '@/data/types';

interface CollectionsProps {
  products: ProductType[];
}

function BestSeller({ products }: CollectionsProps) {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="space-y-3">
            <p className="font-medium text-primary">Nouvelles Collections</p>
            <h1 className="2xl:text-7xl text-3xl font-semibold lg:text-5xl">
              Nos Meilleures Ventes
            </h1>
          </div>
          <div className="md:w-[50%] lg:w-[30%]">
            <div className="text-sm text-neutral-500">
              <p>
                La mode est dans le ciel, dans la rue, la mode a à voir avec des
                idées, la façon dont nous vivons, ce qui se passe. Découvrez notre
                nouvelle collection!
              </p>
            </div>
            <div className="flex cursor-pointer items-center text-primary underline">
              Découvrez nos Collections
              <div className="border-b border-primary pl-2">
                <BsArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3 2xl:gap-10">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
