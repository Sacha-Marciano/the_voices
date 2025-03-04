import Concept from "@/components/Concept";
import { concepts } from "@/config";
import React from "react";
import { useParams } from "react-router-dom";

const ConceptPage = () => {
  const params = useParams();

  const concept = concepts[params.id];

  return (
    <Concept
      isCard={false}
      name={concept.name}
      imgSrc={concept.imgSrc}
      info={concept.info}
    />
  );
};

export default ConceptPage;
