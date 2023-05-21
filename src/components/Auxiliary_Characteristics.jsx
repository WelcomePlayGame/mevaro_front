import { FaTintSlash, FaSpinner, FaThermometerThreeQuarters, FaWater} from "react-icons/fa";

export const AuxiliaryCharacteristis = () => {






    return (


        <section>
            <div className="auxiliary_box">
                <div className="auxiliary_box_text">
                    <FaTintSlash className='auxiliaryCharacteristis_icon'/>
                    <h6>Не прати</h6>
                </div>
                <div className="auxiliary_box_text">
                    <FaSpinner className='auxiliaryCharacteristis_icon'/>
                    <h6>Заборонена машинна сушка</h6>
                </div>
                <div className="auxiliary_box_text">
                    <FaWater className='auxiliaryCharacteristis_icon'/>
                    <h6>Волога хімчистка заборонена</h6>
                </div>
            </div>
        </section>
    )
}