import React from "react";
import Accordion from "@/components/accordion2";
import filter from "@/../public/images/Filter_clear.png";
import Image from "next/image";
import s from "./index.module.scss";
import productsList from '@/data/products/products.json';

const Filter = ({ setColorFilter, setProducerFilter, setCountryFilter }) => {
  const products = Object.values(productsList);

  // Calculate unique colors, producers, and countries
  const colors = [...new Set(products.flatMap(product => product.colors))];
  const producers = [...new Set(products.map(product => product.producer))];
  const countries = [...new Set(products.map(product => 
    product.features.find(feature => feature.label === 'Країна виробника')?.value
  ))];

  return (
    <>
      {/* Add other components here... */}
      <Accordion
        sx={{ boxShadow: 'none', border: 'none' }}
        AccordionTitle="Колір"
        AccordionText="Колір"
        textClassName={s.filter_text}
        titleClassName={s.filter_title}
      >
        {colors.map((color, index) => (
          <div key={index}>
            <input type="checkbox" id={`color-${index}`} value={color} onChange={(e) => {
              if (e.target.checked) {
                setColorFilter(prev => [...prev, e.target.value]);
              } else {
                setColorFilter(prev => prev.filter(color => color !== e.target.value));
              }
            }} />
            <label htmlFor={`color-${index}`}>{color}</label>
          </div>
        ))}
      </Accordion>

      <Accordion
        sx={{ boxShadow: 'none', border: 'none' }}
        AccordionTitle="Виробник"
        AccordionText="Виробник"
        textClassName={s.filter_text}
        titleClassName={s.filter_title}
      >
        {producers.map((producer, index) => (
          <div key={index}>
            <input type="checkbox" id={`producer-${index}`} value={producer} onChange={(e) => {
              if (e.target.checked) {
                setProducerFilter(prev => [...prev, e.target.value]);
              } else {
                setProducerFilter(prev => prev.filter(producer => producer !== e.target.value));
              }
            }} />
            <label htmlFor={`producer-${index}`}>{producer}</label>
          </div>
        ))}
      </Accordion>

      <Accordion
        sx={{ boxShadow: 'none', border: 'none' }}
        AccordionTitle="Країна"
        AccordionText="Країна"
        textClassName={s.filter_text}
        titleClassName={s.filter_title}
      >
        {countries.map((country, index) => (
          <div key={index}>
            <input type="checkbox" id={`country-${index}`} value={country} onChange={(e) => {
              if (e.target.checked) {
                setCountryFilter(prev => [...prev, e.target.value]);
              } else {
                setCountryFilter(prev => prev.filter(country => country !== e.target.value));
              }
            }} />
            <label htmlFor={`country-${index}`}>{country}</label>
          </div>
        ))}
      </Accordion>
    </>
  );
};

export default Filter;
