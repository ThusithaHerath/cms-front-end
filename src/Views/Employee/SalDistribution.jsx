
import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["Name", "Salary"];

export default function SalDistribution() {
  const [salary, setSalary] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);

  useEffect(() => {
    async function fetchSalaryDistribution() {
      try {
        const response = await axios.get("http://localhost:8080/api/employees/salary-distribution");
        setSalary(response.data);
        
        // Calculate total salary
        const total = Object.values(response.data).reduce((acc, cur) => acc + cur, 0);
        setTotalSalary(total);
      } catch (error) {
        console.error("Error fetching salary distribution", error);
      }
    }
    fetchSalaryDistribution();
  }, []);

  return (
    <>
      <Navbar />
      <div className="justify-center mt-10 m-5">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(salary).map(([name, salaryAmount], index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {salaryAmount}
                    </Typography>
                  </td>
                </tr>
              ))}
              <tr style={{ backgroundColor: "lightgray" }}>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Total
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    {totalSalary}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
