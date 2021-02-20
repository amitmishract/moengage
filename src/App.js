import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import d from "./data.json";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState(d);

  useEffect(() => {
    let newData = d
      .filter((val) => {
        return val.name.includes(name);
      })
      .filter((val) => {
        return val.company.includes(company);
      })
      .filter((val) => {
        return val.type.includes(type);
      });
    setData(newData);
    setPage(1);
  }, [name, company, type]);

  return (
    <div className="container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>
                <p>name</p>
                <input onChange={(e) => setName(e.target.value)} />
              </th>
              <th>
                <p>company</p>
                <input onChange={(e) => setCompany(e.target.value)} />
              </th>
              <th>
                <p>type</p> <input onChange={(e) => setType(e.target.value)} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length &&
              data.slice(10 * (page - 1), 10 * page).map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value._id}</td>
                    <td>{value.name}</td>
                    <td>{value.company}</td>
                    <td>{value.type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          page={page}
          totalPage={Math.ceil(data.length / 10)}
          onChange={setPage}
        />
      </div>
    </div>
  );
}

export default App;
