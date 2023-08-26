import { PrevNext } from "./prev-next";

const SPECIAL_COLORS = ['red'];
export const Stage4 = ({ state, onChange }: any) => {
  if (state.stage < 4) return null;
  return (
    <>
      <div className="flex flex-col gap-4 flex-1">
        <div>
          Hey <strong className="capitalize">{state.name}</strong>, here is your quote:
        </div>
        <q>I have a <strong className="uppercase">{state.make}</strong> and the colour is <strong className="uppercase">{state.colour}</strong></q>

        {SPECIAL_COLORS.includes(state.colour) && <div className="flex flex-row gap-4 items-center justify-between border-2 shadow-md p-4 w-full" style={{ borderColor: state.colour }}>
          <i>By the way, <strong className="uppercase" style={{ color: state.colour }}>{state.colour}</strong> is the best colour for a car.</i>
        </div>}
        <div><strong className="uppercase">ref:</strong> {state.code}</div>

      </div>
      {state.stage === 4 && <PrevNext stage={state.stage} onChange={onChange} next="Save" isValid />}
    </>
  );
}