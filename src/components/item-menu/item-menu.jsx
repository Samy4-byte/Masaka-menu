import React, { useState } from "react";

export const ItemMenu = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <>
      <div className="item-container">
        {props.items.map((item) => (
          <div className="item-card" key={item.id}>
            <button className="item-button" onClick={() => openModal(item)}>
              <img className="item-photo" src={item.photo} alt={item.name} />
            </button>
            <h2 className="font_small">{item.name}</h2>
            {item.ingredients && (
              <p className="font_smaller">{item.ingredients.join(", ")}</p>
              )}
            {item.description && (
              <p className="font_smaller">{item.description}</p>
              )}
            <p className="font_green">Цена: {item.price} сом</p>
           {item.weight && (
             <p className="font_smaller">{item.weight} гр</p>
             )}
             <h2 className="font_small">{item.name2}</h2>
             {item.ingredients2 && (
               <p className="font_smaller">{item.ingredients2.join(", ")}</p>
             )}
             {item.price2 && (
               <p className="font_green">Цена: {item.price2} сом</p>
             )}
             {item.weight2 && (
               <p className="font_smaller">{item.weight2} гр</p>
             )}
           {item.count && (
             <p className="font_smaller">{item.count} шт</p>//
           )}
          </div>
        ))}
      </div>

      {selectedItem && selectedItem.id && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedItem.photo} alt={selectedItem.name} />
            <h2 className="font_smaller">{selectedItem.name}</h2>
            {selectedItem.ingredients && (
              <p className="font_smaller">Состав: {selectedItem.ingredients.join(", ")}</p>
            )}
            {selectedItem.description && (
              <p className="font_smaller">Описание: {selectedItem.description}</p>
            )}
            <p className="font_green">Цена: {selectedItem.price} сом</p>
            {selectedItem.weight && (
              <p className="font_smaller">Вес: {selectedItem.weight} гр</p>
            )}
            {selectedItem.count && (
              <p className="font_smaller">Количество: {selectedItem.count} шт</p>
            )}
            <h2 className="font_smaller">{selectedItem.name2}</h2>
            {selectedItem.ingredients2 && (
              <p className="font_smaller">Состав: {selectedItem.ingredients2.join(", ")}</p>
            )}
            {selectedItem.description2 && (
              <p className="font_smaller">Описание: {selectedItem.description2}</p>
            )}
            {selectedItem.price2 && (
              <p className="font_green">Цена: {selectedItem.price2} сом</p>
            )}
            {selectedItem.weight2 && (
              <p className="font_smaller">Вес: {selectedItem.weight2} гр</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
