import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components";
import { TextField, Button } from "../../Components";
import axios from "axios";

export default function ConfigMinSalary() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    grossSalary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/employees/add", formData);
      console.log("Employee added successfully!");
      // Redirect to "/"
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-3 lg:bg-white lg:p-10 rounded-lg">
          <p className="lg:text-4xl sm:text-2xl font-semibold">
            Configure Minimum Tax Applicable Salary
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4"
          >
            <TextField
              name="minTaxSal"
              type="number"
              placeholder="Salary"
              minLength={6}
              maxLength={12}
              value={formData.grossSalary}
              onChange={handleChange}
            />

            <Button type="submit" title="Add" />

          </form>
        </div>
      </div>
    </>
  );
}
