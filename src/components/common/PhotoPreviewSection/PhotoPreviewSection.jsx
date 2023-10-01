import cn from "classnames";
import React, { useState } from "react";
import { Collection } from "./Collection/Collection";
import styles from "./PhotoPreviewSection.module.scss";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export const PhotoPreviewSection = ({ collection }) => {
  const [categoryName, setCategoryName] = useState("Усі");

  const categoryNames = ["Усі", ...new Set(collection.map((item) => item.category))];
  const category = categoryNames.map((name) => ({ name }));

  const selectedCategory = collection.filter((data) =>
    categoryName === "Усі" ? data : data.category === categoryName,
  );

  return (
    <>
      <div className={cn("container", styles.wrapper)}>
        <Link href="/photos" className={styles.backLink}>
          <FiArrowLeft /> НАЗАД
        </Link>
        <div className={styles.top}>
          <ul className={styles.list}>
            {category.map((item, idx) => (
              <li
                onClick={() => setCategoryName(item.name)}
                className={cn(styles.item, categoryName === item.name && styles.active)}
                key={idx}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          {selectedCategory.map((data, index) => (
            <Collection key={index} name={data.name} images={data.photos} />
          ))}
        </div>
      </div>
    </>
  );
};
