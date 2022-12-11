import React, { useState } from "react";
import axios from "axios";

export const DiseaseLib = () => {
  const [disease, setDisease] = useState("");
  const [tableOfContent, setTableOfContent] = useState([]);
  const [detailedContent, setDetailedContent] = useState([]);
  const [active, setActive] = useState("");

  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          id="disease"
          placeholder="Disease"
          onChange={(e) => {
            setDisease(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .get(
                `https://clinicaltables.nlm.nih.gov/api/disease_names/v3/search?terms=${disease}`
              )
              .then((data) => {
                let responce = [...data.data[3]];
                setTableOfContent(responce);
              });
          }}
        >
          Search
        </button>
      </form>
      <div>
        <ul>
          {tableOfContent.map((element, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const searchQuery = e.target.innerText.trim();

                  let url = "https://en.wikipedia.org/w/api.php";
                  let params = {
                    action: "query",
                    list: "search",
                    srsearch: searchQuery,
                    format: "json",
                    limit: 20,
                  };

                  url = url + "?origin=*";
                  Object.keys(params).forEach((ind) => {
                    url += "&" + ind + "=" + params[ind];
                  });

                  fetch(url)
                    .then((response) => {
                      return response.json();
                    })
                    .then((response) => {
                      const res = [...response.query.search];
                      console.log(res);
                      for (const i of res) {
                        const pageLink = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${i.pageid}&inprop=url&format=json`;
                        i["pagelink"] = pageLink;
                      }
                      setDetailedContent(res);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                {element[0]}
              </li>
            );
          })}
        </ul>
        {detailedContent.length > 0 &&
          detailedContent.map((ele, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const current_element = detailedContent[index];
                  console.log(current_element.pagelink);
                  axios.get(current_element.pagelink).then((data) => {
                    const current =
                      data.data.query.pages[current_element.pageid].fullurl;
                    setActive(current);
                    window.location.href = current;
                  });
                }}
              >
                {ele.title}
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};
