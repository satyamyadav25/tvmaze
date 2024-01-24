import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    movie: "India",
    city: "",
    state: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event)
  {
    console.log("Form Data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col">
      <h3 className='flex flex-row py-4 font-serif  justify-center w-full font-extrabold  text-green-800  text-4xl bg-slate-400'>Book Movie Ticket</h3>
      <form onSubmit={submitHandler} className='flex flex-col items-center'>
        <label htmlFor="firstName" className="text-2xl">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline p-1 "
          id="firstName"
        />
        <br />
        <label htmlFor="lastName" className="text-2xl">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline p-1"
          id="lastName"
        />
        <br />
        <label htmlFor="mobile" className="text-2xl">Mobile No.</label>
        <br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No."
          value={formData.mobile}
          onChange={changeHandler}
          className="outline p-1"
          id="mobile"
        />
        <br />
        <label htmlFor="movie" className="text-2xl">MovieName</label>
        <br />

        <select
          name="movie"
          id="movie"
          movie
          value={formData.movie}
          onChange={changeHandler}
        >
          <option value="movie">Movie</option>
          
        </select>

        <br />
        
        <label htmlFor="city" className="text-2xl">City</label>
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="outline p-1"
          id="city"
        />
        <br />
        <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full m-10 p-5 font-sans font-bold text-xl">Submit</button> 
      </form>
    </div>
  );
}

export default Form;

