import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './../styles/AestheticSlider.css';
import { Navigation, Autoplay } from 'swiper/modules';
import '../styles/AestheticSlider.css';
import s1image from '../images/headerbg.png';

const AestheticSlider = () => {
  const s1bg = [
    {
      color: '#fff',
      backgroundImage: `url(${s1image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    },
    // Repeat the entry for additional sliders
    {
      color: '#fff',
      backgroundImage: `url(${s1image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    },
    {
      color: '#fff',
      backgroundImage: `url(${s1image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    },
    {
      color: '#fff',
      backgroundImage: `url(${s1image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
    },
  ]

  //FETCH DATA FROM DATABASE
  // const [slidesData, setSlidesData] = useState([]);

  // useEffect(() => {
  //     // Fetch data from your database API
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('your-api-endpoint');
  //             const data = await response.json();
  //             setSlidesData(data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  const swiperParams = {
    navigation: true,
    allowTouchMove: false,
    modules: [Autoplay, Navigation],
    className: 'aesthetic',
    speed: 1000,
    effect: 'slide',
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          slide.classList.remove('active')
        })
        const activeSlide = document.querySelector('.swiper-slide-active')
        activeSlide.classList.add('active')
      },
    },
  }
  return (
    <>
      <Swiper {...swiperParams}>
        {s1bg.map((style, index) => (
          <SwiperSlide key={index} style={style}>
            <section className="slide-content">
              <h1 className="hanson slide-title">
                Category Name <br />
                <span className="slide-subtitle">2024</span>
              </h1>
              <p className="slide-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin
                vehicula sem et tincidunt. Cras in placerat enim. Donec interdum nisl vel malesuada
                molestie. Aliquam.
              </p>
              <button className="slide-button">
                <span className="noselect">VIEW PRODUCTS</span>
              </button>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default AestheticSlider
