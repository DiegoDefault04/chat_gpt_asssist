"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { setAssistantId, assistantIds } from "./assistant-config";

const Home = () => {
  const [currentAssistantId, setCurrentAssistantId] = useState("");

  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };

  useEffect(() => {
    // Establecer el valor inicial del ID solo en el cliente
    setCurrentAssistantId(assistantIds.basicChat || "default-basic-id");
  }, []);

  const handleCategoryClick = (category: keyof typeof categories) => {
    setAssistantId(category); // Actualiza el ID en assistant-config.ts
    const newAssistantId = assistantIds[category]; // Obtiene el nuevo ID
    setCurrentAssistantId(newAssistantId || "default-basic-id"); // Actualiza el estado local
    console.log(`Selected Assistant ID: ${newAssistantId}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a
            key={name}
            className={styles.category}
            href={`/examples/${url}`} // Usamos href para navegación
            onClick={(e) => {
              handleCategoryClick(url as keyof typeof categories); // Llama a la función para actualizar el ID
              // No llamamos preventDefault, ya que no necesitamos evitar la navegación
            }}
          >
            {name}
          </a>
        ))}
      </div>
      <div>
        <p>Current Assistant ID: {currentAssistantId}</p>
      </div>
    </main>
  );
};

export default Home;
