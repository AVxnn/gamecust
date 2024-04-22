"use client";
import React, { useState } from "react";

const AllPosts = () => {
  const [sortBy, setSortBy] = useState({ field: "", asc: true });

  const data = [
    { id: 1, Изображение: "image1.jpg", Название: "Продукт A" },
    { id: 2, Изображение: "image2.jpg", Название: "Продукт B" },
    { id: 3, Изображение: "image3.jpg", Название: "Продукт C" },
    { id: 4, Изображение: "image4.jpg", Название: "Продукт D" },
    { id: 5, Изображение: "image5.jpg", Название: "Продукт E" },
  ] as any;

  const sortedData = data.slice().sort((a: any, b: any) => {
    if (a[sortBy.field] < b[sortBy.field]) return sortBy.asc ? -1 : 1;
    if (a[sortBy.field] > b[sortBy.field]) return sortBy.asc ? 1 : -1;
    return 0;
  });

  const columns = [
    { title: "id", field: "id" },
    { title: "Изображение", field: "Изображение" },
    { title: "Название", field: "Название" },
  ];

  const handleSort = (field: string) => {
    if (sortBy.field === field) {
      setSortBy({ ...sortBy, asc: !sortBy.asc });
    } else {
      setSortBy({ field, asc: true });
    }
  };
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field} onClick={() => handleSort(column.field)}>
              {column.title}
            </th>
          ))}
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row: any) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.field}>{row[column.field]}</td>
            ))}
            <td>
              <button onClick={() => {}}>Редактировать</button>
              <button onClick={() => {}}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllPosts;
