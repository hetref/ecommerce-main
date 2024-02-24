import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/prod-carousal.css'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import s1image from '../images/headerbg.png'

const ProductSlider = () => {
  const swiperParams = {
    modules: [Autoplay, FreeMode, Pagination],
    allowTouchMove: true,
    spaceBetween: 45,
    speed: 800,
    freeMode: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

    breakpoints: {
      1100: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    },
  }
  return (
    <>
      <h2 className="ps-title">Featured Products</h2>
      <Swiper {...swiperParams} className="prod-carousal">
        <SwiperSlide className="slide-item">
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          {' '}
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div>
            <img src={s1image} alt="" />
            <section className="prod-info">
              <h3 className="prod-title">Product 1</h3>
              <div className="prod-price">₹2000</div>
              <button className="buy-now">
                <span class="noselect">BUY NOW</span>
              </button>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductSlider
