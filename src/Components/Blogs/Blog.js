import React from 'react';
import image4 from '../../Images//answer4.png'
import './Blog.css'

const Blog = () => {
    return (
        <div className="row container mt-5">
            <img className="w-50 blog-img" src={image4} alt="" />
            <div className="col-md-6 ">
                <h4>Difference between Node.JS and Javascript ?</h4>
                <p>১ :জাভাস্ক্রিপ্ট হলো একটা প্রগ্রামিং ল্যাংগুয়েজ,আর Node js হলো  runtime environment. </p>
                <p>২ :জাভাস্ক্রিপ্ট শুধু মাত্র ব্রাউজারে চালানো যায়, আর জাভাস্ক্রিপ্ট কে আমরা ব্রাউজারের বাহিরে চালাই Node js এর মাধ্যমে।  </p>
                <p>৩ :javascript এর ক্ষমতা আছে Dom এর মাধ্যমে HTML  ট্যাগ গুলা ব্যবহার করার, আর Node js এর HTML ট্যাগ ব্যবহার করার ক্ষমতা নেই।</p>
                <p>৪ :javascript হলো frontend development ,আর  Node js  হলো Backend server .</p>
                <div className=" mt-5">
                <h4>Difference between SQL and NoSQL</h4>
                <p>১ : SQL এর নির্দিষ্ট বা ফিক্সড একটা আকৃতি রয়েছে আর NoSQL  এর ডাইনামিক আকৃতি ।</p>
                <p>২ : SQL এটা ভাগ ভাগ শ্রেনী বদ্ধ কোন ডাটাবেজ এর জন্য উপযুক্ত নয় ,আর NoSQL এটা এটা ভাগ ভাগ শ্রেনী বদ্ধ কোন ডাটাবেজ এর জন্য উপযুক্ত </p>
                <p>৩ : SQL এটা Vertically সাজানো ,আর NoSQL এটা horizontally সাজানো ।</p>
            </div>
            </div>
            
            
        </div>
    );
};

export default Blog;