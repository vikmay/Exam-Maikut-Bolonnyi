import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setColorFilter,
  setProducerFilter,
  setCountryFilter,
} from "@/store/features/filterActions";
import Accordion from "@/components/accordion";
import s from "./index.module.scss";
import productsList from "@/data/products/products.json";
import PriceRangeFilter from "../priceRangeFilter";

interface RootState {
  filter: {
    colorFilter: string[];
    producerFilter: string[];
    countryFilter: string[];
  };
}

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const colorFilter = useSelector(
    (state: RootState) => state.filter.colorFilter
  );
  const producerFilter = useSelector(
    (state: RootState) => state.filter.producerFilter
  );
  const countryFilter = useSelector(
    (state: RootState) => state.filter.countryFilter
  );

  const products = Object.values(productsList);

  // Calculate unique colors, producers, and countries
  const colors = [...new Set(products.flatMap((product) => product.colors))];
  const producers = [...new Set(products.map((product) => product.producer))];
  const countries = [
    ...new Set(
      products.map(
        (product) =>
          product.features.find(
            (feature) => feature.label === "Країна виробника"
          )?.value
      )
    ),
  ].filter(Boolean);

  return (
    <>
      <div className={s.filter_container}>
        <form className={s.form}>
          <Accordion
            sx={{ boxShadow: "none", border: "none", mb: "-10px" }}
            AccordionText=""
            AccordionTitle="Ціна"
            titleClassName={s.filter_title}
            textClassName={s.filter_text}
          >
            <PriceRangeFilter />
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none", mb: "-10px" }}
            AccordionTitle="Колір"
            AccordionText=""
            textClassName={s.filter_text}
            titleClassName={s.filter_title}
          >
            {colors.map((color, index) => (
              <label className={`${s.checkboxContainer}`} key={index}>
                <input
                  type="checkbox"
                  id={`color-${index}`}
                  value={color}
                  checked={colorFilter.includes(color)}
                  onChange={(e) => {
                    let newColorFilter = [...colorFilter];
                    if (e.target.checked) {
                      newColorFilter.push(e.target.value);
                    } else {
                      newColorFilter = newColorFilter.filter(
                        (color) => color !== e.target.value
                      );
                    }
                    dispatch(setColorFilter(newColorFilter));
                  }}
                />
                <span className={`${s.checkmark}`}></span>
                <span className={`${s.checkboxText}`}>{color}</span>
              </label>
            ))}
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none", mb: "-10px" }}
            AccordionTitle="Виробник"
            AccordionText=""
            textClassName={s.filter_text}
            titleClassName={s.filter_title}
          >
            {producers.map((producer, index) => (
              <label className={`${s.checkboxContainer}`} key={index}>
                <input
                  type="checkbox"
                  id={`producer-${index}`}
                  value={producer}
                  checked={producerFilter.includes(producer)}
                  onChange={(e) => {
                    let newProducerFilter = [...producerFilter];
                    if (e.target.checked) {
                      newProducerFilter.push(e.target.value);
                    } else {
                      newProducerFilter = newProducerFilter.filter(
                        (prod) => prod !== e.target.value
                      );
                    }
                    dispatch(setProducerFilter(newProducerFilter));
                  }}
                />
                <span className={`${s.checkmark}`}></span>
                <span className={`${s.checkboxText}`}>{producer}</span>
              </label>
            ))}
          </Accordion>
          <Accordion
            sx={{ boxShadow: "none", border: "none" }}
            AccordionTitle="Країна"
            AccordionText=""
            textClassName={s.filter_text}
            titleClassName={s.filter_title}
          >
            {countries.map((country, index) => (
              <label className={`${s.checkboxContainer}`} key={index}>
                <input
                  type="checkbox"
                  id={`country-${index}`}
                  value={country}
                  checked={country ? countryFilter.includes(country) : false}
                  onChange={(e) => {
                    let newCountryFilter = [...countryFilter];
                    if (e.target.checked) {
                      newCountryFilter.push(e.target.value);
                    } else {
                      newCountryFilter = newCountryFilter.filter(
                        (cntry) => cntry !== e.target.value
                      );
                    }
                    dispatch(setCountryFilter(newCountryFilter));
                  }}
                />
                <span className={`${s.checkmark}`}></span>
                <span className={`${s.checkboxText}`}>{country}</span>
              </label>
            ))}
          </Accordion>
        </form>
      </div>
    </>
  );
};

export default Filter;
