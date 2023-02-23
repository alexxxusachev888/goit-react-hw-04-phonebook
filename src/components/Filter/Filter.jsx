import { Input, Label } from './Filter.styled';

export function Filter({value, onChange}) { 
    return (
        <Label>
            Find contact by name: 
            <Input type="text" value={value} onChange={onChange}></Input>
        </Label>
        
    )
}