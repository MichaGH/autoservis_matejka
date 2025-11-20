"use client";

import React from "react";

const RealMapComponent = () => {
  const handleNavigate = () => {
    const position = [49.052298194403846, 18.916140275371166];
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-2xl w-full mx-auto py-6 text-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Najdete nás na...{" "}
        <span className="text-yellow-400">Kollárova 73, Martin</span>
      </h2>

      <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d777.386604105816!2d18.915631444940562!3d49.05230390132612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDAzJzA4LjMiTiAxOMKwNTQnNTguMSJF!5e0!3m2!1ssk!2ssk!4v1763648609107!5m2!1ssk!2ssk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <button
        onClick={handleNavigate}
        className="px-6 py-3 bg-black border-2 border-yellow-400 text-gray-200 font-semibold rounded-lg hover:bg-yellow-500/50 transition"
      >
        Navigovať
      </button>
    </div>
  );
};

export default RealMapComponent;
