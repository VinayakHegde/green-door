import { PrevNext } from "./prev-next";
import { Select } from "./select";

export const Stage2 = ({ state, onChange }: any) => {
  if (state.stage !== 2) return null;
  return (
    <>
      <Select label="Colour" name="colour" size={6} required value={state.colour} onChange={e => onChange('colour', e.target.value)} options={[
        { value: 'blue', label: 'BLUE' },
        { value: 'red', label: 'RED' },
        { value: 'black', label: 'BLACK' },
        { value: 'orange', label: 'ORANGE' },
      ]} />
      <PrevNext stage={state.stage} onChange={onChange} isValid={state.colour} />
    </>
  );
}