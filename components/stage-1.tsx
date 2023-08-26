import { Input } from "./input";
import { PrevNext } from "./prev-next";
import { Select } from "./select";

export const Stage1 = ({ state, onChange }: any) => {
  if (state.stage !== 1) return null;
  return (
    <>
      <div>
        <Input label="Name" name="name" value={state.name} onChange={e => onChange('name', e.target.value)} required />
        <Select label="Make" name="make" size={6} required value={state.make} onChange={e => onChange('make', e.target.value)} options={[
          { value: 'audi', label: 'AUDI' },
          { value: 'bmw', label: 'BMW' },
          { value: 'vauxhal', label: 'VAUXHAL' },
          { value: 'mercedes', label: 'MERCEDES' },
          { value: 'peugeot', label: 'PEUGEOT' },
          { value: 'renault', label: 'RENAULT' },
        ]} />
      </div>
      <PrevNext stage={state.stage} onChange={onChange} prev="Home" isValid={state.name && state.make} />
    </>
  );
}