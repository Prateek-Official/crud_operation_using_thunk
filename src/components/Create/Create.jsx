import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice/userSlice";

const Create = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const addUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    dispatch(createUser(userData));
  };

  return (
    <div className="bg-gray-200">
      <form className="w-1/2 mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-0.5">
          <label className="text-lg font-semibold">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded-md bg-white"
            onChange={addUser}
            name="name"
          />
        </div>

        <div className="flex flex-col gap-0.5 mt-2">
          <label className="text-lg font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md bg-white"
            onChange={addUser}
            name="email"
          />
        </div>

        <div className="flex flex-col gap-0.5 mt-2">
          <label className="text-lg font-semibold">Age</label>
          <input
            type="number"
            placeholder="Age"
            className="px-4 py-2 rounded-md bg-white"
            onChange={addUser}
            name="age"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label>
            <input type="radio" name="gender" value="male" onChange={addUser} />{" "}
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={addUser}
            />{" "}
            Female
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-200 cursor-pointer px-4 py-2 rounded-md mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
