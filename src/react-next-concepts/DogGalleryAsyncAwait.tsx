//@ts-nocheck
import React, { useEffect, useState } from "react";
import GoBackToHome from "../components/GoBacktoHome";

export const DogGalleryAsyncAwait = () => {

  const [breeds, setBreeds] = useState([]);
  const [thumbnails, setThumbnails] = useState({});
  const [isBreedsLoading, setIsBreedsLoading] = useState(true);
  const [isThumbnailsLoading, setIsThumbnailsLoading] = useState(true);

  // Fetch list of all dog breeds
  useEffect(() => {
    const fetchBreeds = async () => { //_______ REMEMBER ALL ASYNC STATEMENTS AND ADD AWAIT
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all"); //fetch() returns a Promise that resolves to a Response object.
        const data = await res.json(); //.json() is an asynchronous operation that reads so await
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
    const fetchThumbnails = async () => {
      if (breeds.length === 0) return;

      const thumbnailsData = {};

      const fetchPromises = breeds.map(async (breed) => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`); //ASYNC CALL SO AWAIT
        const imgData = await res.json(); //ASYNC CALL SO AWAIT
        thumbnailsData[breed] = imgData.message;
      });

      // await Promise.all(fetchPromises); //_____ ALL RESPONSES SHD COME BACK so await Promise all
      // console.log("All thumbnails fetched successfully");
      // setThumbnails(thumbnailsData);
      // setIsThumbnailsLoading(false);
      //OR
      //_______ WHENEVER MULTIPLE CALLS ARE MADE TO THE SAME API, USE PROMISE.ALL
      Promise.all(fetchPromises) //______ Promise.all this way EASY TO REMEMBER but not callback needed
        .then(() => {
          console.log("All thumbnails fetched successfully");
          setThumbnails(thumbnailsData);
          setIsThumbnailsLoading(false);
        });
    };

    fetchThumbnails();
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

