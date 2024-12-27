import {FiCheck} from 'react-icons/fi'
import { Option } from '../types'

interface PropsType {
    option: Option
    selectedOption: Option | null
    handleOptionSelect: (option: Option)=>void
}

export const OptionComponent = ({
    option,
    selectedOption,
    handleOptionSelect
}: PropsType )=>{
    return (
        <div
            key={option.value}
            className={`dropdown-option ${
                selectedOption?.value === option.value ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
        >
        <span>{option.label}</span>
        {selectedOption?.value === option.value && (
            <FiCheck size={20} color="#007bff" className="tick-icon" />
        )}
        </div>
    )
}