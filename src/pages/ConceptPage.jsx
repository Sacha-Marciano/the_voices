import Concept from "@/components/Concept";
import { concepts } from "@/config";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ConceptPage = () => {
  const params = useParams();

  const concept = concepts[params.id];

  return (
    <>
      <Concept
        isCard={false}
        name={concept.name}
        imgSrc={concept.imgSrc}
        info={concept.info}
      />
      <div className="flex mt-4 w-full justify-around">
        <Link
          to={
            concepts[params.id - 1]
              ? `/concept/${params.id - 1}`
              : `/concept/${concepts.length - 1}`
          }
          className="bg-primary text-white p-4 rounded-lg"
        >
          {"<"}
        </Link>
        <Link
          to={
            concepts[parseInt(params.id) + 1]
              ? `/concept/${parseInt(params.id) + 1}`
              : `/concept/0`
          }
          className="bg-primary text-white p-4 rounded-lg"
        >
          {">"}
        </Link>
      </div>
    </>
  );
};

export default ConceptPage;
