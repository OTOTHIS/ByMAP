import { BsArrowUpRight } from 'react-icons/bs';

import { midSection } from '../data/content';

function Mid() {
  return (
    <div className="container-custom relative">
      <div className="space-y-5 md:mx-auto md:w-[80%] md:pl-20 lg:w-[70%] lg:space-y-10 2xl:max-w-3xl 2xl:space-y-12">
        <div
          className="2xl:text-8xl max-w-3xl text-3xl font-semibold md:text-4xl lg:text-6xl"
          style={{ lineHeight: '1em' }}
        >
          {midSection.headingStart}
          <span className="-rotate-[5deg] text-primary">
            {' '}
            {midSection.spanText}{' '}
          </span>
          {midSection.headingEnd}
        </div>
        <div className="md:w-[75%] lg:w-[60%] 2xl:w-[80%] 2xl:text-xl">
          {midSection.description}
        </div>
        <div className="flex  cursor-pointer items-center text-primary underline">
          Check out our Collections
          <div className="border-b border-primary pl-2">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
