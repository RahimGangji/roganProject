import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { team_data } from '../../data';

const team_items = team_data.filter(team => team.about_agn);

const SliderTeam = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), [])
  return (
    <Swiper
      className="team-classic-slider"
      loop={loop}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        550: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }}
    >
      {team_items.map((item) => (
        <SwiperSlide key={item.id} className="item">
          <div className="single-team-member">
            <div className="wrapper">
              <div className="img-box">
                <img src={item.img} alt="" />
              </div>
              <div className="info-meta">
                <h6 className="name">{item.name}</h6>
                <span>{item.title}</span>
              </div>
              <div className="hover-content">
                <ul>
                  {item.social_links.map((link, i) => (
                    <li key={i}>
                      <a href={link.link} target={"_blank"} rel="noreferrer">
                        <i className={link.icon} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTeam;