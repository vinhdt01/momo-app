function Banner() {
  return (
    <div>
    
      <div className="w-[100%] h-auto bg-[#ffe6a9] flex justify-center ">
        <div className="w-[990px] h-auto bg-[#070e24] flex justify-center items-start ">
          <div className="max-w-[650px] h-auto justify-center ">
            <img
            alt="img"
              className="w-[100%] h-auto  object-contain"
              src="https://cdn.pnj.io/images/promo/134/banner-Phong-Thuy-2022-768x450.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-auto bg-[#070e24] flex justify-center ">
        <div className="w-[990px] h-auto bg-[#070e24] flex flex-col justify-center items-start ">
          <div className="w-[100%] h-auto flex flex-col items-center ">
            <img
            alt="img"
              className="mt-[10px] h-[40px] align-middle object-contain"
              src="https://cdn.pnj.io/images/image-update/2022/07/feng-shui-2022/Asset2.png"
            />
            <p className="text-center text-[17px] px-[10px] py-[15px] text-[#fff] leading-[23px]">
              Trải qua hàng triệu năm dưới lòng đất, đá quý phải trải qua nhiều
              quá trình địa chất phức tạp (magma, trầm tích, biến chất) để hình
              thành. Hành trình của đá quý, hành trình “Tinh hoa của thời gian”
              đã sẵn sàng để bạn khám phá!
            </p>
            <p className="text-center text-[17px] px-[10px] pt-[15px]  text-[#fff] leading-[23px]">
              Như mọi loại vật chất, bạn & mỗi loại đá quý đều mang trong mình
              một cấu trúc độc đáo, tương ứng với một tần số rung động riêng.
              Khi được cộng hưởng, bạn sẽ bất ngờ với những lợi ích mà đá quý
              mang lại.
            </p>
          </div>
          <div className="w-[100%] h-auto flex flex-col items-center ">
            <img
            alt="img"
              className=" mt-[10px]  sm:h-[97px] h-[85px] mb-[8px]  align-middle object-contain"
              src="https://cdn.pnj.io/images/image-update/2022/07/feng-shui-2022/Asset3.png"
            />
            <p className="text-center text-[17px] px-[10px] py-[10px] text-[#fff] leading-[23px]">
              Giống như quá trình kết tinh đá quý, bạn cũng phải trải qua những
              thử thách, biến cố của thời gian để mài giũa nên bạn của hiện tại:
              Sắc sảo & Độc nhất.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Banner;
