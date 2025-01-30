import { useNavigate } from "react-router-dom"
import * as S from "./style"

function CardSwiper(prosp){

  const navigate = useNavigate()

  function EntraLanche(){
    navigate("/lanche");
  }
    return(
        <>
          <S.ContainerSwiper>
            <div className="swiper-container">
                <div className="card-swiper">
                    <img src={prosp.src} />
                    <a onClick={EntraLanche}>{prosp.titulo}</a>
                </div>
            </div>
          </S.ContainerSwiper>
        </>
    )
}

export default CardSwiper