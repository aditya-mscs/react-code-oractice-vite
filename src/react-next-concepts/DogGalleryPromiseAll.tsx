//@ts-nocheck
import React, { useEffect, useState } from "react";
import GoBackToHome from "../components/GoBacktoHome";

export const DogGalleryPromiseAll = () => {

  const [breeds, setBreeds] = useState([]);
  const [thumbnails, setThumbnails] = useState({});
  const [isBreedsLoading, setIsBreedsLoading] = useState(true);
  const [isThumbnailsLoading, setIsThumbnailsLoading] = useState(true);

  // Fetch list of all dog breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();
        const breedNames = Object.keys(data.message);
        setBreeds(breedNames);
      } catch (err) {
        console.error("Error fetching breeds:", err);
      } finally {
        setIsBreedsLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  // Fetch thumbnails for each breed
  useEffect(() => {
    if (breeds.length === 0) return;

    const thumbnailsData = {};
    const fetchPromises = breeds.map((breed) =>
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((res) => res.json())
        .then((imgData) => {
          thumbnailsData[breed] = imgData.message;
        })
        .catch((err) => {
          console.error(`Error fetching thumbnail for ${breed}:`, err);
        })
    );

    Promise.all(fetchPromises)
      .then(() => {
        console.log("All thumbnails fetched successfully");
        setThumbnails(thumbnailsData);
        setIsThumbnailsLoading(false);
      });
    //   .catch((err) => {
    //     console.error("Error fetching thumbnails:", err);
    //     setIsThumbnailsLoading(false);
    //   });
  }, [breeds]);

  const isLoading = isBreedsLoading || isThumbnailsLoading;

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <GoBackToHome />
      <h1>Dog Breeds Gallery 🐕</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {breeds.map((breed) => (
          <div key={breed} style={{ width: "150px", textAlign: "center" }}>
            <img
              src={thumbnails[breed]}
              alt={breed}
              style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "8px" }}
            />
            <p>{breed.charAt(0).toUpperCase() + breed.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

