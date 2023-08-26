import { Input } from "./input";
import { PrevNext } from "./prev-next";

export const Stage3 = ({ state, onChange }: any) => {
  if (state.stage !== 3) return null;
  return (
    <>
      <Input label="Code" name="code" value={state.code} onChange={e => onChange('code', e.target.value)} required />
      <PrevNext stage={state.stage} onChange={onChange} next="Done" isValid={state.code} />
    </>
  );
}