// src/components/Gallery.tsx
import React from "react";
import "./Gallery.css"; // Importiere die spezifische CSS-Datei für die Galerie

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string; // Bild-URL
  description: string;
}

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Erste Galerie",
      imageUrl: "https://via.placeholder.com/300x200?text=Bild+1",
      description: "Dies ist die erste Galerie mit interessanten Inhalten.",
    },
    {
      id: 2,
      title: "Zweite Galerie",
      imageUrl: "https://via.placeholder.com/300x200?text=Bild+2",
      description:
        "Hier gibt es eine zweite Galerie mit weiterführenden Details und Informationen.",
    },
    {
      id: 3,
      title: "Dritte Galerie",
      imageUrl: "https://via.placeholder.com/300x200?text=Bild+3",
      description:
        "Dies ist die dritte Galerie, die spannende Projekte beschreibt.",
    },
    {
      id: 4,
      title: "Vierte Galerie",
      imageUrl: "https://via.placeholder.com/300x200?text=Bild+4",
      description:
        "In dieser Galerie werden Themen zu Technologie und Innovation behandelt.",
    },
    {
      id: 5,
      title: "Fünfte Galerie",
      imageUrl: "https://via.placeholder.com/300x200?text=Bild+5",
      description: "Eine Galerie über Minimalismus und nachhaltiges Leben.",
    },
  ];

  return (
    <div className="gallery">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.imageUrl} alt={item.title} className="gallery-image" />
          <h2 className="gallery-title">{item.title}</h2>
          <p className="gallery-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
