import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AuxiliaryCharacteristis } from "../Auxiliary_Characteristics";
export const Success = () => {
  const location = useLocation();
  const data = location.state;
  const [name] = useState(data.name);
  const [title] = useState(data.title);
  return (
    <div className="container">
      <div className="row">
        <div className="success">
          <h3 className="success_h3">
            {name} Ваше замовлення на тканину {title} прийнято.
          </h3>
          <div className="success_info">
            <span className="success_span">
              Ми з Вами скоро свяжемся для уточнення
            </span>
          </div>
          <h3>Правила Догляду за Тканиною</h3>
          <hr />
          <AuxiliaryCharacteristis />
        </div>
      </div>
    </div>
  );
};
