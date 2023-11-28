import { Container } from './styles';
import InputMask, { Props } from 'react-input-mask';

interface InputProps extends Props {
    name: string;
    label?: string;
    icon?: React.ReactNode;
    error?:boolean;
    maskChar?: string;
  }
export const Input: React.FC<InputProps> = ({ name, label, icon, ...props }) => {
    return (
        <Container>
            <InputMask type="text" id={name} name={name} maskChar={""} {...props} />
        </Container>
    );
};