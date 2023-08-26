import { Button } from "./button";
import { StageIndicator } from "./stage-indicator";

export const PrevNext = ({ prev, next, stage, onChange, isValid }: PrevNextProps) => {
  const onPrev = () => onChange('stage', stage - 1);
  const onNext = () => isValid && onChange('stage', stage + 1);
  return (
    <div className="flex flex-row gap-4 items-center justify-between  p-4 w-full">
      <Button onClick={onPrev}>{prev ?? 'Prev'}</Button>
      <StageIndicator stage={stage} />
      <Button onClick={onNext} disabled={stage > 4}>{next ?? 'Next'}</Button>
    </div>
  );
}