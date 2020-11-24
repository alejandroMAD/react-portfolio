import React from "react";
import profilePicture from "../../../static/assets/images/bio/idphoto.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <img src={profilePicture} />
      </div>

      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quod
        beatae doloremque magnam sed quaerat ea molestiae dignissimos ratione
        natus aspernatur quam eligendi dicta? Perferendis omnis, iste molestias
        sint iure ipsam quos labore! Ab eveniet illo suscipit, molestias,
        dolores, inventore blanditiis dolorum fugiat consequatur nam saepe
        deserunt reprehenderit iusto at.
      </div>
    </div>
  );
}
