"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import { useTranslations } from "next-intl";

interface Product {
  id:number;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const t = useTranslations("Index");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="mt-24  mx-auto px-10"
        id="packages"
      >
        <div>
          <h2 className="sm:text-[50px] text-[28px] text-white font-[400] text-center mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
              {t("solanaProducts.titleA")}
            </span>{" "}
            {t("solanaProducts.titleB")}
          </h2>
        </div>

        <div className="w-full mx-auto relative">
          <div className="relative mx-auto max-w-[1150px] px-5">
            <div className="mt-5 max-w-[1150px] mx-auto grid gap-x-7 sm:grid-cols-2 md:grid-cols-3">
              {products.length > 0 ? (
                products.map((item: Product) => (
                  <ProductCard key={item.id} item={item} />
                ))
              ) : (
                <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
                  <h4 className="text-center text-3xl text-red-500">
                    Oops! No trending data found
                  </h4>
                </div>
              )}
            </div>
            {products.length > 0 && (
              <div className="flex w-full justify-center">
                <Link
                  href="/blogs"
                  className="text-[16px] font-medium py-2 text-[#5663FA] hover:text-[#D243FA] active:text-[#B529DC] sm:text-left text-center duration-300 hidden"
                >
                  View More
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
