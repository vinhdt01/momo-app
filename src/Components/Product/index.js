import React from 'react';
import { useRef  } from 'react';

import Items from '../Items/Items'
function Product() {
  const data = [ 
    {
      "id": "GMDDDDW000639",
      "fate":"kim",
      "title": "Mặt dây chuyền kim cương Vàng trắng 14K PNJ DDDDW000639",
      "mainMaterial": "Kim cương",
      "brand": "PNJ",
      "price": 17213000,
      "url":"https://www.pnj.com.vn/mat-day-chuyen-kim-cuong-vang-trang-14k-pnj-ddddw000639.html",
      "status": " Còn hàng ",
      "weight": "2.25083 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/126/gmddddw000639-mat-day-chuyen-kim-cuong-vang-trang-14k-pnj-01.png",
      "rating": "5 (2) ",
      "sold": " 219 ",
      "gender": "Nữ"
    },
  
    {
      "id": "GMTP00W000028",
      "fate":"thủy",
      "title": "Mặt dây chuyền Vàng trắng 14K đính đá Topaz PNJ TP00W000028",
      "mainMaterial": "Topaz",
      "brand": "PNJ",
      "price": 6699000,
      "status": " Còn hàng ",
      "weight": "7.1371 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/124/gmtp00w000028-mat-day-chuyen-vang-trang-14k-dinh-da-topaz-pnj-01.png",
      "rating": "5 (1) ",
      "sold": " 46  ",
      "gender": "Nữ"
    },
    {
      "id": "GBDD00W060160",
      "fate":"kim",
      "title": "Bông tai Kim cương Vàng trắng 18K PNJ DD00W060160",
      "mainMaterial": "Kim cương",
      "brand": "PNJ",
      "price": 49900000,
      "status": "",
      "weight": "8.785 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/129/gbdd00w060160-bong-tai-kim-cuong-vang-trang-18k-pnj-01.png",
      "rating": "",
      "sold": " 4 ",
      "gender": "Nữ"
    },
    {
      "id": "GLTPXMW000080",
      "fate":"thủy",
      "title": "Lắc tay Vàng trắng 14K đính đá Topaz PNJ TPXMW000080",
      "mainMaterial": "Topaz",
      "brand": "PNJ",
      "price": 24475000,
      "status": " Còn hàng ",
      "weight": "32.98148 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/129/gltpxmw000080-lac-tay-vang-trang-14k-dinh-da-topaz-pnj-1.png",
      "rating": "5 (1) ",
      "sold": " 118 ",
      "gender": "Nữ"
    },
    {
      "id": "GNRBXMX000014",
      "fate":"hỏa",
      "title": "Nhẫn Vàng 18K đính đá Ruby PNJ RBXMX000014",
      "mainMaterial": "Ruby",
      "brand": "PNJ",
      "price": 13411000,
      "status": " Còn hàng ",
      "weight": "13.07826 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/120/gnrbxmx000014-nhan-vang-18k-dinh-da-ruby-pnj.png",
      "rating": "5 (1) ",
      "sold": " 27 ",
      "gender": "Nữ"
    },
    {
      "id": "GMDDDDW060226",
      "fate":"kim",
      "title": "Mặt dây chuyền Kim cương Vàng trắng 18K PNJ DDDDW060226",
      "mainMaterial": "Kim cương",
      "brand": "PNJ",
      "price": 25500000,
      "status": " Còn hàng ",
      "weight": "3.25654 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/123/gmddddw060226-mat-day-chuyen-kim-cuong-vang-trang-18k-pnj-01.png",
      "rating": "    5 (3) ",
      "sold": " 25 ",
      "gender": "PNJ"
    },
    {
      "id": "GNZTXMW000121",
      "fate":"mộc",
      "title": "Nhẫn Vàng trắng 10K đính đá Liquid Cabochon PNJ Sắc Xuân ZTXMW000121",
      "mainMaterial": "Sythetic",
      "brand": "PNJ",
      "price": 3576000,
      "status": " Còn hàng ",
      "weight": "4.90477 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/134/gnztxmw000121-nhan-vang-trang-10k-dinh-da-liquid-cabochon-swarovski-pnj-sac-xuan-01.png",
      "rating": "5 (2) ",
      "sold": " 500+  ",
      "gender": "Nữ"
    },
 
    {
      "id": "GBDDDDW001341",
      "fate":"kim",
      "title": "Bông tai kim cương Vàng trắng 14K PNJ DDDDW001341",
      "mainMaterial": "Kim cương",
      "brand": "PNJ",
      "price": 38162000,
      "status": " Còn hàng ",
      "weight": "8.69523 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/122/gbddddw001341-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png",
      "rating": "5 (3) ",
      "sold": " 27 ",
      "gender": "Nữ"
    },

    {
      "id": "GLTPXMW000073",
      "fate":"thủy",
      "title": "Lắc tay Vàng trắng 14K đính đá Topaz PNJ TPXMW000073",
      "mainMaterial": "Topaz",
      "brand": "PNJ",
      "price": 23065000,
      "status": " Còn hàng ",
      "weight": "27.59061 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/100/gltpxmw000073-lac-tay-vang-trang-14k-pnj-01.png",
      "rating": "5 (6) ",
      "sold": " 78 ",
      "gender": "Nữ"
    },
    {
      "id": "GMCTXMY000263",
      "fate":"thổ",
      "title": "Mặt dây chuyền Vàng 18K đính đá Citrine PNJ Sắc Xuân CTXMY000263",
      "mainMaterial": "Citrine",
      "brand": "PNJ",
      "price": 7384000,
      "status": " Còn hàng ",
      "weight": "6.5187 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/69/gmctxmy000263-mat-day-chuyen-vang-18k-dinh-da-citrine-pnj-sac-xuan-ctxmy000263-4001.png",
      "rating": "5 (2) ",
      "sold": " 324 ",
      "gender": "Nữ"
    },
    {
      "id": "GLCTXMY000053",
      "fate":"thổ",
      "title": "Lắc tay Vàng 18K đính đá Citrine PNJ CTXMY000053",
      "mainMaterial": "Citrine",
      "brand": "PNJ",
      "price": 27208000,
      "status": " Còn hàng ",
      "weight": "30.24564 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/82/glctxmy000053-lac-tay-vang-18k-dinh-da-citrine-pnj.png",
      "rating": " 5 (6) ",
      "sold": " 64 ",
      "gender": "Nữ"
    },
    {
      "id": "GMTPXMW000164",
      "fate":"thủy",
      "title": "Mặt dây chuyền Vàng trắng 14K đính đá Topaz PNJ TPXMW000164",
      "mainMaterial": "Topaz",
      "brand": "PNJ",
      "price": 4558000,
      "status": " Còn hàng ",
      "weight": "4.0105 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/104/gmtpxmw000164-mat-day-chuyen-vang-trang-14k-dinh-da-topaz-pnj.png",
      "rating": "5 (2) ",
      "sold": " 2000+ ",
      "gender": "Nữ"
    },
   

    {
      "id": "GBRBXMY000327",
      "fate":"hỏa",
      "title": "Bông tai Vàng 18K đính đá Ruby PNJ RBXMY000327",
      "mainMaterial": "Ruby",
      "brand": "PNJ",
      "price": 11305000,
      "status": " Còn hàng ",
      "weight": "9.12616 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/128/gbrbxmy000327-bong-tai-vang-18k-dinh-da-ruby-pnj-1.png",
      "rating": "",
      "sold": "47",
      "gender": "Nữ"
    },

    {
      "id": "GMNP00Y000001",
      "fate":"mộc",
      "title": "Mặt dây chuyền Vàng 14K đính đá Peridot PNJ Sắc Xuân NP00Y000001",
      "mainMaterial": "Peridot",
      "brand": "PNJ",
      "price": 4135000,
      "status": "",
      "weight": "2.005 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/134/gmnp00y000001-mat-day-chuyen-vang-14k-dinh-da-peridot-pnj-sac-xuan-01.png",
      "rating": "5 (4) ",
      "sold": " 189 ",
      "gender": "Nữ"
    },
    {
      "id": "GBNP00Y000007",
      "fate":"mộc",
      "title": "Bông tai Vàng 14K đính đá Peridot PNJ Sắc Xuân NP00Y000007",
      "mainMaterial": "Peridot",
      "brand": "PNJ",
      "price": 8308000,
      "status": " Còn hàng ",
      "weight": "7.9976 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/134/gbnp00y000007-bong-tai-vang-14k-dinh-da-peridot-pnj-sac-xuan-01.png",
      "rating": "5 (1) ",
      "sold": " 113 ",
      "gender": "Nữ"
    },
    {
      "id": "GCRBXMY000040",
      "fate":"hỏa",
      "title": "Dây cổ Vàng 18K đính đá Ruby PNJ RBXMY000040",
      "mainMaterial": "Ruby",
      "brand": "PNJ",
      "price": 9777000,
      "status": " Còn hàng ",
      "weight": "9.54379 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/121/gcrbxmy000040-day-co-vang-18k-dinh-da-ruby-pnj-01.png",
      "rating": "5 (1) ",
      "sold": " 68 ",
      "gender": "Nữ"
    },
    {
      "id": "GNNPXMY000013",
      "fate":"mộc",
      "title": "Nhẫn Vàng 14K đính đá Peridot PNJ Sắc Xuân NPXMY000013",
      "mainMaterial": "Peridot",
      "brand": "PNJ",
      "price": 7977000,
      "status": " Còn hàng ",
      "weight": "8.48907 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/69/gnnpxmy000013-nhan-vang-14k-dinh-da-peridot-pnj-sac-xuan-npxmy000013-01.png",
      "rating": "5 (2) ",
      "sold": " 209 ",
      "gender": "Nữ"
    },
    {
      "id": "GNCTXMC000021",
      "fate":"thổ",
      "title": "Nhẫn Vàng 18K đính đá Citrine PNJ CTXMC000021",
      "mainMaterial": "Citrine",
      "brand": "PNJ",
      "price": 10755000,
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/300/300/detailed/126/gnctxmc000021-nhan-vang-18k-dinh-da-citrine-pnj-01.png",
      "status": " Còn hàng ",
      "weight": "10.58679 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "rating": "5 (1) ",
      "sold": " 27 ",
      "gender": "Nữ"
    },
    {
      "id": "GBCTXMY000165",
      "fate":"thổ",
      "title": "Bông tai Vàng 18K đính đá Citrine PNJ Sứ giả mùa xuân CTXMY000165",
      "mainMaterial": "Citrine",
      "brand": "PNJ",
      "price": 11728000,
      "status": " Còn hàng ",
      "weight": "12.81105 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/115/gbctxmy000165-bong-tai-vang-18k-dinh-da-citrine-pnj-01.png",
      "rating": "5 (1) ",
      "sold": " 73 ",
      "gender": "Nữ"
    },
    {
      "id": "GBRBXMY000316",
      "fate":"hỏa",
      "title": "Bông tai Vàng 18K đính đá Ruby PNJ RBXMY000316",
      "mainMaterial": "Ruby",
      "brand": "PNJ",
      "price": 13636000,
      "status": " Còn hàng ",
      "weight": "12.59636 phân",
      "color": "(Màu sắc/ Nước kim cương)",
      "urlPhoto": "https://cdn.pnj.io/images/thumbnails/485/485/detailed/121/gbrbxmy000316-bong-tai-vang-18k-dinh-da-ruby-pnj-1.png",
      "rating": "5 (2) ",
      "sold": " 54 ",
      "gender": "Nữ"
    }
  ]
const ref = useRef()
let kim = [];
let moc = [];
let thuy = [];
let hoa = [];
let tho = [];
const loader = () => {
  data.map((value , index) => {
    switch (value.fate) {
      case 'kim':
        kim.push(<Items key={value.id}  price={value.price} photo={value.urlPhoto} url={value.url} sold={value.sold} rating={value.rating} title={value.title}/>)
        break;
        case 'mộc':
          moc.push(<Items key={value.id} price={value.price} photo={value.urlPhoto} sold={value.sold} rating={value.rating} title={value.title}/>)
        break;
        case 'thủy':
          thuy.push(<Items key={value.id} price={value.price} photo={value.urlPhoto} sold={value.sold} rating={value.rating} title={value.title}/>)
        break;
        case 'hỏa':
          hoa.push(<Items key={value.id} price={value.price} photo={value.urlPhoto} sold={value.sold} rating={value.rating} title={value.title}/>)
        break;
        case 'thổ':
          tho.push(<Items key={value.id} price={value.price} photo={value.urlPhoto} sold={value.sold} rating={value.rating} title={value.title}/>)
        break;
        default:
          
    }
  return index;
  })
}
loader()

    return (

 <div >
  <div className="flex flex-col items-center justify-center bg-[#1d325b] py-[10px] ">
    <a href='https://www.pnj.com.vn/trang-suc-phong-thuy/trang-suc-theo-menh/mang-kim/' className='max-w-[880px] pb-[10px]'>
      <img alt='photoss' className='w-[600px]' src='https://cdn.pnj.io/images/promo/133/Kim-Mobile.png'/>
 
    </a>
     <div className='w-[100%] h-auto  flex md:justify-center  '>
        <div className='max-w-[880px] h-auto overflow-auto  bg-[#1d325b] '>
          <div className=" grid grid-flow-col auto-cols-max gap-[10px]">
            <div ref={ref} >
            </div>
      {kim}
      {console.log(kim)}
         
      <div className='w-[0.5px] bg-[#1d325b]'></div>
    
    </div>
        </div>
        </div>
     
   </div>

   <div className="flex flex-col items-center justify-center bg-[#1d325b] py-[10px] border-[#1d325b] ">
    <a href='https://www.pnj.com.vn/trang-suc-phong-thuy/trang-suc-theo-menh/mang-moc/' className='max-w-[880px] pb-[10px]'>
      <img alt='photoss' className='w-[600px]' src='https://cdn.pnj.io/images/promo/133/MOC-Mobile.png'/>
 
    </a>
     <div className='w-[100%] h-auto  flex md:justify-center  '>
        <div className='max-w-[880px] h-auto overflow-auto  bg-[#1d325b] '>
          <div className=" grid grid-flow-col auto-cols-max gap-[10px]   ">
            <div ref={ref} >
            </div>
      {moc}
         
      <div className='w-[0.5px] bg-[#1d325b]'></div>
    
    </div>
        </div>
        </div>
     
   </div>


   <div className="flex flex-col items-center justify-center bg-[#1d325b] py-[10px] border-[#1d325b]">
    <a href='https://www.pnj.com.vn/trang-suc-phong-thuy/trang-suc-theo-menh/mang-thuy/' className='max-w-[880px] pb-[10px]'>
      <img alt='photoss' className='w-[600px]' src='https://cdn.pnj.io/images/promo/133/THUY-Mobile.png'/>
    </a>
     <div className='w-[100%] h-auto  flex md:justify-center  '>
        <div className='max-w-[880px] h-auto overflow-auto  bg-[#1d325b] '>
          <div className=" grid grid-flow-col auto-cols-max gap-[10px]   ">
            <div ref={ref} >
            </div>
      {thuy}
         
      <div className='w-[0.5px] bg-[#1d325b]'></div>
    
    </div>
        </div>
        </div>
     
   </div>


   
   <div className="flex flex-col items-center justify-center bg-[#1d325b] py-[10px] border-[#1d325b]">
    <a href='https://www.pnj.com.vn/trang-suc-phong-thuy/trang-suc-theo-menh/mang-hoa/' className='max-w-[880px] pb-[10px]'>
      <img alt='photoss' className='w-[600px]' src='https://cdn.pnj.io/images/promo/133/HOA-Mobile.png'/>
 
    </a>
     <div className='w-[100%] h-auto  flex md:justify-center  '>
        <div className='max-w-[880px] h-auto overflow-auto  bg-[#1d325b] '>
          <div className=" grid grid-flow-col auto-cols-max gap-[10px]   ">
            <div ref={ref} >
            </div>
      {hoa}
         
      <div className='w-[0.5px] bg-[#1d325b]'></div>
    
    </div>
        </div>
        </div>
     
   </div>
   <div className="flex flex-col items-center justify-center bg-[#1d325b] py-[10px]">
    <a href='https://www.pnj.com.vn/trang-suc-phong-thuy/trang-suc-theo-menh/mang-tho/' className='max-w-[880px] pb-[10px]'>
      <img alt='photoss' className='w-[600px]' src='https://cdn.pnj.io/images/promo/133/THO-Mobile_.png'/>
 
    </a>
     <div className='w-[100%] h-auto  flex md:justify-center  '>
        <div className='max-w-[880px] h-auto overflow-auto  bg-[#1d325b] '>
          <div className=" grid grid-flow-col auto-cols-max gap-[10px]   ">
            <div ref={ref} >
            </div>
      {tho}
         
      <div className='w-[0.5px] bg-[#1d325b]'></div>
    
    </div>
        </div>
        </div>
     
   </div>
 
 </div>

    )

   
}

export default Product;