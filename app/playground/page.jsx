import PaintingBoard from "@/components/PaintingBoard";
import React from "react";

export const Services = () => {
  return (
    <section className="h-full text-center">
      <div className="container mx-auto ">
        <h2 className="h2 text-accent pixel py-4">Draw A Aimple Pixel Art!</h2>
          <PaintingBoard />
      </div>
    </section>
  );
};

export default Services;
