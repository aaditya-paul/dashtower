import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { firebaseConfig } from "firebaseconfig";
import { initializeApp } from "@firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const ContactModal = () => {
  const initialValues = {
    name: "",
    buisnessName: "",
    email: "",
    message: "",
    checkBox: false,
  };

  const { register, handleSubmit } = useForm();

  const [dataa, setData] = useState("");

  return (
    <form
      className="max-w-xl mx-auto"
      onSubmit={handleSubmit((data) => {
        setData(JSON.stringify(data));
        console.log(data.name);

        fetch("/api/email", {
          method: "post",
          body: JSON.stringify(data),
        }).then(() => {
          alert("Operation Successful ✅");

          const docRef = addDoc(collection(db, "audit_request"), {
            Name: data.name,
            "Buisness Name": data.buisnessName,
            Email: data.email,
            Message: data.message,
          });
        });
      })}
    >
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label className="block text-gray-500 text-sm mb-1" htmlFor="name">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="form-input w-full text-gray-300 border-red-500 focus:border-red-500"
            placeholder="Enter your name"
            required
            {...register("name", { required: true })}
          />
          <p className="text-red-500 text-sm mt-2">This field is required</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-500 text-sm mb-1"
            htmlFor="business-name"
          >
            Business Name <span className="text-red-600">*</span>
          </label>
          <input
            id="business-name"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="Enter your business name"
            required
            {...register("buisnessName", { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-500 text-sm mb-1" htmlFor="email">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="form-input w-full text-gray-300"
            placeholder="Enter your email address"
            required
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-400 text-sm mb-1" htmlFor="message">
            Your Business Social and Internet Links
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-textarea w-full text-gray-300"
            placeholder="Add your links in new line"
            {...register("message")}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              {...register("checkBox", { required: true })}
            />
            <span className="text-gray-400 ml-2 font-light">
              I agree to the privacy policy
            </span>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactModal;
