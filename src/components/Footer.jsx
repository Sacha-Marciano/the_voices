import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 items-end">
      <div className="text-white">
        <p>Dev by S.M.M</p>
        <p>© Copyright 2019 - All rights reserved The Voices</p>
      </div>
      <div className="flex gap-4 mr-4">
        <Link to={"https://www.facebook.com/dj.thevoices"} target="_blank">
          <FacebookIcon sx={{ color: "white" }} />
        </Link>
        <Link
          to={"https://www.youtube.com/channel/UCTmOB79D5sJnCpEc8FIwhXw"}
          target="_blank"
        >
          <YouTubeIcon sx={{ color: "white" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
