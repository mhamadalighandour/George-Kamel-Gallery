import React, { useEffect, useRef } from "react";
import { ImagePanorama, Viewer, Infospot } from "panolens";
import pano from "../assets/images/8-1.jpg";

function ViewPano() {
  const containerRef = useRef(null);
  const panorama = useRef(null);
  const viewer = useRef(null);
  const infospot = useRef(null);

  useEffect(() => {
    if (panorama.current || viewer.current) {
      return;
    }
    // controls.current = CONTROLS;
    panorama.current = new ImagePanorama(pano);
    infospot.current = new Infospot(350);
    infospot.current.position.set(1000, -1000, -2000);
    panorama.current.add(infospot.current);
    viewer.current = new Viewer({ container: containerRef.current });
    viewer.current.add(panorama.current, panorama.current);
  }, []);

  return (
    <div
      ref={containerRef}
      id="panoCont"
      style={{ width: "100%", height: "100%", margin: "0 auto" }}
    ></div>
  );
}

export default ViewPano;
