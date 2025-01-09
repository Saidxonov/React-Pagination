import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

function Pagenation() {
  const [comments, setComments] = useState([]);
  const [pageCount, setPageCount] = useState(45);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://json-api.uz/api/project/forest/animals?skip=${currentPage}&limit=5`
      )
      .then((response) => {
        console.log(response.data.data);
        if (response.status == 200) {
          setComments(response.data.data);
          console.log("data responsega saqlandi");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  function handleChangePage(e, p) {
    console.log(25, p);
    setCurrentPage(p);
  }

  return (
    <>
      <div className="container">
        <div className="gap-[50px] justify-between">
          <h1 className="text-center text-4xl">Animals</h1>
          {comments.length > 0 &&
            comments.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="border-gray-700 border-solid border-[5px] p-5 w-[100%] rounded-2xl flex justify-between mt-[50px]"
                >
                  <h1 className="w-1/4 font2 text-2xl">{value.id}</h1>
                  <h1 className="w-1/4 font2 text-2xl">{value.name}</h1>
                  <h1 className="w-1/4 font2 text-2xl">{value.habitat}</h1>
                  <h1 className="w-1/4 font2 text-2xl">{value.diet}</h1>
                </div>
              );
            })}
        </div>
        <Pagination
          className="mt-[50px] flex justify-end"
          count={pageCount}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          sx={{ marginBottom: "50px" }}
        />
      </div>
    </>
  );
}

export default Pagenation;
