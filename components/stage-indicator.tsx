const MAX_STEPS = 4;
export const StageIndicator = ({ stage }: Pick<PrevNextProps, 'stage'>) => {
  return (
    <div className="flex flex-row items-center justify-between w-16">
      {
        Array.from(Array(MAX_STEPS).keys()).map((i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i + 1 === stage ? 'bg-blue-500' : 'bg-gray-800'}`}></div>
        ))
      }
    </div>
  );
}