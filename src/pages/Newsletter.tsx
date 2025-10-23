import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsLetter } from "../api/newsLetter";
import { toast } from "react-toastify";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: subscribeToNewsLetter,
    onSuccess: (data: { msg: string }) => {
      toast.success(data.msg);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <form
      className="bg-gray-100 p-10 shadow w-full max-w-2xl mx-auto my-12 rounded"
      onSubmit={handleSubmit}
    >
      <h4 className="text-center mb-8 text-3xl">Our newsletter</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          lastName
        </label>
        <input
          onChange={handleChange}
          value={formData.lastName}
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
        />
      </div>
      <button className="btn w-full mt-2" type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      {isError && <p className="text-red-500 text-sm">{error.message}</p>}
    </form>
  );
};

export default Newsletter;
