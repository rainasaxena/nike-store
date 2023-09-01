import React, { useState, useEffect } from "react";
import { IndividualCard } from "./individual-shoe-card";
import './ShoeList.css'

function ShoeList() {
  const [shoeData, setData] = useState([]);
  const data = [
    {
      id: 1,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
      price: "$49.99",
      title: "Nike Air Force 1 '07",
      description: "Bestseller - Men's Shoes",
    },
    {
      id: 2,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71a3d324-05c0-4b8d-9d78-0bd937520798/infinityrn-4-road-running-shoes-mLRjcz.png",
      price: "$69.99",
      title: "Nike InfinityRN 4",
      description:
        "Sustainable Material - Road Running Shoes",
    },
    {
      id: 3,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5ba3b10c-b59c-4c7b-af60-71276ffe1f03/elevate-3-basketball-shoes-QT43Gj.png",
      price: "$89.99",
      title: "Nike Elevate 3",
      description: "Basketball Shoes",
    },
    {
      id: 4,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cb62ff6-4f67-44dd-85c6-740cb4044c65/dunk-low-shoes-63phv7.png",
      price: "$59.99",
      title: "Nike Dunk Low",
      description:"Women's Shoes",
    },
    {
      id: 5,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b58f3265-2815-4b49-8882-b69436a34822/lebron-xx-ep-basketball-shoes-dpQwl8.png",
      price: "$79.99",
      title: "LeBron XX EP",
      description:"Basketball Shoes",
    },
    {
      id: 6,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f65df0d0-638d-44ce-b14d-edec03f296c6/e-series-1-shoes-j57hxR.png",
      price: "$109.99",
      title: "Nike E-Series 1.0",
      description:
        "Men's Shoes",
    },
    {
      id: 7,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bd7ac0c4-a06b-4d75-98a5-4481c53cc189/court-vision-alta-shoes-p7Dnlp.png",
      price: "$49.99",
      title: "Nike Court Vision Alta",
      description:
        "Women's Shoes",
    },
    {
      id: 8,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31ff8b80-45a4-4032-b61d-b22fa7645118/react-pegasus-trail-4-se-trail-running-shoes-lGbXdr.png",
      price: "$69.99",
      title: "Nike Pegasus Trail 4",
      description:
        "Women's rugged trail running shoes",
    },
    {
      id: 9,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/127204da-ec9b-4d57-a8b2-116e8d66ba08/air-max-90-futura-shoes-csW3Tp.png",
      price: "$59.99",
      title: "Nike Air Max 90 Futura",
      description:
        "Women's Shoes",
    },
    {
      id: 10,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e71e52d-be87-4397-aeb7-1d528a8f6513/go-flyease-easy-on-off-shoes-3svRCL.png",
      price: "$89.99",
      title: "Nike Go FlyEase",
      description:
        "Easy on/off Shoes",
    },

    {
      id: 11,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e5d519f0-fa05-48b3-a4c5-c94478590393/air-alpha-force-88-shoes.png",
      price: "$89.99",
      title: "Nike Air Alpha Force 88",
      description:
        "Men's Shoes",
    },

    {
      id: 12,
      image_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/390ca261-f90b-4b01-97e3-2fb2a076f876/air-max-90-shoes-nLFl5V.png",
      price: "$89.99",
      title: "Nike Air max 90",
      description:
        "Women's Shoes",
    },
  ];

  const doSomething = async () => {
    const url = "https://shoes-collections.p.rapidapi.com/shoes";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "982e57ee39msh5cd442bafbf0776p18f591jsnfc3b51250229",
        "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(()=>{
  //   doSomething();
  // })


  return (
    <div>
        <div className="heading">
          <h1>Explore a variety of styles from Nike</h1>
        </div>

      <div className='map-func'>
        {data.map((shoe) => (
          <div className="card" key={shoe.id}>
            <div className="content">
              <IndividualCard shoeItem={shoe}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeList;
