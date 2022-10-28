import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Items({ title , price , photo , url , sold , rating}) {
    return (<a href={url} className="md:w-[225px] md:h-auto w-[150px] h-[290px]  bg-[#fff] rounded-lg">

<div className="relative">
      <img className="rounded-t-[10px] " src={photo} alt=''/>
      <img alt='ds' className='w-[30px] h-4 absolute bottom-2 left-2' src='https://cdn.pnj.io/images/image-update/2022/10/pnjfast/PNJfast-Giaotrong3h.svg'/>
</div>
        <div className="flex flex-col justify-between h-[130px] px-[5px] pt-[5px]">
          <div>
            <p className="text-center h-[35px] overflow-hidden sm:h-auto md:text-[11px] text-[13px] text-[#282828] leading-[18px]">{title}</p>
            <p className="text-center text-[#c48c46]  text-[16px]">{price ? <span>{new Intl.NumberFormat('de-DE').format(price)} đ</span> : <span>Liên hệ</span>}</p>
          </div>
          <div className='flex justify-between items-center pb-2 px-[5px]  text-[#000000]'>
                 <div className='text-[11px]'> 
                {rating ? (<>
                  <FontAwesomeIcon icon={faStar} className="text-[11px] text-[#ffc107]"/>
                  <span className="text-[11px] ">{rating}</span></>) : (<></>)}
                  </div>
               <div className='text-[11px]'>{sold ? <span>{sold} đã bán</span> :<></>}</div>
          </div>
        </div>
    </a>  );
}

export default Items;