import React from "react";
import ReactPlayer from "react-player";

const VideosPage = () => {
  return (
    <div className="p-4 text-center space-y-4">
      <h1 className="text-6xl text-primary font-bold my-4">VIDEOS</h1>
      <div className="lg:flex rounded-md bg-white p-4">
        <h2 className="text-primary text-3xl font-bold">Teaser</h2>
        <ReactPlayer
          url={"https://youtu.be/aXtZP_-frJ4"}
          height={500}
          width={"70%"}
        />
      </div>
      <div className="lg:flex rounded-md bg-primary p-4">
        <ReactPlayer
          url={"https://youtu.be/BOlD9ZM1NwQ"}
          height={500}
          width={"70%"}
        />
        <h2 className="text-white font-bold text-3xl">Locked out of heaven</h2>
      </div>
      <div className="lg:flex rounded-md p-4">
        <h2 className="text-white font-bold text-3xl">
          Ain't no mountain high enough
        </h2>
        <ReactPlayer
          url={"https://youtu.be/POV6Ppf1Pr8"}
          height={500}
          width={"70%"}
        />
      </div>
      <div className="lg:flex rounded-md bg-white p-4">
        <h2 className="text-primary font-bold text-3xl">Teaser 2017</h2>
        <ReactPlayer
          url={"https://youtu.be/dtLMBo6E-b4"}
          height={500}
          width={"70%"}
        />
      </div>
      <div className="lg:flex rounded-md bg-primary p-4">
        <ReactPlayer url={""} height={500} width={"70%"} />
        <h2 className="text-white font-bold text-3xl">Clip The Voices</h2>
      </div>
      <div className="lg:flex  rounded-md p-4">
        <h2 className="text-white font-bold text-3xl">The Show</h2>
        <ReactPlayer
          url={"https://youtu.be/R1ZXJtWZkOE?si=t9JDWfItjGP4cVjp"}
          height={500}
          width={"70%"}
        />
      </div>
    </div>
  );
};

export default VideosPage;
