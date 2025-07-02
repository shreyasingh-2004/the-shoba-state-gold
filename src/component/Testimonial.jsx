import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "M Shakir Khan",
    content: "Food quality is very good.Also I want to share review on hotel staff,supportive behavior and hospitality are very good."
  },
  {
    name: "Surender Bhatti",
    content: "The staff at the grand shoba hotel were incredibly welcoming and helpful throughout our stay room was very clean and comfortable."
  },
  {
    name: "Satyam Kumar",
    content: "Food was awesome , very tasty and service was also better. I would like thank to all staff . Good manners. 🤝🤝🙌"
  },
  {
    name: "Subodh Nayak",
    content: "𝐕𝐞𝐫𝐲 𝐧𝐞𝐚𝐫 𝐭𝐨 𝐀𝐢𝐫𝐩𝐨𝐫𝐭. 𝐓𝐡𝐞𝐲 𝐜𝐚𝐧 𝐛𝐨𝐨𝐤 𝐭𝐡𝐞 𝐫𝐨𝐨𝐦 𝐛𝐲 𝐩𝐡𝐨𝐧𝐞. 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐢𝐬 𝐯𝐞𝐫𝐲 𝐠𝐨𝐨𝐝. 𝐑𝐨𝐨𝐦 𝐚𝐥𝐬𝐨 𝐢𝐧 𝐧𝐞𝐠𝐥𝐢𝐠𝐢𝐛𝐥𝐞 𝐩𝐫𝐢𝐜𝐞."
  },
  {
    name: "Naveen Yadav",
     content: "Great place to stay & conducting meetings.Food quality is very good  tasty.\nRegards,\nNaveen Yadav\nWockhardt Ltd"
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-slider-wrapper mx-auto">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
          <div className="testimonial-card">
            <p className="testimonial-text">
              {testimonial.content.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="testimonial-name">— {testimonial.name}</div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
