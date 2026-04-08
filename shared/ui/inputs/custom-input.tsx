import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps & {
    label: string;
};

const CustomInput = ({label, ...props}: CustomInputProps) => {
    return <div className="w-full">
    <TextField sx={{width: '100%', height: "50px" , padding: 0}} label={label} {...props}/>
    </div>

}

export default CustomInput;