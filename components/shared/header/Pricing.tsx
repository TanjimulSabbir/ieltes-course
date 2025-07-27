import MyButton from "@/components/UI/MyButton";

export default function CoursePricing() {
  return (
    <div data-device-type="desktop">
      <div className="w-full py-4 md:px-4 md:h-auto" id="variant">
        <div className="relative md:static">
          <div className="flex flex-col w-full">
            {/* Price & Discount */}
            <div className="flex items-center justify-between md:flex-col md:items-start">
              <div className="md:mb-3">
                <div className="inline-block text-2xl font-semibold text-black">
                  ৳3850
                </div>
                <span className="inline-flex items-center">
                  <del className="ml-2 text-base font-normal text-gray-500 md:text-xl">
                    ৳5000
                  </del>
                  <div className="inline-block ml-2">
                    <p className="text-red-600 font-medium text-sm md:text-base">
                      ১১৫০ ৳ ছাড়
                    </p>
                  </div>
                </span>
              </div>
            </div>

            {/* Spacer or Additional Controls (if needed) */}
            <div className="flex items-center justify-between mb-2"></div>

            {/* Buy Button */}
            <MyButton>কোর্সটি কিনুন</MyButton>
          </div>

          {/* Optional absolute positioned element */}
          <div className="absolute md:static top-[-45px] left-0">
            <div>{/* Any element you want here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
